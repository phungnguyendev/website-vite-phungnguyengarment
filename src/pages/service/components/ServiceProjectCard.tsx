import { Col, Flex, Typography } from 'antd'
import React, { HTMLAttributes } from 'react'
import { Project } from '~/typing'
import { imageValidatorDisplay, textValidatorDisplay } from '~/utils/helpers'

interface Props extends HTMLAttributes<HTMLDivElement> {
  item: Project
}

const ServiceProjectCard: React.FC<Props> = ({ item, ...props }) => {
  return (
    <>
      <Col xs={24} md={8} lg={6}>
        <Flex {...props} className='h-full w-[420px]'>
          <img src={imageValidatorDisplay(item.imageUrl)} className='h-full w-full object-cover' />
          <Flex className='absolute bottom-0 left-0 right-0 top-0 z-10 bg-black bg-opacity-[25%]'>
            <Typography.Text className='text-2xl text-white'>{textValidatorDisplay(item.title)}</Typography.Text>
          </Flex>
        </Flex>
      </Col>
    </>
  )
}

export default ServiceProjectCard
