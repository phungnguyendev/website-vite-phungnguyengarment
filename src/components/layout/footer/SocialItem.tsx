import { Flex } from 'antd'
import React from 'react'
import { Link, LinkProps } from 'react-router-dom'

export interface SocialItemProps extends LinkProps {
  icon: React.ReactNode
}

const SocialItem: React.FC<SocialItemProps> = ({ icon, ...props }) => {
  return (
    <>
      <Link {...props} to={props.to}>
        <Flex className='h-fit rounded-full bg-white bg-opacity-10 p-2 text-muted-foreground transition-colors duration-300 hover:bg-opacity-25'>
          {icon}
        </Flex>
      </Link>
    </>
  )
}

export default SocialItem
