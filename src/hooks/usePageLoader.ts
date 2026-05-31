import { useState, useEffect } from 'react'

const MIN_DURATION = 2000

export function usePageLoader() {
  const [progress, setProgress] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    let current = 0
    let completed = false
    let contentLoaded = false
    let minDelayPassed = false

    const complete = () => {
      if (completed) return
      if (!contentLoaded || !minDelayPassed) return
      completed = true
      setProgress(100)
      setTimeout(() => setDone(true), 800)
    }

    const onContentLoaded = () => {
      contentLoaded = true
      complete()
    }

    const interval = setInterval(() => {
      if (completed || current >= 88) return
      const speed = Math.max((88 - current) * 0.04, 0.3)
      current = Math.min(current + speed, 88)
      setProgress(Math.round(current))
    }, 80)

    const minDelay = setTimeout(() => {
      minDelayPassed = true
      complete()
    }, MIN_DURATION)

    if (document.readyState === 'complete') {
      onContentLoaded()
    } else {
      window.addEventListener('load', onContentLoaded, { once: true })
    }

    const fallback = setTimeout(() => {
      contentLoaded = true
      minDelayPassed = true
      complete()
    }, 10000)

    return () => {
      clearInterval(interval)
      clearTimeout(minDelay)
      clearTimeout(fallback)
    }
  }, [])

  return { progress, done }
}
