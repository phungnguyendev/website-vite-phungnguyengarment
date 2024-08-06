import { Layout } from 'antd'
import React from 'react'
import { Outlet } from 'react-router-dom'
import { cn } from '~/utils/helpers'
import useWindow from '../hooks/useWindow'
import Footer from './footer/Footer'
import Header from './header/Header'

const { Content } = Layout

const Main: React.FC = () => {
  const { hidden, offsetY } = useWindow()

  return (
    <Layout className='w-full bg-background'>
      <Header
        className={cn('sticky left-0 right-0 top-0 z-[999] transition-transform duration-200', {
          '-translate-y-full': hidden && offsetY > 70
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
