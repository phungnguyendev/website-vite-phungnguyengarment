import { Skeleton as AntSkeleton, Button, Flex, Typography } from 'antd'
import { MoveRight } from 'lucide-react'
import React from 'react'
import { SkeletonTheme } from 'react-loading-skeleton'
import { Link } from 'react-router-dom'
import { HeroBanner } from '~/typing'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { SwiperOptions } from 'swiper/types'
import { imageValidatorDisplay } from '~/utils/helpers'

interface Props extends SwiperOptions {
  items: HeroBanner[]
}

const BannerCarousel: React.FC<Props> = ({ items, ...props }) => {
  return (
    <>
      <Swiper
        {...props}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className='h-full w-full'
      >
        {items.length > 0 ? (
          items.map((item, index) => {
            return (
              <SwiperSlide draggable={false} key={index} className='items-center justify-center'>
                <Flex className='relative' key={index}>
                  <img
                    src={imageValidatorDisplay(item.imageUrl)}
                    className='h-[380px] w-full object-cover sm:h-[480px] md:h-[580px] lg:h-[680px]'
                  />
                  <Flex
                    gap={20}
                    align='start'
                    justify='center'
                    className='absolute bottom-5 left-5 z-10 w-2/3 md:bottom-10 md:left-10'
                    vertical
                  >
                    <Typography.Text className='to-bg-opacity-[10%] w-fit rounded-sm bg-gradient-to-r from-black px-5 py-2 font-roboto-condensed text-xl font-semibold uppercase leading-10 text-white sm:text-3xl md:text-5xl lg:text-7xl'>
                      {item.title}
                    </Typography.Text>
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
                </Flex>
              </SwiperSlide>
            )
          })
        ) : (
          <Flex className='h-[380px] w-screen sm:h-[480px] md:h-[580px]'>
            <AntSkeleton.Image
              active
              style={{
                width: '100%',
                height: '100%'
              }}
              className='absolute bottom-0 left-0 right-0 top-0'
            />
            <SkeletonTheme baseColor='var(--grey)' highlightColor='var(--light-grey)'>
              <Flex vertical gap={20} className='absolute bottom-10 left-10 w-1/2'>
                <AntSkeleton className='' active />
                <AntSkeleton.Button size='large' active style={{ width: '140px' }} />
              </Flex>
            </SkeletonTheme>
          </Flex>
        )}
      </Swiper>
    </>
  )
}

export default BannerCarousel
