import { useEffect, useState } from 'react'
import { defaultRequestBody } from '~/api/client'
import CategoryAPI from '~/api/services/CategoryAPI'
import ProductAPI from '~/api/services/ProductAPI'
import ProductCategoryAPI from '~/api/services/ProductCategoryAPI'
import { a4 } from '~/assets'
import useTitle from '~/components/hooks/useTitle'
import BaseLayout from '~/components/layout/BaseLayout'
import Head from '~/components/sky-ui/Head'
import Section from '~/components/sky-ui/Section/Section'
import useAPIService from '~/hooks/useAPIService'
import { Category, Product, ProductCategory } from '~/typing'
import ProductSlider from './components/ProductSlider'

const ProductPage = () => {
  useTitle('Phung Nguyen - Products')

  const [, setLoading] = useState<boolean>(false)
  const categoryService = useAPIService<Category>(CategoryAPI)
  const productService = useAPIService<Product>(ProductAPI)
  const productCategoryService = useAPIService<ProductCategory>(ProductCategoryAPI)
  const [categories, setCategories] = useState<Category[]>([])
  const [products, setProducts] = useState<Product[]>([])
  const [productCategories, setProductCategories] = useState<ProductCategory[]>([])

  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    try {
      await categoryService.getListItems(
        {
          ...defaultRequestBody,
          paginator: {
            page: 1,
            pageSize: -1
          }
        },
        setLoading,
        (meta) => {
          if (!meta?.success) throw new Error(`${meta?.message}`)
          setCategories(meta.data as Category[])
        }
      )
      await productService.getListItems(
        {
          ...defaultRequestBody,
          paginator: {
            page: 1,
            pageSize: -1
          }
        },
        setLoading,
        (meta) => {
          if (!meta?.success) throw new Error(`${meta?.message}`)
          setProducts(meta.data as Product[])
        }
      )
      await productCategoryService.getListItems(
        {
          ...defaultRequestBody,
          paginator: {
            page: 1,
            pageSize: -1
          }
        },
        setLoading,
        (meta) => {
          if (!meta?.success) throw new Error(`${meta?.message}`)
          setProductCategories(meta.data as ProductCategory[])
        }
      )
    } catch (error) {
      console.log(`${error}`)
    }
  }

  return (
    <>
      <BaseLayout title='Service page' header={<Head imageURL={a4} title='About PHUNG NGUYEN PROJECT' />}>
        {/* <Section
          titleProps={{
            title: 'Loại sản phẩm',
            position: 'center'
          }}
        >
          <ProductCategorySlider items={categories} />
        </Section> */}
        <Section
          titleProps={{
            title: 'Sản phẩm',
            position: 'center'
          }}
          subTitleProps={{
            title: 'Cung Cấp Sản Phẩm May Mặc Chất Lượng Cao',
            position: 'center',
            size: 'large'
          }}
          descriptionProps={{
            title:
              'Chúng tôi luôn tự hào là một trong những nhàn cung cấp các sản phẩm may mặc chất lượng cao, cung cấp các sản phẩm may mặc ra thị trường trong và ngoài nước.',
            position: 'center'
          }}
        >
          <ProductSlider productCategories={productCategories} categories={categories} products={products} />
        </Section>
      </BaseLayout>
    </>
  )
}

export default ProductPage
