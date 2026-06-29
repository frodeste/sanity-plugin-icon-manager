import {RefObject, useCallback, useEffect, useRef} from 'react'

const useClickOutside = <T extends HTMLElement = HTMLElement>(
  cb: (event: Event) => void,
): RefObject<T | null> => {
  const ref = useRef<T | null>(null)
  const cbRef = useRef(cb)
  cbRef.current = cb

  const onClickOutsideHandler = useCallback((event: Event) => {
    if (!ref.current || ref.current.contains(event.target as Node)) {
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

  return ref
}

export default useClickOutside
