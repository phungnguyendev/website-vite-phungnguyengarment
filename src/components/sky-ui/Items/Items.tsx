import { Row, RowProps } from 'antd'
import React from 'react'

interface ItemsProps extends RowProps {}

const Items: React.FC<ItemsProps> = ({ ...props }) => {
  return (
    <>
      <Row {...props} justify={props.justify ? props.justify : 'space-around'} gutter={[20, 20]}>
        {props.children}
      </Row>
    </>
  )
}

export default Items
