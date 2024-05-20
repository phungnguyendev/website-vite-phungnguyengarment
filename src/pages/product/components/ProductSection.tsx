import { Row, RowProps } from 'antd'
import React from 'react'

interface ProductSectionProps extends RowProps {}

const ProductSection: React.FC<ProductSectionProps> = ({ ...props }) => {
  return (
    <>
      <Row justify='space-around' gutter={[20, 20]}>
        {props.children}
      </Row>
    </>
  )
}

export default ProductSection
