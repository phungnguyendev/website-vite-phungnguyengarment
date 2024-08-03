import { Flex, Typography } from 'antd'
import React from 'react'
import Skeleton from 'react-loading-skeleton'
import ImageView from '~/components/sky-ui/ImageView'
import { Prize } from '~/typing'
import { imageValidatorDisplay, numberValidator, textValidatorDisplay } from '~/utils/helpers'

interface AboutPrizeSliderCardProps {
  item: Prize
}

const AboutPrizeSliderCard: React.FC<AboutPrizeSliderCardProps> = ({ item }) => {
  return (
    <>
      {numberValidator(item.id) ? (
        <Flex className='relative h-[450px] w-full'>
          <Flex className='before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:z-10 before:bg-gradient-to-t before:from-blackFriday before:content-[""]'>
            <ImageView src={imageValidatorDisplay(item.imageUrl)} className='z-0 h-full w-full object-cover' />
            <Flex className='absolute bottom-5 left-5 right-5 z-20'>
              <Typography.Text className='text-xs italic text-white'>
                {textValidatorDisplay(item.title)}
              </Typography.Text>
            </Flex>
          </Flex>
        </Flex>
      ) : (
        <Flex>
          <Skeleton width='100%' height={450} />
        </Flex>
      )}
    </>
  )
}

export default AboutPrizeSliderCard
