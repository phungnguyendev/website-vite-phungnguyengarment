import { Card, Image, Skeleton, Typography } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import { Post } from '~/typing'
import { dateTimeValidatorDisplay, imageValidatorDisplay, textValidatorDisplay } from '~/utils/helpers'

const { Text } = Typography
const { Meta } = Card

interface PostItemProps {
  item?: Post
}

const PostItem: React.FC<PostItemProps> = ({ item, ...props }) => {
  return (
    <>
      <Skeleton active loading={!item} avatar>
        <Link to={`${item?.id}`}>
          <Card
            {...props}
            className='w-full transition-transform duration-300 sm:w-[95%]'
            cover={<Image preview={false} src={imageValidatorDisplay(item?.imageUrl)} className='h-full w-full' />}
          >
            <Meta
              title={
                <Text type='secondary' className='font-normal italic'>
                  {dateTimeValidatorDisplay(item?.publishedAt)}
                </Text>
              }
              description={<Text className='line-clamp-2 text-base'>{textValidatorDisplay(item?.title)}</Text>}
            />
          </Card>
        </Link>
      </Skeleton>
    </>
  )
}

export default PostItem
