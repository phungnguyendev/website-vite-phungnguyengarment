import { Card, Col, ColProps, Flex, Typography } from 'antd'
import React from 'react'

interface Props extends ColProps {
  icon: string
  title: string
  desc: string
}

const { Text, Paragraph } = Typography

const ServiceCard: React.FC<Props> = ({ icon, title, desc, ...props }) => {
  return (
    <>
      <Col {...props} xs={24} md={8}>
        <Card className='relative h-[200px] transition-colors duration-500 md:h-[280px] lg:h-[230px]'>
          <Flex vertical className='' gap={10}>
            <Flex justify='center' align='center' className='h-[52px] w-[52px] rounded-md bg-secondPrimary-fade'>
              <img src={icon} width={24} height={24} className='object-contain text-secondPrimary' />
            </Flex>
            <Text className='text-start text-2xl font-bold'>{title}</Text>
            <Paragraph className='text-start' type='secondary'>
              {desc}
            </Paragraph>
          </Flex>
        </Card>
      </Col>
    </>
  )
}

export default ServiceCard
