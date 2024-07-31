import { Image } from 'antd'
import React, { HTMLAttributes } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Partner } from '~/typing'
import { imageValidatorDisplay } from '~/utils/helpers'
import InfiniteScroll from './InfiniteScroll'

interface HomePartnerSliderProps extends HTMLAttributes<HTMLDivElement> {
  items: Partner[]
  loading?: boolean
}

const HomePartnerSlider: React.FC<HomePartnerSliderProps> = ({ items, ...props }) => {
  return (
    <>
      {!props.loading ? (
        <InfiniteScroll
          {...props}
          className={props.className}
          items={items}
          renderItem={(item) => {
            return (
              <Image
                src={imageValidatorDisplay(item.imageUrl)}
                preview={false}
                width='120px'
                height='35px'
                className='object-contain grayscale transition-all duration-300 hover:grayscale-0'
              />
            )
          }}
        />
      ) : (
        <InfiniteScroll
          {...props}
          className={props.className}
          items={Array.from({ length: 5 })}
          renderItem={() => {
            return <Skeleton width={120} height={35} circle />
          }}
        />
      )}
    </>
  )
}

export default HomePartnerSlider
