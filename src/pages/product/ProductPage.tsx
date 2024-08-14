import { Flex } from 'antd'
import { a4 } from '~/assets'
import BaseLayout from '~/components/layout/BaseLayout'
import Head from '~/components/sky-ui/Head'
import Section from '~/components/sky-ui/Section/Section'
import SkyList from '~/components/sky-ui/SkyList/SkyList'
import useSEO from '~/hooks/useSEO'
import { textValidatorDisplay } from '~/utils/helpers'
import ProductItem from './components/ProductItem'
import useProductViewModel from './hooks/useProductViewModel'

const ProductPage = () => {
  useSEO({
    title: 'Sản Phẩm - Phụng Nguyên Garment | Thời Trang Cao Cấp & Chất Lượng',
    description:
      'Khám phá bộ sưu tập thời trang cao cấp từ Phụng Nguyên Garment, với các sản phẩm được thiết kế tinh xảo, chất liệu cao cấp, và xu hướng hiện đại.',
    keywords: 'sản phẩm thời trang, thời trang cao cấp, Phụng Nguyên Garment, quần áo cao cấp, thiết kế thời trang',
    image: 'https://phungnguyengarment.vn/assets/product-shirt.png',
    url: 'https://phungnguyengarment.vn/san-pham'
  })
  const viewModel = useProductViewModel()

  return (
    <>
      <BaseLayout header={<Head imageURL={a4} title='About PHUNG NGUYEN PRODUCT' />}>
        <Flex vertical gap={40}>
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
          />
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
        </Flex>
      </BaseLayout>
    </>
  )
}

export default ProductPage
