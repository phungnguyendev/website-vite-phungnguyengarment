import { Col, Row, RowProps, Skeleton } from 'antd'
import React from 'react'
import { Project } from '~/typing'
import ServiceProjectCard from '../ServiceProjectCard'

interface Props extends RowProps {
  items: Project[]
  loading?: boolean
}

const ServiceProjectList: React.FC<Props> = ({ items, ...props }) => {
  return (
    <>
      <Row {...props} gutter={[20, 20]}>
        {!props.loading
          ? items.map((item, index) => {
              return <ServiceProjectCard key={index} item={item} />
            })
          : Array.from({ length: 8 }, (_, index) => {
              return (
                <Col key={index} xs={24} md={8} lg={6}>
                  <Skeleton.Image active />
                </Col>
              )
            })}
      </Row>
    </>
  )
}

export default ServiceProjectList
