import React, { HTMLAttributes } from 'react'

export interface InfiniteScrollProps<T extends any> extends HTMLAttributes<HTMLDivElement> {
  items: T[]
  renderItem: (item: T) => React.ReactNode
}

const InfiniteScroll = <T extends any>({ items, renderItem, ...props }: InfiniteScrollProps<T>) => {
  return (
    <div
      {...props}
      x-data='{}'
      x-init="$nextTick(() => {
              let ul = $refs.logos;
              ul.insertAdjacentHTML('afterend', ul.outerHTML);
              ul.nextSibling.setAttribute('aria-hidden', 'true');
          })"
      className='inline-flex w-full flex-nowrap overflow-hidden'
    >
      <ul x-ref='logos' className='flex animate-infinite-scroll list-none items-center justify-around'>
        {items.map((item, index) => {
          return (
            <li key={index} className='mx-10'>
              {renderItem(item)}
            </li>
          )
        })}
      </ul>
      <ul x-ref='logos' className='flex animate-infinite-scroll list-none items-center justify-around'>
        {items.map((item, index) => {
          return (
            <li key={index} className='mx-10'>
              {renderItem(item)}
            </li>
          )
        })}
      </ul>
      <ul x-ref='logos' className='flex animate-infinite-scroll list-none items-center justify-around'>
        {items.map((item, index) => {
          return (
            <li key={index} className='mx-10'>
              {renderItem(item)}
            </li>
          )
        })}
      </ul>
      <ul x-ref='logos' className='flex animate-infinite-scroll list-none items-center justify-around'>
        {items.map((item, index) => {
          return (
            <li key={index} className='mx-10'>
              {renderItem(item)}
            </li>
          )
        })}
      </ul>
      <ul x-ref='logos' className='flex animate-infinite-scroll list-none items-center justify-around'>
        {items.map((item, index) => {
          return (
            <li key={index} className='mx-10'>
              {renderItem(item)}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default InfiniteScroll
