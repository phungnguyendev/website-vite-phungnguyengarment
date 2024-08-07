import { Flex, Row } from 'antd'
import React, { HTMLAttributes } from 'react'
import { ExperienceIcon, LocationIcon, MemberIcon, StaffIcon } from '~/assets/icons'
import { cn } from '~/utils/helpers'
import SpecificationItem from './SpecificationItem'

interface Props extends HTMLAttributes<HTMLDivElement> {}

const Specification: React.FC<Props> = ({ ...props }) => {
  return (
    <Flex className={cn('bg-white shadow-sm', props.className)}>
      <Row gutter={[20, 20]} className='w-full'>
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
            desc: 'Chịu trách nhiệm quản lý, kiểm soát sản xuất và chất lượng sản phẩm'
          }}
        />
        <SpecificationItem
          item={{
            icon: LocationIcon,
            title: 'Chi nhánh',
            parameter: '1',
            desc: 'Phụng Nguyên (Thanh Bình, Đồng Tháp)'
          }}
        />
      </Row>
    </Flex>
  )
}

export { SpecificationItem }
export default Specification
