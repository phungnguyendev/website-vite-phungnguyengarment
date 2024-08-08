import { Flex, Skeleton } from 'antd'
import React from 'react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react'
import { cn } from '~/utils/helpers'

interface SwiperSliderRequiredDataType {
  id?: number
}

export interface SwiperSliderProps<T extends SwiperSliderRequiredDataType> extends SwiperProps {
  dataSource: T[]
  loading?: boolean
  placeholder?: React.ReactNode
  render: (record: T) => React.ReactNode
}

const SwiperSlider = <T extends SwiperSliderRequiredDataType>({
  loading,
  dataSource,
  render,
  placeholder,
  ...props
}: SwiperSliderProps<T>) => {
  return (
    <>
      <Swiper
        {...props}
        slidesPerView={props.slidesPerView ?? 1}
        spaceBetween={props.spaceBetween ?? 10}
        breakpoints={
          props.breakpoints ?? {
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
          }
        }
        loop={props.loop ?? true}
        autoplay={
          props.autoplay ?? {
            delay: 3000
          }
        }
        modules={props.modules ?? [Pagination, Autoplay, Navigation]}
        className={cn('h-full w-full', props.className)}
      >
        {!loading && dataSource.length > 0
          ? dataSource.map((item, index) => {
              return <SwiperSlide key={index}>{render(item)}</SwiperSlide>
            })
          : Array.from({ length: 10 }, (_, index) => {
              return (
                <SwiperSlide key={index}>
                  {placeholder ?? (
                    <Flex vertical gap={8} className='items-center justify-center md:items-start'>
                      <Skeleton className='w-full sm:w-[95%]' active avatar title paragraph={false} />
                    </Flex>
                  )}
                </SwiperSlide>
              )
            })}
      </Swiper>
    </>
  )
}

export default SwiperSlider
