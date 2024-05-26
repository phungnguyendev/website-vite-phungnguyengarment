import { Flex, Typography } from 'antd'
import { BlockProps } from 'antd/es/typography/Base'
import React from 'react'
import { cn } from '~/utils/helpers'

type Position = 'start' | 'center' | 'end'
type SizeType = 'small' | 'middle' | 'large' | 'superLarge'

export interface SectionSubTitleProps extends BlockProps {
  title: string
  position?: Position
  size?: SizeType | undefined
}

const SectionSubTitle: React.FC<SectionSubTitleProps> = ({ title, position = 'start', size = 'middle', ...props }) => {
  return (
    <>
      <Flex justify={position}>
        <Typography.Text
          {...props}
          className={cn(
            'relative w-fit text-center font-bold',
            {
              'text-lg': size === 'small'
            },
            {
              'text-xl': size === 'middle'
            },
            {
              'text-4xl': size === 'large'
            },
            {
              'text-5xl': size === 'superLarge'
            },
            props.className
          )}
        >
          {title}
        </Typography.Text>
      </Flex>
    </>
  )
}

export default SectionSubTitle
