import { newsBg } from '~/assets'
import useTitle from '~/components/hooks/useTitle'
import BaseLayout from '~/components/layout/BaseLayout'
import CarouselSlider from '~/components/sky-ui/CarouselSlider'
import Head from '~/components/sky-ui/Head'
import NoPostContentFound from '~/components/sky-ui/NoPostContentFound'
import Section from '~/components/sky-ui/Section/Section'
import SwiperSlider from '~/components/sky-ui/SwiperSlider'
import { isValidArray } from '~/utils/helpers'
import PostHeroItem from './components/PostHeroItem'
import PostItem from './components/PostItem'
import usePostViewModel from './hooks/usePostViewModel'

const PostPage = () => {
  useTitle('Tin tức và Sự kiện')
  const viewModel = usePostViewModel()

  const latestPosts = viewModel.latestPosts(viewModel.posts)
  const recentPosts = viewModel.recentPosts(viewModel.posts)
  const olderPosts = viewModel.olderPosts(viewModel.posts)

  return (
    <>
      <BaseLayout header={<Head imageURL={newsBg} title='About PHUNG NGUYEN PROJECT' />}>
        <Section
          titleProps={{
            title: 'Tin tức và Sự kiện',
            position: 'center'
          }}
          subTitleProps={{
            title: 'Sản Phẩm Của Chúng Tôi',
            position: 'center',
            size: 'middle'
          }}
          descriptionProps={{
            title: 'Các tin tức và sự kiện mới nhất của Phụng Nguyên trong thời gian vừa qua',
            position: 'center'
          }}
        >
          <Section
            titleProps={{
              title: 'Tin nổi bậc'
            }}
          >
            {/* {isValidArray(viewModel.posts) ? <PostHeroItem item={latestPost} /> : <NoPostContentFound />} */}
            {isValidArray(latestPosts) ? (
              <CarouselSlider
                dataSource={latestPosts}
                render={(record) => {
                  return <PostHeroItem item={record} />
                }}
              />
            ) : (
              <NoPostContentFound />
            )}
          </Section>
          <Section
            titleProps={{
              title: 'Tin tức & Sự kiện gần đây'
            }}
          >
            {isValidArray(recentPosts) ? (
              // <PostSlider items={recentPosts.filter((item) => item.id !== latestPost.id)} />
              <SwiperSlider
                dataSource={recentPosts}
                render={(record) => {
                  return <PostItem item={record} />
                }}
              />
            ) : (
              <NoPostContentFound />
            )}
          </Section>
          <Section
            titleProps={{
              title: 'Tin cũ hơn'
            }}
          >
            {isValidArray(olderPosts) ? (
              // <PostSlider items={olderPosts.filter((item) => item.id !== latestPost.id)} />
              <SwiperSlider
                dataSource={olderPosts}
                render={(record) => {
                  return <PostItem item={record} />
                }}
              />
            ) : (
              <NoPostContentFound />
            )}
          </Section>
        </Section>
      </BaseLayout>
    </>
  )
}

export default PostPage
