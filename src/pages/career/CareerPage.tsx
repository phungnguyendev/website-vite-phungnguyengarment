import useTitle from '~/components/hooks/useTitle'
import BaseLayout from '~/components/layout/BaseLayout'

const CareerPage = () => {
  useTitle('Phung Nguyen - Careers')

  return (
    <>
      <BaseLayout title='Career page'></BaseLayout>
    </>
  )
}

export default CareerPage
