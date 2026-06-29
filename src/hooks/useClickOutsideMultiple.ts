import {createRef, RefObject, useCallback, useEffect, useRef} from 'react'

const useClickOutsideMultiple = <T extends HTMLElement = HTMLElement>(
  cb: (event: Event) => void,
  numberOfRef: number,
): RefObject<T | null>[] => {
  const els = Array.from(Array(numberOfRef).keys())
  const refs = useRef<Array<RefObject<T | null>>>(els.map(() => createRef<T>()))
  const cbRef = useRef(cb)
  cbRef.current = cb

  const onClickOutsideHandler = useCallback((event: Event) => {
    if (refs.current?.some((ref) => ref?.current?.contains(event.target as Node))) {
      return
    }
    cbRef.current(event)
  }, [])

  useEffect(() => {
    document.addEventListener('click', onClickOutsideHandler)
    document.addEventListener('touchstart', onClickOutsideHandler)
    return () => {
      document.removeEventListener('click', onClickOutsideHandler)
      document.removeEventListener('touchstart', onClickOutsideHandler)
    }
  }, [onClickOutsideHandler])

  return [...refs.current]
}

export default useClickOutsideMultiple
