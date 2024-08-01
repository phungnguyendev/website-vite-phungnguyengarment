import { Flex, Typography } from 'antd'
import React from 'react'
import { Prize } from '~/typing'
import { imageValidatorDisplay, textValidatorDisplay } from '~/utils/helpers'

interface AboutPrizeSliderCardProps {
  item: Prize
}

const AboutPrizeSliderCard: React.FC<AboutPrizeSliderCardProps> = ({ item }) => {
  return (
    <>
      <Flex className='relative h-full w-full'>
        <Flex className='before:from-blackFriday before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:z-10 before:bg-gradient-to-t before:content-[""]'>
          <img src={imageValidatorDisplay(item.imageUrl)} className='z-0 h-full w-full object-cover' />
          <Flex className='absolute bottom-5 left-5 right-5 z-20'>
            <Typography.Text className='text-xs italic text-white'>{textValidatorDisplay(item.title)}</Typography.Text>
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}

export default AboutPrizeSliderCard
