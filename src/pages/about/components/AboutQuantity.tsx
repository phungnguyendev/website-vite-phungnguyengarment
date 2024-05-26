import { Col, ColProps, Flex, Typography } from 'antd'
import React from 'react'

const { Text } = Typography

interface AboutQuantityProps extends ColProps {
  subTitle?: string
}

const AboutQuantity: React.FC<AboutQuantityProps> = ({ title, subTitle, ...props }) => {
  return (
    <Col {...props} xs={24} lg={8} xl={6} className='h-fit w-fit'>
      <Flex vertical justify='center' align='center' className='h-full w-full p-10'>
        <Flex className='h-1/2 w-full'>
          <Flex vertical gap={10} justify='start' align='center' className='h-full w-full'>
            <Text className='flex-shrink-0 text-center text-3xl font-bold text-white after:absolute after:text-2xl after:font-bold after:text-primary after:content-["+"]'>
              {title}
            </Text>
            <Text className='text-center text-xl font-semibold text-white'>{subTitle}</Text>
          </Flex>
        </Flex>
      </Flex>
    </Col>
  )
}

export default AboutQuantity
