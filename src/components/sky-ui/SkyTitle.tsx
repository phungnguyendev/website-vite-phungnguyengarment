import { Typography } from 'antd'
import { TitleProps } from 'antd/es/typography/Title'
import React from 'react'

export interface SkyTitleProps extends TitleProps {}

const SkyTitle: React.FC<SkyTitleProps> = ({ ...props }) => {
  return (
    <>
      <Typography.Title {...props}>{props.children}</Typography.Title>
    </>
  )
}

export default SkyTitle
