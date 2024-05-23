import { Layout } from 'antd'
import React, { useEffect, useRef, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { cn } from '~/utils/helpers'
import Footer from './Footer'
import Header from './Header'

const { Content } = Layout

const Main: React.FC = () => {
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

  return (
    <Layout className='w-full bg-background'>
      <Header
        className={cn('sticky left-0 right-0 top-0 z-[999] transition-transform duration-200', {
          '-translate-y-full': isHidden && offsetY > 70
        })}
      />
      <Content className={'m-0 min-h-[900px] p-0 transition-all duration-200'}>
        <Outlet />
      </Content>
      <Footer />
    </Layout>
  )
}

export default Main
