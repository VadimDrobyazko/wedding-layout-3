import { useCallback, useRef } from 'react'

export function useReveal(visibleClass: string) {
  const observerRef = useRef<IntersectionObserver | null>(null)

  return useCallback(
    (node: HTMLElement | null) => {
      if (!node) return
      if (!observerRef.current) {
        observerRef.current = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add(visibleClass)
                observerRef.current?.unobserve(entry.target)
              }
            })
          },
          { threshold: 0.12 },
        )
      }
      observerRef.current.observe(node)
    },
    [visibleClass],
  )
}
