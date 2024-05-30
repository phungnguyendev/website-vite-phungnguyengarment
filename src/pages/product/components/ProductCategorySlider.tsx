import { Row } from 'antd'
import React from 'react'
import { Category } from '~/typing'
import { imageValidatorDisplay, textValidatorDisplay } from '~/utils/helpers'
import ProductCategoryCard from './ProductCategoryCard'

interface Props {
  items: Category[]
}

const ProductCategorySlider: React.FC<Props> = ({ items }) => {
  return (
    <>
      {items.length > 0 ? (
        <Row gutter={[20, 20]}>
          {items.map((item, index) => {
            return (
              <ProductCategoryCard
                key={index}
                icon={imageValidatorDisplay(item.imageUrl)}
                title={textValidatorDisplay(item.title)}
              />
            )
          })}
        </Row>
      ) : (
        <>123</>
      )}
    </>
  )
}

export default ProductCategorySlider
