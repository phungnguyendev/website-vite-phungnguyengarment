import { Flex, Typography } from 'antd'
import { BlockProps } from 'antd/es/typography/Base'
import React from 'react'
import { cn } from '~/utils/helpers'

type Position = 'start' | 'center' | 'end'
type SizeType = 'small' | 'middle' | 'large' | 'superLarge'

export interface SectionDescriptionProps extends BlockProps {
  title: string
  position?: Position
  size?: SizeType | undefined
}

const SectionDescription: React.FC<SectionDescriptionProps> = ({
  title,
  position = 'start',
  size = 'middle',
  ...props
}) => {
  return (
    <>
      <Flex justify={position}>
        <Typography.Paragraph
          {...props}
          type='secondary'
          className={cn(
            'relative w-[550px] text-center font-semibold',
            {
              'text-sm': size === 'small'
            },
            {
              'text-base': size === 'middle'
            },
            {
              'text-lg': size === 'large'
            },
            {
              'text-2xl': size === 'superLarge'
            },
            props.className
          )}
        >
          {title}
        </Typography.Paragraph>
      </Flex>
    </>
  )
}

export default SectionDescription
