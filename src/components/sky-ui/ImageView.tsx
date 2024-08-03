import { Skeleton } from 'antd'
import React, { ImgHTMLAttributes } from 'react'
import { cn } from '~/utils/helpers'

export interface ImageViewProps extends ImgHTMLAttributes<HTMLImageElement> {}

const ImageView: React.FC<ImageViewProps> = ({ ...props }) => {
  return (
    <>{props.src ? <img {...props} className={cn('h-full w-full', props.className)} /> : <Skeleton.Image active />}</>
  )
}

export default ImageView
