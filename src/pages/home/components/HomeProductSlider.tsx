import { Flex } from 'antd'
import React from 'react'
import Skeleton from 'react-loading-skeleton'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import ProductItem from '~/pages/product/components/ProductItem'
import { Product } from '~/typing'

interface HomeProductSliderProps {
  items: Product[]
  loading?: boolean
}

const HomeProductSlider: React.FC<HomeProductSliderProps> = ({ items, ...props }) => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: false,
          enabled: false
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 10
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
            slidesPerView: 5,
            spaceBetween: 20
          },
          1536: {
            slidesPerView: 6,
            spaceBetween: 20
          }
        }}
        loop
        autoplay={{
          delay: 2500
        }}
        modules={[Pagination, Autoplay, Navigation]}
        className='h-full w-full'
      >
        {!props.loading
          ? items.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProductItem item={item} />
                </SwiperSlide>
              )
            })
          : Array.from({ length: 10 }, (_, index) => {
              return (
                <SwiperSlide key={index}>
                  <Flex vertical gap={8} justify='center' align='center'>
                    <Skeleton width={224} height={216} />
                    <Skeleton count={1} width={224} />
                  </Flex>
                </SwiperSlide>
              )
            })}
      </Swiper>
    </>
  )
}

export default HomeProductSlider
