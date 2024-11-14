import { Dispatch, MutableRefObject, SetStateAction } from 'react'
import { KeyMap } from '../model/model-keyMap'
import {
  Dictionary,
  IGNORED_TREE_KEYS,
  InitialPosition,
  NestingResult,
  SpanValue,
  StackObj,
  TreeRoot,
} from './model-pivotTableRenderer'
import { GroupResult } from './classes/GroupResult'

export const RESULT_PATH_KEY = 'RESULT'
export const TOTAL = 'Total'
const PATH_SEPARATOR = '|'

export function getCurrentPath(filterKey: string, value: string): string {
  return PATH_SEPARATOR + filterKey + '.' + value
}

export function getInitialPosition(ini: InitialPosition | undefined) {
  const stack: InitialPosition[] = []

  if (ini) {
    stack.push(ini)
  } else {
    return 0
  }

  let result = 1

  while (stack.length) {
    const i = stack.pop()
    if (i) {
      if (i.spanAux) {
        result += i.spanAux.value
      }
      if (i.auxIni) {
        stack.push(i.auxIni)
      } else if (i.parentIni) {
        stack.push(i.parentIni)
      }
    }
  }

  return result
}

export function getResult<T extends object>(
  data: Dictionary<T> & TreeRoot,
  increment: 'column' | 'row',
  keyMapping: KeyMap<T>,
  onlyIncreaseSpanOnKeys?: Array<keyof T>
): NestingResult<T>[] {
  const stack: StackObj[] = []

  stack.push({ data, [increment]: 1 })

  const result: NestingResult<T>[] = []

  while (stack.length) {
    const obj = stack.shift()
    if (obj) {
      let spanAux: SpanValue
      let auxIni: InitialPosition
      const currentNodeKey = obj.data.nodeKey
      const increaseSpan = !onlyIncreaseSpanOnKeys || onlyIncreaseSpanOnKeys.includes(currentNodeKey)
      Object.keys(obj.data)
        .filter((k) => !IGNORED_TREE_KEYS.includes(k))
        .sort(keyMapping.get(currentNodeKey)?.ordenator)
        .forEach((key) => {
          let span = { value: 1 }
          let spanTree = [span]
          if (obj.spanTree) {
            const myKeys = Object.keys(obj.data).filter((k) => !IGNORED_TREE_KEYS.includes(k))
            const lastSpan = obj.spanTree[0]
            if (myKeys.length > lastSpan.value && increaseSpan) {
              for (let i = 0; i < obj.spanTree.length; i++) {
                obj.spanTree[i].value++
              }
            }
            spanTree.push(...obj.spanTree)
          }

          const rowOrColumn = obj[increment] || 0
          const parentIni = obj.parentIni

          const value = keyMapping.get(currentNodeKey)?.formatter?.(key) ?? key
          const currentPath: string = getCurrentPath(currentNodeKey, value)
          const path = obj.path ? obj.path + currentPath : currentPath

          const initialPosition: InitialPosition = {
            parentIni,
            spanAux: increaseSpan ? spanAux : { value: 0 },
            auxIni,
          }
          result.push({
            span,
            value,
            initialPosition,
            [increment]: rowOrColumn,
            path,
            key: obj.data.nodeKey,
            total: obj.data.nodeValue,
          })

          if (obj.data[key] instanceof GroupResult || obj.data[key].nodeKey === undefined) {
            result.push({
              span: span,
              [increment]: rowOrColumn + 1,
              initialPosition: initialPosition,
              path: path + PATH_SEPARATOR + RESULT_PATH_KEY,
              value: obj.data[key].nodeValue,
              key: RESULT_PATH_KEY as keyof T,
            })
          } else {
            stack.push({
              data: obj.data[key],
              spanTree: spanTree,
              [increment]: rowOrColumn + 1,
              parentIni: initialPosition,
              path,
            })
          }
          auxIni = initialPosition
          spanAux = span
        })
    }
  }
  return result
}

export function createHandleScroll(
  tableContainerRef: MutableRefObject<HTMLDivElement>,
  displayLeftShadow: boolean,
  setDisplayLeftShadow: Dispatch<SetStateAction<boolean>>,
  displayRightShadow: boolean,
  setDisplayRightShadow: Dispatch<SetStateAction<boolean>>
) {
  return () => {
    if (tableContainerRef.current) {
      const displayRight =
        tableContainerRef.current.scrollLeft !==
        tableContainerRef.current.scrollWidth - tableContainerRef.current.clientWidth

      const displayLeft = tableContainerRef.current.scrollLeft > 10

      if (displayLeftShadow !== displayLeft) {
        setDisplayLeftShadow(displayLeft)
      }
      if (displayRight !== displayRightShadow) {
        setDisplayRightShadow(displayRight)
      }
    }
  }
}
