import { Flex, Skeleton } from 'antd'
import React from 'react'
// import Skeleton from 'react-loading-skeleton'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { SwiperOptions } from 'swiper/types'
import PostItem from '~/pages/newsevent/components/PostItem'
import { Post } from '~/typing'

interface HomePostSliderProps extends SwiperOptions {
  items: Post[]
  loading?: boolean
}

const HomePostSlider: React.FC<HomePostSliderProps> = ({ loading = false, items, ...props }) => {
  return (
    <>
      <Swiper
        {...props}
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: false,
          enabled: false
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 20
          },
          1536: {
            slidesPerView: 5,
            spaceBetween: 20
          }
        }}
        loop={true}
        autoplay={{
          delay: 2500
        }}
        modules={[Pagination, Autoplay, Navigation]}
        className='h-full w-full'
      >
        {!loading && items.length > 0
          ? items.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <PostItem item={item} />
                </SwiperSlide>
              )
            })
          : Array.from({ length: 10 }, (_, index) => {
              return (
                <SwiperSlide key={index}>
                  <Flex vertical gap={8} className='items-center justify-center md:items-start'>
                    <Skeleton className='w-full sm:w-[95%]' active avatar title paragraph={false} />
                  </Flex>
                </SwiperSlide>
              )
            })}
      </Swiper>
    </>
  )
}

export default HomePostSlider
