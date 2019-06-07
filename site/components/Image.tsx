import { useEffect, useState } from 'react'

import { darkTheme, useStyles } from '../../lib'

export function Image(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  const { theme, classes } = useStyles(() => ({
    image: {
      maxWidth: '100%',
    },
  }))

  const [currentSource, setCurrentSource] = useState(props.src)
  useEffect(() => {
    const [, path, filename] = /(.*)\/(.*\..*)$/.exec(props.src || '')
    const darkSource = `${path}/dark-${filename}`
    setCurrentSource(theme === darkTheme ? darkSource : props.src)
  }, [theme, props])

  const handleError = () => {
    setCurrentSource(props.src)
  }

  return <img {...props} src={currentSource} onError={handleError} className={classes.image} />
}
