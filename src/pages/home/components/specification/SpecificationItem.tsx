import { Col, ColProps, Flex, Typography } from 'antd'
import { cn, imageValidatorDisplay } from '~/utils/helpers'

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
      <Flex vertical align='center' justify='center' gap={8} className='h-60 w-full p-5'>
        <img
          src={imageValidatorDisplay(item.icon)}
          alt='image-specification'
          draggable={false}
          width={52}
          height={52}
        />
        <Typography.Text className='line-clamp-1 text-center font-roboto-condensed text-xl font-bold' type='secondary'>
          {item.title}
        </Typography.Text>
        <Typography.Text className='line-clamp-1 text-3xl font-bold'>{item.parameter}</Typography.Text>
        <Typography.Text type='secondary' className='line-clamp-3 text-center text-sm font-medium'>
          {item.desc}
        </Typography.Text>
      </Flex>
    </Col>
  )
}

export default SpecificationItem
