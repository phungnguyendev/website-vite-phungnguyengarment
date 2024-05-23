import { Flex, FlexProps } from 'antd'
import React from 'react'
import { cn } from '~/utils/helpers'
import SectionDescription, { SectionDescriptionProps } from './SectionDescription'
import SectionSubTitle, { SectionSubTitleProps } from './SectionSubTitle'
import SectionTitle, { SectionTitleProps } from './SectionTitle'

interface Props extends FlexProps {
  titleProps?: SectionTitleProps
  subTitleProps?: SectionSubTitleProps
  descriptionProps?: SectionDescriptionProps
}

const Section: React.FC<Props> = ({ titleProps, subTitleProps, descriptionProps, ...props }) => {
  return (
    <>
      <Flex {...props} className={cn('gap-[40px]', props.className)} vertical>
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
