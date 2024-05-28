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
        <Flex className='before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:z-10 before:bg-black before:bg-opacity-[50%] before:content-[""]'>
          <img src={imageValidatorDisplay(item.imageUrl)} className='z-0 h-full w-full object-cover' />
          <Flex className='absolute bottom-5 left-5 right-5 z-20'>
            <Typography.Text className='text-xs italic text-white'>{item.title}</Typography.Text>
          </Flex>
        </Flex>
      </Link>
    </>
  )
}

export default AboutPrizeSliderCard
