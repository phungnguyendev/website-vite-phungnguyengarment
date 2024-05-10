import { Divider, Flex, Typography } from 'antd'
import React, { HTMLAttributes } from 'react'
import { NoImage } from '~/assets'
import { ExperienceIcon, LocationIcon, MemberIcon, StaffIcon } from '~/assets/icons'
import { cn } from '~/utils/helpers'

type SpecificationItemType = {
  icon?: string
  title: string
  parameter: string
  desc: string
}

interface SpecificationItemProps extends HTMLAttributes<HTMLElement> {
  item: SpecificationItemType
}

const SpecificationItem: React.FC<SpecificationItemProps> = ({ item, ...props }) => {
  return (
    <Flex {...props} className={cn('w-[25%]', props.className)}>
      <Flex
        vertical
        align='center'
        justify='start'
        className='h-[164px] w-full gap-1 p-2 sm:h-[204px] sm:gap-2 sm:p-3 md:h-[244px] md:gap-3 md:p-4 lg:h-[294px] lg:gap-4 lg:p-5'
      >
        <img
          className='h-[32px] w-[32px] sm:h-[42px] sm:w-[42px] md:h-[52px] md:w-[52px] lg:h-[72px] lg:w-[72px]'
          draggable={false}
          src={item.icon ?? NoImage}
        />
        <Typography.Text
          className='text-center font-roboto-condensed text-base font-bold sm:text-lg md:text-xl lg:text-2xl'
          type='secondary'
        >
          {item.title}
        </Typography.Text>
        <Typography.Text className='text-xl font-bold sm:text-2xl md:text-3xl lg:text-4xl'>
          {item.parameter}
        </Typography.Text>
        <Typography.Text
          type='secondary'
          className='line-clamp-2 text-center text-xs md:line-clamp-3 md:text-sm lg:line-clamp-none'
        >
          {item.desc}
        </Typography.Text>
      </Flex>
    </Flex>
  )
}

const Specification: React.FC = () => {
  return (
    <Flex className='w-full' align='center' justify='center'>
      <Flex
        className='w-[95%] flex-row items-center justify-center rounded-sm bg-white shadow-sm sm:w-[90%] md:w-[85%] lg:w-[80%]'
        // split={<Divider className='h-[100px]' type='vertical' />}
      >
        <SpecificationItem
          item={{
            icon: MemberIcon,
            title: 'Công nhân',
            parameter: '1200+',
            desc: 'Đáp ứng nhanh các đơn hàng lớn và hàng xuất nhập khẩu'
          }}
        />
        <Divider className='h-[100px]' type='vertical' />
        <SpecificationItem
          item={{
            icon: ExperienceIcon,
            title: 'Kinh nghiệm',
            parameter: '8 năm',
            desc: '8 năm kinh nghiệm trong ngành may mặc và xuất khẩu'
          }}
        />
        <Divider className='h-[100px]' type='vertical' />
        <SpecificationItem
          item={{
            icon: StaffIcon,
            title: 'Nhân viên',
            parameter: '20',
            desc: 'Lực lượng chủ chốt, chịu trách nhiệm kiểm soát sản xuất và chất lượng sản phẩm'
          }}
        />
        <Divider className='h-[100px]' type='vertical' />
        <SpecificationItem
          item={{
            icon: LocationIcon,
            title: 'Chi nhánh',
            parameter: '1',
            desc: 'Phụng Nguyên (Thanh Bình)'
          }}
        />
      </Flex>
    </Flex>
  )
}

export { SpecificationItem }
export default Specification
