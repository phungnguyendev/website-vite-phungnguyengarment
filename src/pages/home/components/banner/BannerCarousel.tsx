import React from 'react'
import { HeroBanner } from '~/typing'
// Import Swiper React components

import { Swiper, SwiperSlide } from 'swiper/react'

// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules'
import { SwiperOptions } from 'swiper/types'
import BannerCarouselItem from './BannerCarouselItem'

import { Flex, Skeleton } from 'antd'
import { SkeletonTheme } from 'react-loading-skeleton'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

interface Props extends SwiperOptions {
  items: HeroBanner[]
  loading?: boolean
}

const BannerCarousel: React.FC<Props> = ({ items, ...props }) => {
  return (
    <>
      <Swiper
        {...props}
        slidesPerView={1}
        spaceBetween={30}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false
        }}
        loop
        effect={'fade'}
        scrollbar={{ draggable: true }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className='mySwiper h-full w-full'
      >
        {!props.loading ? (
          items.map((item, index) => {
            return (
              <SwiperSlide draggable={false} key={index}>
                <BannerCarouselItem data={item} />
              </SwiperSlide>
            )
          })
        ) : (
          <Flex className='h-[380px] w-screen sm:h-[480px] md:h-[580px]'>
            <Skeleton.Image
              active
              style={{
                width: '100%',
                height: '100%'
              }}
              className='absolute bottom-0 left-0 right-0 top-0'
            />
            <SkeletonTheme baseColor='var(--grey)' highlightColor='var(--light-grey)'>
              <Flex vertical gap={20} className='absolute bottom-10 left-10 w-1/2'>
                <Skeleton className='' active />
                <Skeleton.Button size='large' active style={{ width: '140px' }} />
              </Flex>
            </SkeletonTheme>
          </Flex>
        )}
      </Swiper>
    </>
  )
}

export default BannerCarousel
