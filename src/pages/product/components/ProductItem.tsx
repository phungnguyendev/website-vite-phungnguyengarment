import { Flex, Image, Typography } from 'antd'

import React from 'react'
import { Product } from '~/typing'
import { imageValidatorDisplay, textValidatorDisplay } from '~/utils/helpers'

const { Text } = Typography

interface ProductItemProps {
  item: Product
}

const ProductItem: React.FC<ProductItemProps> = ({ item, ...props }) => {
  return (
    <>
      <Flex {...props} vertical gap={8} align='center'>
        <Image
          preview={false}
          src={imageValidatorDisplay(item.imageUrl)}
          width='224px'
          height='216px'
          className='object-contain'
        />
        <Text className='text-lg font-semibold'>{textValidatorDisplay(item.title)}</Text>
      </Flex>
    </>
  )
}

export default ProductItem
