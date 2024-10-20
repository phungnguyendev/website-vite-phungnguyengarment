import { Divider, Flex, Typography } from 'antd'
import { Link } from 'react-router-dom'

type SideType = {
  isGroup?: boolean
  name: string
  path: string
}

interface Props {
  item: SideType
  collapsed: boolean
}

const SideItem: React.FC<Props> = ({ item, collapsed }) => {
  return (
    <>
      {item.isGroup ? (
        <Flex vertical>
          <Divider />
          <Typography.Text type='secondary'>{item.name}</Typography.Text>
        </Flex>
      ) : (
        <>
          {collapsed && (
            <Link to={item.path} className='mx-2 transition-none'>
              {item.name}
            </Link>
          )}
        </>
      )}
    </>
  )
}

export default SideItem
