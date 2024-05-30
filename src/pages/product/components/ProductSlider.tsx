import { RowProps } from 'antd'
import React from 'react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import Section from '~/components/sky-ui/Section/Section'
import { Category, Product, ProductCategory } from '~/typing'
import { textValidatorDisplay } from '~/utils/helpers'
import ProductItem from './ProductItem'

interface Props extends RowProps {
  productCategories: ProductCategory[]
  categories: Category[]
  products: Product[]
}

const ProductSlider: React.FC<Props> = ({ productCategories, categories, products }) => {
  const matchCategory = (categoryID: number | null | undefined): Product[] => {
    if (productCategories.length <= 0) return []
    const productIDs = productCategories.filter((self) => self.categoryID === categoryID).map((self) => self.productID)
    return products.filter((self) => productIDs.includes(self.id))
  }

  return (
    <>
      {categories.length > 0 ? (
        categories.map((category, index) => {
          return (
            <Section
              key={index}
              titleProps={{
                title: textValidatorDisplay(category?.title),
                underline: false
              }}
              id={`anchor-${category.id}`}
            >
              <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                  clickable: false,
                  enabled: false
                }}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 10
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 20
                  },
                  1024: {
                    slidesPerView: 4,
                    spaceBetween: 20
                  },
                  1280: {
                    slidesPerView: 5,
                    spaceBetween: 20
                  },
                  1536: {
                    slidesPerView: 5,
                    spaceBetween: 20
                  }
                }}
                loop={true}
                autoplay={{
                  delay: 2500
                }}
                modules={[Pagination, Autoplay, Navigation]}
                className='h-full w-full'
              >
                {matchCategory(category.id).length > 0 ? (
                  matchCategory(category.id).map((item, index) => {
                    return (
                      <SwiperSlide key={index}>
                        <ProductItem item={item} />
                      </SwiperSlide>
                    )
                  })
                ) : (
                  <>Empty data</>
                )}
              </Swiper>
            </Section>
          )
        })
      ) : (
        <></>
      )}
    </>
  )
}

export default ProductSlider
