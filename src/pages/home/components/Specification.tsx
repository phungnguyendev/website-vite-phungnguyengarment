import { Col, ColProps, Flex, Row, Typography } from 'antd'
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

interface SpecificationItemProps extends ColProps {
  item: SpecificationItemType
}

const SpecificationItem: React.FC<SpecificationItemProps> = ({ item, ...props }) => {
  return (
    <Col
      {...props}
      className={cn('flex items-center justify-center rounded-sm', props.className)}
      xs={24}
      sm={24}
      md={12}
      lg={6}
      xl={6}
    >
      <Flex vertical align='center' justify='center' gap={8} className='h-72 w-72 p-5'>
        <img className='h-[72px] w-[72px]' draggable={false} src={item.icon ?? NoImage} />
        <Typography.Text className='line-clamp-1 text-center font-roboto-condensed text-2xl font-bold' type='secondary'>
          {item.title}
        </Typography.Text>
        <Typography.Text className='line-clamp-1 text-4xl font-bold'>{item.parameter}</Typography.Text>
        <Typography.Text type='secondary' className='line-clamp-3 text-center text-sm'>
          {item.desc}
        </Typography.Text>
      </Flex>
    </Col>
  )
}

interface SpecificationProps extends HTMLAttributes<HTMLDivElement> {}

const Specification: React.FC<SpecificationProps> = ({ ...props }) => {
  return (
    <Flex className={cn('bg-white shadow-sm', props.className)}>
      <Row gutter={[24, 24]}>
        <SpecificationItem
          item={{
            icon: MemberIcon,
            title: 'Công nhân',
            parameter: '1200+',
            desc: 'Đáp ứng nhanh các đơn hàng lớn và hàng xuất nhập khẩu'
          }}
        />
        <SpecificationItem
          item={{
            icon: ExperienceIcon,
            title: 'Kinh nghiệm',
            parameter: '8 năm',
            desc: '8 năm kinh nghiệm trong ngành may mặc và xuất khẩu'
          }}
        />
        <SpecificationItem
          item={{
            icon: StaffIcon,
            title: 'Nhân viên',
            parameter: '20',
            desc: 'Lực lượng chủ chốt, chịu trách nhiệm kiểm soát sản xuất và chất lượng sản phẩm'
          }}
        />
        <SpecificationItem
          item={{
            icon: LocationIcon,
            title: 'Chi nhánh',
            parameter: '1',
            desc: 'Phụng Nguyên (Thanh Bình)'
          }}
        />
      </Row>
    </Flex>
  )
}

export { SpecificationItem }
export default Specification
