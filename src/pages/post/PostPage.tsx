import useTitle from '~/components/hooks/useTitle'
import BaseLayout from '~/components/layout/BaseLayout'

const PostPage = () => {
  useTitle('Phung Nguyen - News & Event')

  return (
    <>
      <BaseLayout title='News and page'>123</BaseLayout>
    </>
  )
}

export default PostPage
