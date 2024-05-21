import { Card, Typography } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import { Post } from '~/typing'
import { dateTimeValidatorDisplay, imageValidatorDisplay, textValidatorDisplay } from '~/utils/helpers'

const { Text } = Typography
const { Meta } = Card

interface PostItemProps {
  item: Post
}

const PostItem: React.FC<PostItemProps> = ({ item, ...props }) => {
  return (
    <>
      <Link to={`${item.id}`}>
        <Card
          {...props}
          className='w-full sm:w-[95%]'
          cover={<img src={imageValidatorDisplay(item.imageUrl)} className='h-full w-full' />}
        >
          <Meta
            title={
              <Text type='secondary' className='font-normal italic'>
                {dateTimeValidatorDisplay(item.publishedAt)}
              </Text>
            }
            description={<Text className='line-clamp-2 text-base'>{textValidatorDisplay(item.title)}</Text>}
          />
        </Card>
      </Link>
    </>
  )
}

export default PostItem
