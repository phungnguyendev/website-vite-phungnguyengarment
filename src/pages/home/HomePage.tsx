import useTitle from '~/components/hooks/useTitle'
import BaseLayout from '~/components/layout/BaseLayout'

const HomePage: React.FC = () => {
  useTitle('Phung Nguyen - Home')

  return (
    <>
      <BaseLayout title='Home page'></BaseLayout>
    </>
  )
}

export default HomePage
