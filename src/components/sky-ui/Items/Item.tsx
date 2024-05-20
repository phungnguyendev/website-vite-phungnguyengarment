import { Col, ColProps } from 'antd'
import React from 'react'

interface ItemProps extends ColProps {}

const Item: React.FC<ItemProps> = ({ ...props }) => {
  return (
    <>
      <Col xs={24} sm={24} md={12} lg={6} xl={4} {...props}>
        {props.children}
      </Col>
    </>
  )
}

export default Item
