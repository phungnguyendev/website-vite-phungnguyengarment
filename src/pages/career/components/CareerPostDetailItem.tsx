import { Flex, Typography } from 'antd'
import React from 'react'

export interface CareerPostDetailItemProps {
  title: string
  subTitle: string
}

const CareerPostDetailItem: React.FC<CareerPostDetailItemProps> = ({ title, subTitle }) => {
  return (
    <>
      <Flex gap={40}>
        <Flex className='w-[250px]'>
          <Typography.Text className='font-bold'>{title}</Typography.Text>
        </Flex>
        <Typography.Paragraph>{subTitle}</Typography.Paragraph>
      </Flex>
    </>
  )
}

export default CareerPostDetailItem
