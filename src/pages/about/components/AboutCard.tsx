import { Card, Col, ColProps, Flex, Typography } from 'antd'
import React from 'react'

interface AboutCardProps extends ColProps {
  icon: string
  title: string
  desc: string
}

const AboutCard: React.FC<AboutCardProps> = ({ icon, title, desc, ...props }) => {
  return (
    <Col {...props} xs={24} md={8}>
      <Card>
        <Flex vertical gap={10}>
          <Flex className='h-12 w-12 rounded-lg bg-secondPrimary-fade' justify='center' align='center'>
            <img src={icon} alt='image-icon-about' width={24} height={24} className='h-6 w-6 text-secondPrimary' />
          </Flex>
          <Typography.Text className='text-xl font-bold text-foreground'>{title}</Typography.Text>
          <Typography.Paragraph className='line-clamp-5'>{desc}</Typography.Paragraph>
        </Flex>
      </Card>
    </Col>
  )
}

export default AboutCard
