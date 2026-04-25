export function photoUrl(path: string): string {
  const base = (process.env.REACT_APP_PHOTOS_URL ?? '').replace(/\/$/, '')
  return `${base}/${path}`
}
