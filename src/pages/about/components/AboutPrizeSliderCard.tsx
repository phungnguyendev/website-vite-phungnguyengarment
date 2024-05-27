import { Flex, Typography } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import { Prize } from '~/typing'
import { imageValidatorDisplay } from '~/utils/helpers'

interface AboutPrizeSliderCardProps {
  item: Prize
}

const AboutPrizeSliderCard: React.FC<AboutPrizeSliderCardProps> = ({ item }) => {
  return (
    <>
      <Link to={`${item.id}`}>
        <Flex className='relative w-full md:w-1/2'>
          <img src={imageValidatorDisplay(item.imageUrl)} className='z-10 h-full w-full object-cover' />
          <Flex className='absolute bottom-5 left-5 right-5 z-20'>
            <Typography.Text className='text-xs italic text-white'>{item.title}</Typography.Text>
          </Flex>
          <div className='to-bg-opacity-[10%] absolute bottom-0 left-0 right-0 top-0 z-10 bg-gradient-to-t from-blackFriday' />
        </Flex>
      </Link>
    </>
  )
}

export default AboutPrizeSliderCard
