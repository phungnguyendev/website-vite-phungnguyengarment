import useTitle from '~/components/hooks/useTitle'
import BaseLayout from '~/components/layout/BaseLayout'

const NewsEventPage = () => {
  useTitle('Phung Nguyen - News & Event')

  return (
    <>
      <BaseLayout title='News and page' breadcrumb></BaseLayout>
    </>
  )
}

export default NewsEventPage
