import { Flex } from 'antd'
import React, { HTMLAttributes } from 'react'
import { cn } from '~/utils/helpers'
import SectionDescription, { SectionDescriptionProps } from './SectionDescription'
import SectionSubTitle, { SectionSubTitleProps } from './SectionSubTitle'
import SectionTitle, { SectionTitleProps } from './SectionTitle'

interface Props extends HTMLAttributes<HTMLDivElement> {
  titleProps?: SectionTitleProps
  subTitleProps?: SectionSubTitleProps
  descriptionProps?: SectionDescriptionProps
  spacing?: boolean
}

const Section: React.FC<Props> = ({ titleProps, subTitleProps, descriptionProps, spacing = true, ...props }) => {
  return (
    <>
      <Flex
        {...props}
        className={cn(
          'gap-[40px]',
          {
            'px-5 md:px-10 lg:px-10 xl:px-20': spacing
          },
          props.className
        )}
        vertical
        gap={40}
      >
        <Flex vertical gap={16}>
          {titleProps && <SectionTitle {...titleProps} />}
          {subTitleProps && <SectionSubTitle {...subTitleProps} />}
          {descriptionProps && <SectionDescription {...descriptionProps} />}
        </Flex>
        {props.children}
      </Flex>
    </>
  )
}

export default Section
