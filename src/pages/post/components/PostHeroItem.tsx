import { Flex, Typography } from 'antd'
import React, { HTMLAttributes } from 'react'
import Skeleton from 'react-loading-skeleton'
import { Link } from 'react-router-dom'
import { Post } from '~/typing'
import { dateFormatter } from '~/utils/date-formatter'
import { cn, imageValidatorDisplay, numberValidator, textValidatorDisplay } from '~/utils/helpers'

interface Props extends HTMLAttributes<HTMLDivElement> {
  item: Post
}

const PostHeroItem: React.FC<Props> = ({ item, ...props }) => {
  return (
    <>
      {numberValidator(item.id) ? (
        <Link to={`${item.id}`}>
          <Flex
            className={cn(
              'relative h-[372px] w-full overflow-hidden rounded-lg bg-black md:h-[572px]',
              props.className
            )}
          >
            <img src={imageValidatorDisplay(item.imageUrl)} className='h-full w-full object-cover' />
            <Flex
              align='start'
              justify='end'
              vertical
              className='to-bg-opacity-[10%] absolute bottom-0 left-0 right-0 top-0 z-10 bg-gradient-to-t from-blackFriday p-5'
            >
              <Typography.Paragraph className='italic text-white'>
                {textValidatorDisplay(dateFormatter(item.publishedAt, 'dateTime'))}
              </Typography.Paragraph>
              <Typography.Text className='line-clamp-3 text-xl font-medium text-white md:line-clamp-none md:text-3xl'>
                {textValidatorDisplay(item.title)}
              </Typography.Text>
            </Flex>
          </Flex>
        </Link>
      ) : (
        <Flex>
          <Skeleton />
        </Flex>
      )}
    </>
  )
}

export default PostHeroItem
