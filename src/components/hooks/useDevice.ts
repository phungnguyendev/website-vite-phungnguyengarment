import { useEffect, useRef, useState } from 'react'

const useDevice = () => {
  const [isHidden, setIsHidden] = useState(false)
  const [offsetY, setOffsetY] = useState<number>(0)
  const [width, setWidth] = useState<number>(window.innerWidth)

  // Saving last scroll position
  const lastScrollTop = useRef(0)

  const handleScroll = () => {
    const scrollYOffset = window.scrollY
    setOffsetY(scrollYOffset)
    // Visible/Unvisitable state navbar
    setIsHidden(scrollYOffset > lastScrollTop.current)
    lastScrollTop.current = scrollYOffset
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth)
    // subscribe to window resize event "onComponentDidMount"
    window.addEventListener('resize', handleResizeWindow)
    window.addEventListener('scroll', handleScroll)
    return () => {
      // unsubscribe "onComponentDestroy"
      window.removeEventListener('resize', handleResizeWindow)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return { width, hidden: isHidden, offsetY }
}

export default useDevice
