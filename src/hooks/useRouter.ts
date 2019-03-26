import { useContext } from 'react'
import * as ReactRouter from 'react-router'

export const useRouter = <T = any>(): ReactRouter.RouteComponentProps<T> => {
  return useContext((ReactRouter as any).__RouterContext)
}
