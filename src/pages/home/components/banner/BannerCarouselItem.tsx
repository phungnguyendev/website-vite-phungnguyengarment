import { Flex, Typography } from 'antd'
import React, { HTMLAttributes } from 'react'
import { HeroBanner } from '~/typing'
import { cn, imageValidatorDisplay, textValidatorDisplay } from '~/utils/helpers'

export interface BannerCarouselItemProps extends HTMLAttributes<HTMLDivElement> {
  data: HeroBanner
}

const BannerCarouselItem: React.FC<BannerCarouselItemProps> = ({ data, ...props }) => {
  return (
    <>
      <Flex
        className={cn(
          'before:to-bg-opacity-[10%] before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:bg-gradient-to-t before:from-blackFriday before:content-[""]',
          props.className
        )}
      >
        <Flex className='h-[380px] w-full object-cover sm:h-[480px] md:h-[580px] lg:h-[680px]'>
          <img src={imageValidatorDisplay(data.imageUrl)} width='100%' height='100%' className='object-cover' />
        </Flex>
        <Flex
          gap={20}
          align='start'
          justify='center'
          className='absolute bottom-0 left-0 right-0 z-10 m-5 md:m-10 md:w-2/3'
          vertical
        >
          <Typography.Text
            className='w-full rounded-sm
                     font-roboto-condensed text-3xl font-semibold uppercase text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl'
          >
            {textValidatorDisplay(data.title)}
          </Typography.Text>
        </Flex>
      </Flex>
    </>
  )
}

export default BannerCarouselItem
