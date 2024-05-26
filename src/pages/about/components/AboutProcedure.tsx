import { ColProps, Flex, Typography } from 'antd'
import React from 'react'
import { cn } from '~/utils/helpers'

const { Text, Paragraph } = Typography

type Direction = 'left' | 'right'

interface AboutProcedureProps extends ColProps {
  imageURL: string
  noNumber?: string
  title?: string
  desc?: string
  direction?: Direction
}

const AboutProcedure: React.FC<AboutProcedureProps> = ({
  noNumber,
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
          className={cn('h-full w-full', {
            'flex-col md:flex-row': direction === 'left',
            'flex-col md:flex-row-reverse': direction === 'right'
          })}
          justify='center'
          align='center'
          gap={20}
        >
          <Flex vertical className='h-fit w-full md:w-1/2'>
            <Flex vertical gap={10}>
              <Flex align='center' gap={10}>
                <Flex className='h-[64px] w-[64px] rounded-full bg-secondPrimary' justify='center' align='center'>
                  <Text className='font-roboto-condensed text-[32px] font-bold text-white'>{noNumber}</Text>
                </Flex>
                <Text className='font-roboto-condensed text-2xl font-bold text-secondPrimary'>{title}</Text>
              </Flex>
              <Paragraph type='secondary'>{desc}</Paragraph>
            </Flex>
          </Flex>
          <Flex vertical gap={20} justify='start' align='center' className='h-[320px] w-full md:w-1/2'>
            <img src={imageURL} className='h-full w-full object-cover' />
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}

export default AboutProcedure
