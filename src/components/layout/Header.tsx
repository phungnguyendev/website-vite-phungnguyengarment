import { Button, Drawer, Flex, Layout } from 'antd'
import { AlignJustify } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Logo } from '~/assets'
import routes from '~/config/route.config'
import { cn } from '~/utils/helpers'
import NavItem from './NavItem'

const { Header: AntHeader } = Layout

interface Props extends React.HTMLAttributes<HTMLElement> {}

const Header: React.FC<Props> = ({ ...props }) => {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false)

  const handleSelected = () => {
    setOpenDrawer((prev) => !prev)
  }

  return (
    <>
      <AntHeader className={cn('h-[65px] w-full bg-white', props.className)}>
        <Flex {...props} className='h-full w-full justify-center' align='center' gap={20}>
          <Button className='absolute left-5 w-fit p-1 md:hidden' onClick={() => setOpenDrawer((prev) => !prev)}>
            <AlignJustify />
          </Button>
          <Link to='/' className='absolute z-10 h-[46px] w-[46px] md:relative'>
            <img src={Logo} className=' h-full w-full object-contain' />
          </Link>
          <Flex gap={20} justify='center' align='center' className='mr-[46px] hidden w-full md:flex'>
            {routes.map((route, index) => {
              return <NavItem key={index} route={route} />
            })}
          </Flex>
        </Flex>
        <Drawer open={openDrawer} width={228} onClose={() => setOpenDrawer((prev) => !prev)} placement='left'>
          <Flex gap={20} className='w-full flex-col md:flex-row'>
            {routes.map((route, index) => {
              return <NavItem key={index} route={route} onClick={handleSelected} />
            })}
          </Flex>
        </Drawer>
      </AntHeader>
    </>
  )
}

export default Header
