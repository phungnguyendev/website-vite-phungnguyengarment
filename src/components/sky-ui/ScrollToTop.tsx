import React, { HTMLAttributes, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export interface ScrollToTopProps extends HTMLAttributes<HTMLDivElement> {}

const ScrollToTop: React.FC<ScrollToTopProps> = ({ ...props }) => {
  const location = useLocation()
  useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0)
    }
  }, [location])

  return <>{props.children}</>
}

export default ScrollToTop
