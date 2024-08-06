import { Card, Typography } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import ImageView from '~/components/sky-ui/ImageView'
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
      <Link to={`/tin-tuc-va-su-kien/${item.id}`}>
        <Card
          {...props}
          className='h-[350px] w-full'
          cover={
            <ImageView
              src={imageValidatorDisplay(item.imageUrl)}
              alt='img-post'
              className='h-[220px] w-full object-cover'
            />
          }
        >
          <Meta
            title={
              <Text type='secondary' className='font-normal italic'>
                {dateTimeValidatorDisplay(item.publishedAt)}
              </Text>
            }
            description={
              <Text className='line-clamp-2 text-base font-semibold'>{textValidatorDisplay(item.title)}</Text>
            }
          />
        </Card>
      </Link>
    </>
  )
}

export default PostItem
