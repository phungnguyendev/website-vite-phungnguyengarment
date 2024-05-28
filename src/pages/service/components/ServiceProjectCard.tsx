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
      <Col xs={24} md={8} lg={6} className='group overflow-hidden'>
        <Flex {...props} className='relative h-full w-full'>
          <img src={imageValidatorDisplay(item.imageUrl)} className='h-full w-full object-cover' />
          <Flex
            justify='center'
            align='center'
            className='absolute bottom-0 left-0 right-0 top-0 z-10 translate-y-full bg-black bg-opacity-[50%] group-hover:-translate-y-full'
          >
            <Typography.Text className='text-xl font-semibold text-white'>
              {textValidatorDisplay(item.title)}
            </Typography.Text>
          </Flex>
        </Flex>
      </Col>
    </>
  )
}

export default ServiceProjectCard
