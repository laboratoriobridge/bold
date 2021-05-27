export function getKeyDirection(key: string) {
  switch (key) {
    case 'ArrowRight':
      return 'right'
    case 'ArrowLeft':
      return 'left'
    case 'ArrowUp':
      return 'up'
    case 'ArrowDown':
      return 'down'
  }
}
