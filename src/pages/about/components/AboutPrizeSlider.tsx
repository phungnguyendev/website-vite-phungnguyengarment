import { Flex, Skeleton, Typography } from 'antd'
import React from 'react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { SwiperOptions } from 'swiper/types'
import { Prize } from '~/typing'
import { imageValidatorDisplay } from '~/utils/helpers'

interface Props extends SwiperOptions {
  items: Prize[]
  loading?: boolean
}

const AboutPrizeSlider: React.FC<Props> = ({ loading = false, items, ...props }) => {
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
                  <Flex key={index} className='relative w-full md:w-1/2'>
                    <img src={imageValidatorDisplay(item.imageUrl)} className='z-10 h-full w-full object-cover' />
                    <Flex className='absolute bottom-5 left-5 right-5 z-20'>
                      <Typography.Text className='text-xs italic text-white'>{item.title}</Typography.Text>
                    </Flex>
                    <div className='to-bg-opacity-[10%] absolute bottom-0 left-0 right-0 top-0 z-10 bg-gradient-to-t from-blackFriday' />
                  </Flex>
                </SwiperSlide>
              )
            })
          : Array.from({ length: 10 }, (_, index) => {
              return (
                <SwiperSlide key={index} className='h-fit w-full'>
                  <Skeleton active avatar />
                </SwiperSlide>
              )
            })}
      </Swiper>
    </>
  )
}

export default AboutPrizeSlider
