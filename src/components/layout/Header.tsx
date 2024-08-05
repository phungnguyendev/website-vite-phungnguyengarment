import type { MenuProps } from 'antd'
import { Button, Drawer, Flex, Layout, Menu } from 'antd'
import { AlignJustify } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Logo } from '~/assets'
import routes from '~/config/route.config'
import { cn } from '~/utils/helpers'

const { Header: AntHeader } = Layout

interface Props extends React.HTMLAttributes<HTMLElement> {}

const Header: React.FC<Props> = ({ ...props }) => {
  const { pathname } = useLocation()
  const [selectedKeys, setSelectedKeys] = useState<string[]>([routes[0].key])
  const [openDrawer, setOpenDrawer] = useState<boolean>(false)

  useEffect(() => {
    setSelectedKeys(
      routes
        .filter((item) => item.path === pathname)
        .map((item) => {
          return item.key
        })
    )
  }, [pathname])

  const navItems: MenuProps['items'] = routes.map((route, index) => {
    return {
      key: index,
      label: (
        <Link to={route.path} className='text-base font-semibold'>
          {route.name}
        </Link>
      )
    }
  })

  const handleClick: MenuProps['onClick'] = (e) => {
    setSelectedKeys([e.key])
  }

  return (
    <>
      <AntHeader className={cn('h-[65px] bg-white', props.className)}>
        <Flex {...props} className='h-full justify-center' align='center'>
          <Button className='absolute left-10 w-fit p-1 md:hidden' onClick={() => setOpenDrawer((prev) => !prev)}>
            <AlignJustify />
          </Button>
          <Link to='/' className='absolute z-10 h-[46px] w-[46px] md:relative'>
            <img src={Logo} className=' h-[46px] w-[46px] object-contain' />
          </Link>
          <Menu
            items={navItems}
            mode='horizontal'
            onClick={handleClick}
            selectedKeys={selectedKeys}
            defaultSelectedKeys={selectedKeys}
            className='hidden flex-1 justify-center border-none md:flex'
          />
        </Flex>
        <Drawer open={openDrawer} width={228} onClose={() => setOpenDrawer((prev) => !prev)} placement='left'>
          <Menu
            items={navItems}
            mode='vertical'
            onClick={handleClick}
            selectedKeys={selectedKeys}
            defaultSelectedKeys={selectedKeys}
            className='flex-1 justify-center border-none'
          />
        </Drawer>
      </AntHeader>
    </>
  )
}

export default Header
