import type { MenuProps } from 'antd'
import { Button, Drawer, Flex, Layout, Menu } from 'antd'
import { AlignJustify } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Logo } from '~/assets'
import { routes } from '~/types/routes'
import { cn } from '~/utils/helpers'

const { Header: AntHeader } = Layout

interface Props extends React.HTMLAttributes<HTMLElement> {}

const Header: React.FC<Props> = ({ ...props }) => {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false)

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

  return (
    <>
      <AntHeader className={cn('h-[66px] bg-white', props.className)}>
        <Flex {...props} className='h-full justify-center' align='center'>
          <Button className='absolute left-10 w-fit p-1 md:hidden' onClick={() => setOpenDrawer((prev) => !prev)}>
            <AlignJustify />
          </Button>
          <Link to='/' className='absolute z-10 h-[46px] w-[46px] md:relative'>
            <img src={Logo} className=' h-[46px] w-[46px] object-contain' />
          </Link>
          <Menu
            className='hidden flex-1 justify-center border-none md:flex'
            mode='horizontal'
            defaultSelectedKeys={['0']}
            items={navItems}
          />
        </Flex>
        <Drawer open={openDrawer} width={228} onClose={() => setOpenDrawer((prev) => !prev)} placement='left'>
          <Menu
            className='flex-1 justify-center border-none'
            mode='vertical'
            defaultSelectedKeys={['0']}
            items={navItems}
          />
        </Drawer>
      </AntHeader>
    </>
  )
}

export default Header
