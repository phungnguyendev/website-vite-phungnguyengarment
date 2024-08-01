import { Flex } from 'antd'
import React from 'react'
import Skeleton from 'react-loading-skeleton'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { SwiperOptions } from 'swiper/types'
import useDevice from '~/components/hooks/useDevice'
import { Prize } from '~/typing'
import { breakpoint } from '~/utils/helpers'
import AboutPrizeSliderCard from './AboutPrizeSliderCard'

interface AboutPrizeSliderProps extends SwiperOptions {
  items: Prize[]
  loading?: boolean
}

const AboutPrizeSlider: React.FC<AboutPrizeSliderProps> = ({ items, ...props }) => {
  const device = useDevice()

  return (
    <>
      <Swiper
        {...props}
        slidesPerView={device.width >= breakpoint.md ? 2 : 1}
        spaceBetween={10}
        direction='horizontal'
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
                  <AboutPrizeSliderCard item={item} />
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

export default AboutPrizeSlider
