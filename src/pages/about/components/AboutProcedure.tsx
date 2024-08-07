import { ColProps, Flex, Typography } from 'antd'
import React from 'react'
import { cn } from '~/utils/helpers'

const { Text, Paragraph } = Typography

type Direction = 'left' | 'right'

interface AboutProcedureProps extends ColProps {
  imageURL: string
  index?: string
  title?: string
  desc?: string
  direction?: Direction
}

const AboutProcedure: React.FC<AboutProcedureProps> = ({
  index,
  title,
  desc,
  imageURL,
  direction = 'left',
  ...props
}) => {
  return (
    <>
      <Flex {...props} vertical justify='center' align='center' className='relative h-fit w-full'>
        <Flex
          className={cn('h-full w-full gap-5 lg:gap-10', {
            'flex-col md:flex-row': direction === 'left',
            'flex-col md:flex-row-reverse': direction === 'right'
          })}
          justify='center'
          align='start'
        >
          <Flex vertical className='h-fit w-full md:w-1/2'>
            <Flex vertical gap={10} justify='start' align='start'>
              <Flex align='center' gap={10}>
                <Flex
                  className='h-[54px] min-h-[54px] w-[54px] min-w-[54px] rounded-full bg-secondPrimary md:h-[64px] md:min-h-[64px] md:w-[64px] md:min-w-[64px]'
                  justify='center'
                  align='center'
                >
                  <Text className='font-roboto-condensed text-[32px] font-bold text-white'>{index}</Text>
                </Flex>
                <Text className='font-roboto-condensed text-2xl font-bold text-secondPrimary'>{title}</Text>
              </Flex>
              <Paragraph className='text-base'>{desc}</Paragraph>
            </Flex>
          </Flex>
          <Flex vertical gap={20} justify='start' align='center' className='h-[320px] w-full md:w-1/2 lg:h-[420px]'>
            <img src={imageURL} className='pointer-events-none h-full w-full object-cover' />
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}

export default AboutProcedure
