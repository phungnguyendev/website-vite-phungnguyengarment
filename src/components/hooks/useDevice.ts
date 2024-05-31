import { useEffect, useRef, useState } from 'react'

const useDevice = () => {
  const [isHidden, setIsHidden] = useState(false)
  const [offsetY, setOffsetY] = useState<number>(0)

  // Saving last scroll position
  const lastScrollTop = useRef(0)

  const handleScroll = () => {
    const scrollYOffset = window.scrollY
    setOffsetY(scrollYOffset)
    // Visible/Unvisitable state navbar
    setIsHidden(scrollYOffset > lastScrollTop.current)
    lastScrollTop.current = scrollYOffset
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return {
    hidden: isHidden,
    offsetY
  }
}

export default useDevice
