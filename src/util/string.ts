// https://pt.wikipedia.org/wiki/Plural
export const pluralRules = [
    { regex: /(ês)$/i, replace: 'eses' },
    { regex: /(es)$/i, replace: 'eses' },
    { regex: /([rz])$/i, replace: '$1es' },
    { regex: /([aeou])l$/i, replace: '$1is' },
    { regex: /il$/i, replace: 'is' },
    { regex: /m$/i, replace: 'ns' },
    { regex: /x$/i, replace: 'x' },
    { regex: /([^s])$/i, replace: '$1s' },
]

export const pluralize = (word: string, count: number, inclusive?: boolean) => {
    let rw = word

    if (count !== 1) {
        for (const rule of pluralRules) {
            if (rule.regex.test(word)) {
                rw = word.replace(rule.regex, rule.replace)
                break
            }
        }
    }

    if (inclusive) {
        return count + ' ' + rw
    } else {
        return rw
    }
}

export const capitalize = (word: string): string => {
    return word.charAt(0).toUpperCase() + word.slice(1)
}
