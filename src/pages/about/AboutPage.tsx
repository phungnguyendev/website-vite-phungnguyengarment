import useTitle from '~/components/hooks/useTitle'
import BaseLayout from '~/components/layout/BaseLayout'

const AboutPage = () => {
  useTitle('Phung Nguyen - About')

  return (
    <>
      <BaseLayout title='About page'></BaseLayout>
    </>
  )
}

export default AboutPage
