import { Flex, Skeleton } from 'antd'
import React from 'react'
import { SkeletonTheme } from 'react-loading-skeleton'
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

interface CarouselRequiredDataType {
  id?: number
}

export interface CarouselSliderProps<T extends CarouselRequiredDataType> {
  dataSource: T[]
  loading?: boolean
  render: (record: T) => React.ReactNode
}

const CarouselSlider = <T extends CarouselRequiredDataType>({
  loading,
  dataSource,
  render
}: CarouselSliderProps<T>) => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false
        }}
        loop
        effect='fade'
        scrollbar={{ draggable: true }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className='mySwiper h-full w-full'
      >
        {!loading ? (
          dataSource.map((item, index) => {
            return (
              <SwiperSlide draggable={false} key={index}>
                {render(item)}
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

export default CarouselSlider
