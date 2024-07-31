import { App, Flex, Typography } from 'antd'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PostAPI from '~/api/services/PostAPI'
import useDevice from '~/components/hooks/useDevice'
import BaseLayout from '~/components/layout/BaseLayout'
import HTMLReader from '~/components/sky-ui/htmlreader/HTMLReader'
import Section from '~/components/sky-ui/Section/Section'
import SkySkeleton from '~/components/sky-ui/SkySkeleton'
import define from '~/constants/define'
import useAPIService from '~/hooks/useAPIService'
import { Post } from '~/typing'
import { dateFormatter } from '~/utils/date-formatter'
import { breakpoint, htmlValidatorDisplay } from '~/utils/helpers'

const PostDetail: React.FC = () => {
  const params = useParams()
  const device = useDevice()
  const { message } = App.useApp()
  const service = useAPIService<Post>(PostAPI)
  const [loading, setLoading] = useState<boolean>(false)
  const [post, setPost] = useState<Post | null>(null)

  useEffect(() => {
    loadData()
  }, [params.postID])

  const loadData = async () => {
    try {
      const postID = params.postID
      if (postID) {
        await service.getItemByPkSync(Number(postID), setLoading, (res) => {
          if (!res.success) throw new Error(define('dataLoad_failed'))
          setPost(res.data as Post)
        })
      }
    } catch (error: any) {
      message.error(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <BaseLayout>
        <Flex vertical className='mx-5 sm:mx-10 md:mx-24 lg:mx-32 xl:mx-40'>
          <SkySkeleton
            loading={loading}
            title={{
              width: '100%'
            }}
          >
            <Typography.Title level={device.width >= breakpoint.lg ? 2 : 3} className='font-bold'>
              {post?.title}
            </Typography.Title>
          </SkySkeleton>

          <SkySkeleton
            loading={loading}
            paragraph={{
              rows: 0
            }}
          >
            <Typography.Text type='secondary' className='italic'>
              Cập nhật ngày: {dateFormatter(post?.publishedAt, 'dateTime')}
            </Typography.Text>
          </SkySkeleton>
          <SkySkeleton
            loading={loading}
            paragraph={{
              rows: 20
            }}
          >
            <HTMLReader htmlString={htmlValidatorDisplay(post?.content)} />
          </SkySkeleton>
        </Flex>
        <Section
          titleProps={{
            title: 'Bản tin khác'
          }}
          className='relative'
        >
          123
        </Section>
      </BaseLayout>
    </>
  )
}

export default PostDetail
