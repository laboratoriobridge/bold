import moment from 'moment'
import React from 'react'

export interface DateTimeProps {
  value: moment.Moment | string | number | Date
  format?: string
}

export function DateTime(props: DateTimeProps) {
  const { value, format } = props

  const mom = moment(value)

  if (!mom.isValid()) {
    return null
  }

  return <time>{mom.format(format)}</time>
}

DateTime.defaultProps = {
  format: 'LLL',
} as Partial<DateTimeProps>
