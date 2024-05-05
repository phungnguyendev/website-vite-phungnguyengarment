import type { MenuProps } from 'antd'
import { Flex, Layout, Menu, Typography } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import { Logo } from '~/assets'
import { routes } from '~/types/routes'
import { cn } from '~/utils/helpers'

const { Header: AntHeader } = Layout

interface Props extends React.HTMLAttributes<HTMLElement> {}

const Header: React.FC<Props> = ({ ...props }) => {
  const navItems: MenuProps['items'] = routes.map((route, index) => {
    return {
      key: index,
      label: (
        <Link to={route.path}>
          <Typography.Text className='font-medium'>{route.name}</Typography.Text>
        </Link>
      )
    }
  })

  return (
    <>
      <AntHeader className={cn('h-[70x] bg-white', props.className)}>
        <Flex {...props} justify='space-between' align='center'>
          <Link to='/' className='absolute z-10 h-[46px] w-[46px]'>
            <img src={Logo} className='h-full w-full object-contain' />
          </Link>
          <Menu
            className='flex-1 justify-center border-none'
            mode='horizontal'
            defaultSelectedKeys={['0']}
            items={navItems}
          />
        </Flex>
      </AntHeader>
    </>
  )
}

export default Header
