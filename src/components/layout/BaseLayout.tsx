import { Flex, FlexProps } from 'antd'
import React from 'react'
import { cn } from '~/utils/helpers'

interface Props extends FlexProps {
  onLoading?: (enable: boolean) => void
  header?: React.ReactNode
}

const BaseLayout: React.FC<Props> = ({ header, children, ...props }) => {
  return (
    <Flex {...props} vertical className={cn('w-full gap-[20px] sm:gap-[40px]', props.className)}>
      {header}
      <Flex vertical className='w-full gap-[160px]'>
        {children}
      </Flex>
    </Flex>
  )
}

export default BaseLayout
