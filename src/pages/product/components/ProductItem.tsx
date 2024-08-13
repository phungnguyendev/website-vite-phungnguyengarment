import { Flex, Typography } from 'antd'
import React, { HTMLAttributes } from 'react'
import { Product } from '~/typing'
import { imageValidatorDisplay, textValidatorDisplay } from '~/utils/helpers'

interface Props extends HTMLAttributes<HTMLDivElement> {
  item: Product
}

const ProductItem: React.FC<Props> = ({ item, ...props }) => {
  return (
    <>
      <Flex {...props} vertical justify='center' align='center' gap={20} className='group'>
        <Flex className='h-[216px] w-full duration-300 group-hover:scale-110 group-hover:transition-all'>
          <img
            src={imageValidatorDisplay(item.imageUrl)}
            alt='image-product'
            className='pointer-events-none h-[216px] w-full object-contain '
          />
        </Flex>
        <Typography.Text className='font-semibold'>{textValidatorDisplay(item.title)}</Typography.Text>
      </Flex>
    </>
  )
}

export default ProductItem
