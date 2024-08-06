import { Typography } from 'antd'
import { BlockProps } from 'antd/es/typography/Base'
import { cn } from '~/utils/helpers'

export interface SkyTableTypographyProps extends BlockProps {}

const SkyTableTypography = ({ ...props }: SkyTableTypographyProps) => {
  return (
    <Typography.Text {...props} className={cn('h-fit w-full flex-shrink-0', props.className)}>
      {props.children}
    </Typography.Text>
  )
}

export default SkyTableTypography
