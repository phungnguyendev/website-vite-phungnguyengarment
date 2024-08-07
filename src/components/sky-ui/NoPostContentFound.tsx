import { Flex, Typography } from 'antd'
import { TitleProps } from 'antd/es/typography/Title'
import React from 'react'

export interface NoPostContentFoundProps extends TitleProps {}

const NoPostContentFound: React.FC<NoPostContentFoundProps> = ({ ...props }) => {
  return (
    <>
      <Flex align='center' justify='center' className='w-full'>
        <Typography.Text {...props} type='secondary' className='select-none'>
          {props.children ?? 'Không có bài viết nào được hiển thị'}
        </Typography.Text>
      </Flex>
    </>
  )
}

export default NoPostContentFound
