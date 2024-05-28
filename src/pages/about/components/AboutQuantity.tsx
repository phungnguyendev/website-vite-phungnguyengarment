import { Col, ColProps, Flex, Typography } from 'antd'
import React from 'react'

const { Text } = Typography

interface AboutQuantityProps extends ColProps {
  subTitle?: string
}

const AboutQuantity: React.FC<AboutQuantityProps> = ({ title, subTitle, ...props }) => {
  return (
    <Col {...props} xs={24} lg={8} xl={6} className='relative'>
      <Flex vertical gap={10} align='center' justify='center' className='relative h-full'>
        <Text className='flex-shrink-0 text-center text-5xl font-bold text-white after:absolute after:text-2xl after:font-bold after:text-primary after:content-["+"]'>
          {title}
        </Text>
        <Text className='h-16 text-center text-2xl font-semibold text-white'>{subTitle}</Text>
      </Flex>
    </Col>
  )
}

export default AboutQuantity
