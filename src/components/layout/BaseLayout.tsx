import { Flex, FlexProps } from 'antd'
import React from 'react'
import { cn } from '~/utils/helpers'

interface Props extends FlexProps {
  onLoading?: (enable: boolean) => void
  header?: React.ReactNode
}

const BaseLayout: React.FC<Props> = ({ header, children, ...props }) => {
  // const { pathname } = useLocation()
  // const breadcrumbs = useBreadcrumbs(routes)

  return (
    <Flex {...props} vertical className={cn('w-full gap-[20px] sm:gap-[40px]', props.className)}>
      {/* {breadcrumb && (
        <Breadcrumb
          items={breadcrumbs.map((breadcrumb) => {
            return {
              title:
                pathname === breadcrumb.match.pathname ? (
                  breadcrumb.breadcrumb
                ) : (
                  <Link to={breadcrumb.match.pathname}>{breadcrumb.breadcrumb}</Link>
                )
            }
          })}
        />
      )} */}
      {header}
      <Flex vertical className='w-full gap-[200px] px-5 sm:px-10 md:px-10 lg:px-10 xl:px-20'>
        {children}
      </Flex>
    </Flex>
  )
}

export default BaseLayout
