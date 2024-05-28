import { Flex, Skeleton } from 'antd'
import React from 'react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { SwiperOptions } from 'swiper/types'
import { Post } from '~/typing'
import AboutPrizeSliderCard from './AboutPrizeSliderCard'

interface AboutPrizeSliderProps extends SwiperOptions {
  items: Post[]
}

const AboutPrizeSlider: React.FC<AboutPrizeSliderProps> = ({ items, ...props }) => {
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
        {items.length > 0
          ? items.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <AboutPrizeSliderCard item={item} />
                </SwiperSlide>
              )
            })
          : Array.from({ length: 10 }, (_, index) => {
              return (
                <SwiperSlide key={index}>
                  <Flex className='h-[230px] w-full'>
                    <Skeleton.Image
                      style={{
                        width: '100%',
                        height: '100%',
                        position: 'absolute',
                        top: '0px',
                        left: '0px',
                        bottom: '0px',
                        right: '0px'
                      }}
                      active
                    />
                  </Flex>
                </SwiperSlide>
              )
            })}
      </Swiper>
    </>
  )
}

export default AboutPrizeSlider
