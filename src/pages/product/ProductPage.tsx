import { a4 } from '~/assets'
import useTitle from '~/components/hooks/useTitle'
import BaseLayout from '~/components/layout/BaseLayout'
import Head from '~/components/sky-ui/Head'
import Section from '~/components/sky-ui/Section/Section'
import SkyList from '~/components/sky-ui/SkyList/SkyList'
import { textValidatorDisplay } from '~/utils/helpers'
import ProductItem from './components/ProductItem'
import useProductViewModel from './hooks/useProductViewModel'

const ProductPage = () => {
  useTitle('Sản phẩm')
  const viewModel = useProductViewModel()

  return (
    <>
      <BaseLayout header={<Head imageURL={a4} title='About PHUNG NGUYEN PROJECT' />}>
        {/* <Section
          titleProps={{
            title: 'Loại sản phẩm',
            position: 'center'
          }}
        >
          <Anchor
            className='w-full bg-white transition-all duration-300'
            direction='horizontal'
            offsetTop={hidden ? 0 : 70}
            targetOffset={500}
            affix={false}
            items={categories.map((item, index) => {
              return {
                key: `${index}`,
                title: (
                  <Typography.Text code className='text-center font-roboto-condensed text-base font-bold'>
                    {textValidatorDisplay(item.title)}
                  </Typography.Text>
                ),
                href: `#anchor-${item.id}`
              } as AnchorLinkItemProps
            })}
          />
        </Section> */}
        <Section
          titleProps={{
            title: 'Sản phẩm',
            position: 'center'
          }}
          subTitleProps={{
            title: 'Cung Cấp Sản Phẩm May Mặc Chất Lượng Cao',
            position: 'center'
          }}
          descriptionProps={{
            title:
              'Chúng tôi luôn tự hào là một trong những nhàn cung cấp các sản phẩm may mặc chất lượng cao, cung cấp các sản phẩm may mặc ra thị trường trong và ngoài nước.',
            position: 'center'
          }}
        >
          {viewModel.categories.length > 0 ? (
            viewModel.categories.map((item, index) => {
              return (
                <Section
                  key={index}
                  titleProps={{
                    title: textValidatorDisplay(item.title)
                  }}
                >
                  <SkyList
                    grid={{ gutter: [20, 20], xs: 2, md: 3, lg: 4, xl: 4, xxl: 5 }}
                    dataSource={viewModel.matchCategory(viewModel.products, item.id)}
                    renderItem={(product, index) => {
                      return <ProductItem key={index} item={product} />
                    }}
                  />
                </Section>
              )
            })
          ) : (
            <>Loading...</>
          )}
        </Section>
      </BaseLayout>
    </>
  )
}

export default ProductPage
