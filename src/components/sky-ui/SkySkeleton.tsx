import { Skeleton, SkeletonProps } from 'antd'
import React from 'react'
import { cn } from '~/utils/helpers'

export interface SkySkeletonProps extends SkeletonProps {}

const SkySkeleton: React.FC<SkySkeletonProps> = ({ active = true, loading, ...props }) => {
  return <>{loading ? <Skeleton {...props} active={active} className={cn('', props.className)} /> : props.children}</>
}

export default SkySkeleton
