import useTitle from '~/components/hooks/useTitle'
import BaseLayout from '~/components/layout/BaseLayout'

const ServicePage = () => {
  useTitle('Phung Nguyen - Services')

  return (
    <>
      <BaseLayout title='Service page'></BaseLayout>
    </>
  )
}

export default ServicePage
