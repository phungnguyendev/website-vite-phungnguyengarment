import { Breadcrumb, Flex, Typography } from 'antd'
import React, { HTMLAttributes } from 'react'
import { Link, useLocation } from 'react-router-dom'
import useBreadcrumbs from 'use-react-router-breadcrumbs'
import routes from '~/config/route.config'
import { cn } from '~/utils/helpers'

interface HeadProps extends HTMLAttributes<HTMLDivElement> {
  imageURL: string
  title: string
}

const Head: React.FC<HeadProps> = ({ imageURL, title, ...props }) => {
  const { pathname } = useLocation()
  const breadcrumbs = useBreadcrumbs(routes)

  return (
    <>
      <Flex {...props} className={cn('relative h-[180px] w-full md:h-[320px]', props.className)}>
        <Flex className='z-0 h-full w-full before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:bg-black before:bg-opacity-[65%] before:content-[""]'>
          <img src={imageURL} className='h-full w-full object-cover ' />
        </Flex>
        <Flex gap={20} vertical className='absolute z-10 h-full p-5 md:p-10' justify='center' align='center'>
          <Typography.Text className='font-roboto-condensed text-3xl font-semibold text-white'>{title}</Typography.Text>
          <Breadcrumb
            className='flex w-full justify-start'
            separator={<span className='text-white'>/</span>}
            items={breadcrumbs.map((breadcrumb) => {
              return {
                title:
                  pathname === breadcrumb.match.pathname ? (
                    <Typography.Text className='text-white'>{breadcrumb.breadcrumb}</Typography.Text>
                  ) : (
                    <Link to={breadcrumb.match.pathname}>
                      <Typography.Text className='text-white'>{breadcrumb.breadcrumb}</Typography.Text>
                    </Link>
                  )
              }
            })}
          />
        </Flex>
      </Flex>
    </>
  )
}

export default Head
