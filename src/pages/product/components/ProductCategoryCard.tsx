import { Card, Col, ColProps, Flex, Typography } from 'antd'
import React from 'react'
import { imageValidatorDisplay, textValidatorDisplay } from '~/utils/helpers'

interface Props extends ColProps {
  icon?: string
  title?: string
}

const ProductCategoryCard: React.FC<Props> = ({ icon, title, ...props }) => {
  return (
    <>
      <Col {...props} xs={12} md={8} lg={6} xl={4}>
        <Card hoverable>
          <Flex vertical gap={20} justify='center' align='center'>
            <img
              src={imageValidatorDisplay(icon)}
              alt='image-product-category'
              className='h-[64px] w-[64px] object-contain'
            />
            <Flex className='h-[32px]'>
              <Typography.Text className='text-center font-roboto-condensed text-base font-bold'>
                {textValidatorDisplay(title)}
              </Typography.Text>
            </Flex>
          </Flex>
        </Card>
      </Col>
    </>
  )
}

export default ProductCategoryCard
