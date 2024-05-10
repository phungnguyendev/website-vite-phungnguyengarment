import type { CarouselProps } from 'antd'
import { Button, Carousel, Flex, Image, Skeleton, Space, Typography } from 'antd'
import { MoveRight } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
import { NoImage } from '~/assets'
import { HeroBanner } from '~/typing'

interface Props extends CarouselProps {
  items: HeroBanner[]
}

const BannerCarousel: React.FC<Props> = ({ items, ...props }) => {
  return (
    <>
      {items.length > 0 ? (
        <Carousel {...props} autoplay>
          {items.map((item, index) => {
            return (
              <Space className='relative' key={index}>
                <img
                  key={index}
                  src={item.imageUrl ?? NoImage}
                  className='sm:h-480px h-[380px] w-full object-cover md:h-[580px] lg:h-[680px]'
                  // height='680px'
                  // width='100%'
                />
                <Flex align='start' justify='center' className='absolute bottom-0 left-10 top-0 z-10 w-1/2' vertical>
                  <Typography.Title
                    level={1}
                    className='to-bg-opacity-[10%] w-fit rounded-sm bg-gradient-to-r from-black px-5 py-5'
                  >
                    <span className='font-roboto-condensed text-xl uppercase text-white sm:text-3xl md:text-5xl lg:text-7xl'>
                      {item.title}
                    </span>
                  </Typography.Title>
                  <Button className='w-fit rounded-sm' type='primary' size='large'>
                    <Link to={`${item.id}`}>
                      <Flex gap={10} align='center' justify='center'>
                        <span>Xem chi tiết</span>
                        <span>
                          <MoveRight size={14} />
                        </span>
                      </Flex>
                    </Link>
                  </Button>
                </Flex>
              </Space>
            )
          })}
        </Carousel>
      ) : (
        <Carousel {...props} autoplay>
          <Space className='relative'>
            <Image preview={false} src={NoImage} className='object-cover' height='680px' width='100%' />
            <Flex vertical gap={40} className='absolute bottom-10 left-10 z-10 w-full'>
              <Skeleton
                active
                paragraph={{
                  rows: 1,
                  width: '50%'
                }}
              />
              <Skeleton.Button active size='large' />
            </Flex>
          </Space>
          {/* <Image preview={false} src={NoImage} className='object-cover' height='680px' width='100%' />
          <Image preview={false} src={NoImage} className='object-cover' height='680px' width='100%' /> */}
        </Carousel>
      )}
    </>
  )
}

export default BannerCarousel
