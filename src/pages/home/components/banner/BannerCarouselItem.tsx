import { Flex, Typography } from 'antd'
import React, { HTMLAttributes } from 'react'
import { HeroBanner } from '~/typing'
import { cn, imageValidatorDisplay } from '~/utils/helpers'

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
          className='absolute bottom-5 left-5 z-10 w-2/3 md:bottom-10 md:left-10'
          vertical
        >
          <Typography.Text
            className='w-fit rounded-sm
                     font-roboto-condensed text-3xl font-semibold uppercase leading-10 text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl'
          >
            {data.title}
          </Typography.Text>
          {/* <Button className='w-fit rounded-sm' type='primary' size='large'>
            <Link to={`/banner/${data.id}`}>
              <Flex gap={10} align='center' justify='center'>
                <span>Xem chi tiết</span>
                <span>
                  <MoveRight size={14} />
                </span>
              </Flex>
            </Link>
          </Button> */}
        </Flex>
      </Flex>
    </>
  )
}

export default BannerCarouselItem
