import { Flex, Typography } from 'antd'
import { BlockProps } from 'antd/es/typography/Base'
import React from 'react'
import { cn } from '~/utils/helpers'

type Position = 'start' | 'center' | 'end'
type SizeType = 'small' | 'middle' | 'large' | 'superLarge'

export interface SectionTitleProps extends BlockProps {
  title: string
  position?: Position
  size?: SizeType | undefined
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  position = 'start',
  underline = true,
  size = 'middle',
  ...props
}) => {
  return (
    <>
      <Flex justify={position}>
        <Typography.Text
          {...props}
          className={cn(
            'relative w-fit text-center font-roboto-condensed font-semibold',
            {
              'before:absolute before:-bottom-1 before:left-0 before:right-0 before:h-[3px] before:rounded-full before:bg-primary before:content-[""]':
                underline
            },
            {
              'text-lg': size === 'small'
            },
            {
              'text-2xl': size === 'middle'
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

export default SectionTitle
