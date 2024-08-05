import { Breadcrumb, Flex, Typography } from 'antd'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import useReactRouterBreadcrumbs from 'use-react-router-breadcrumbs'
import useDevice from '~/components/hooks/useDevice'
import BaseLayout from '~/components/layout/BaseLayout'
import HTMLReader from '~/components/sky-ui/htmlreader/HTMLReader'
import NoPostContentFound from '~/components/sky-ui/NoPostContentFound'
import Section from '~/components/sky-ui/Section/Section'
import SkySkeleton from '~/components/sky-ui/SkySkeleton'
import SwiperSlider from '~/components/sky-ui/SwiperSlider'
import routes from '~/config/route.config'
import { dateFormatter } from '~/utils/date-formatter'
import { breakpoint, htmlValidatorDisplay, isValidArray } from '~/utils/helpers'
import usePostDetailViewModel from '../hooks/usePostDetailViewModel'
import PostItem from './PostItem'

const PostDetail: React.FC = () => {
  const device = useDevice()
  const { pathname } = useLocation()
  const breadcrumbs = useReactRouterBreadcrumbs(routes)
  const viewModel = usePostDetailViewModel()

  return (
    <>
      <BaseLayout>
        <Flex vertical className='mx-5 sm:mx-10 md:mx-24 lg:mx-32 xl:mx-40'>
          <Breadcrumb
            className='mt-5 flex w-full justify-start'
            separator={<span className='text-foreground'>/</span>}
            items={breadcrumbs.map((breadcrumb) => {
              return {
                title:
                  pathname === breadcrumb.match.pathname ? (
                    <Typography.Text className='font-semibold text-foreground'>{breadcrumb.breadcrumb}</Typography.Text>
                  ) : (
                    <Link to={breadcrumb.match.pathname}>
                      <Typography.Text className='font-semibold text-foreground'>
                        {breadcrumb.breadcrumb}
                      </Typography.Text>
                    </Link>
                  )
              }
            })}
          />

          <SkySkeleton
            loading={viewModel.loading}
            title={{
              width: '100%'
            }}
          >
            <Typography.Title level={device.width >= breakpoint.lg ? 2 : 3} className='font-bold'>
              {viewModel.post?.title}
            </Typography.Title>
          </SkySkeleton>

          <SkySkeleton
            loading={viewModel.loading}
            paragraph={{
              rows: 0
            }}
          >
            <Typography.Text type='secondary' className='italic'>
              Cập nhật ngày: {dateFormatter(viewModel.post?.publishedAt, 'dateTime')}
            </Typography.Text>
          </SkySkeleton>
          <SkySkeleton
            loading={viewModel.loading}
            paragraph={{
              rows: 20
            }}
          >
            <HTMLReader htmlString={htmlValidatorDisplay(viewModel.post?.content)} />
          </SkySkeleton>
        </Flex>
        <Section
          titleProps={{
            title: 'Bản tin khác'
          }}
          className='relative'
        >
          {isValidArray(viewModel.posts) ? (
            <SwiperSlider
              dataSource={viewModel.posts}
              render={(record) => {
                return <PostItem item={record} />
              }}
            />
          ) : (
            <NoPostContentFound />
          )}
        </Section>
      </BaseLayout>
    </>
  )
}

export default PostDetail
