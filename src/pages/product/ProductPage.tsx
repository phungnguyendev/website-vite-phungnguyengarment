import useTitle from '~/components/hooks/useTitle'
import BaseLayout from '~/components/layout/BaseLayout'

const ProductPage = () => {
  useTitle('Phung Nguyen - Products')

  return (
    <>
      <BaseLayout title='Product page'></BaseLayout>
    </>
  )
}

export default ProductPage
