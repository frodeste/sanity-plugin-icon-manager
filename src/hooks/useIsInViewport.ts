/* eslint-disable no-undef */
/* eslint-disable consistent-return */
import {useCallback, useEffect, useRef, useState} from 'react'

export default function useIsInViewport<T extends Element>(
  options: IntersectionObserverInit = {},
): {ref: (node: T | null) => void; elementHitViewport: boolean} {
  const [elementHitViewport, setElementHitViewport] = useState(false)
  const [element, setElement] = useState<T | null>(null)
  const optionsRef = useRef(options)
  optionsRef.current = options

  const ref = useCallback((node: T | null) => {
    setElement(node)
  }, [])

  useEffect(() => {
    if (elementHitViewport || !element) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setElementHitViewport(true)
        observer.disconnect()
      }
    }, optionsRef.current)

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [elementHitViewport, element])

  return {ref, elementHitViewport}
}
