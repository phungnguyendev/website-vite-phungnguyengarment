import * as React from 'react'
import { Link } from 'react-router-dom'
import { RouteType } from '~/config/route.config'
import { cn } from '~/utils/helpers'

export interface NavItemProps extends React.HTMLAttributes<HTMLElement> {
  route: RouteType
}

const NavItem: React.FC<NavItemProps> = ({ route, ...props }) => {
  return (
    <>
      <Link {...props} to={route.path} className={cn('text-base text-foreground hover:text-primary', props.className)}>
        {route.name}
      </Link>
    </>
  )
}

export default NavItem
