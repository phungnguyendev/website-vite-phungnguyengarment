import { Flex } from 'antd'
import React from 'react'
import { cn } from '~/utils/helpers'
import ScrollToTop from '../sky-ui/ScrollToTop'

interface Props {
  onLoading?: (enable: boolean) => void
  header?: React.ReactNode
  children?: React.ReactNode
  className?: string
}

const BaseLayout: React.FC<Props> = ({ header, ...props }) => {
  return (
    <>
      <Flex vertical className={cn('w-full gap-[20px] sm:gap-[40px]', props.className)}>
        {header}
        <Flex vertical className='w-full gap-[160px]'>
          <ScrollToTop />
          {props.children}
        </Flex>
      </Flex>
    </>
  )
}

export default BaseLayout
