import { Button, Col, Flex, Image, Row, Typography } from 'antd'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { defaultRequestBody } from '~/api/client'
import HeroBannerAPI from '~/api/services/HeroBannerAPI'
import HomeProductAPI from '~/api/services/HomeProductAPI'
import PartnerAPI from '~/api/services/PartnerAPI'
import PostAPI from '~/api/services/PostAPI'
import useTitle from '~/components/hooks/useTitle'
import BaseLayout from '~/components/layout/BaseLayout'
import Section from '~/components/sky-ui/Section/Section'
import SectionTitle from '~/components/sky-ui/Section/SectionTitle'
import useAPIService from '~/hooks/useAPIService'
import { HeroBanner, Partner, Post, Product } from '~/typing'
import { imageValidatorDisplay } from '~/utils/helpers'
import PostItem from '../newsevent/components/PostItem'
import ProductItem from '../product/components/ProductItem'
import BannerCarousel from './components/BannerCarousel'
import InfiniteScroll from './components/InfiniteScroll'
import Specification from './components/Specification'
// import required modules
import Skeleton from 'react-loading-skeleton'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { a0 } from '~/assets'

const HomePage: React.FC = () => {
  useTitle('Phung Nguyen - Home')
  const [loading, setLoading] = useState<boolean>(false)
  const heroBannerService = useAPIService<HeroBanner>(HeroBannerAPI)
  const homeProductService = useAPIService<Product>(HomeProductAPI)
  const partnerService = useAPIService<Partner>(PartnerAPI)
  const postService = useAPIService<Post>(PostAPI)
  const [heroBanners, setHeroBanners] = useState<HeroBanner[]>([])
  const [homeProducts, setHomeProducts] = useState<Product[]>([])
  const [partners, setPartners] = useState<Partner[]>([])
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    await heroBannerService.getListItems(defaultRequestBody, setLoading, (meta) => {
      if (!meta?.success) throw new Error(`${meta?.message}`)
      setHeroBanners(meta.data as HeroBanner[])
    })
    await homeProductService.getListItems(
      { ...defaultRequestBody, paginator: { page: 1, pageSize: -1 } },
      setLoading,
      (meta) => {
        if (!meta?.success) throw new Error(`${meta?.message}`)
        setHomeProducts(meta.data as Product[])
      }
    )
    await partnerService.getListItems(defaultRequestBody, setLoading, (meta) => {
      if (!meta?.success) throw new Error(`${meta?.message}`)
      setPartners(meta.data as Partner[])
    })
    await postService.getListItems(defaultRequestBody, setLoading, (meta) => {
      if (!meta?.success) throw new Error(`${meta?.message}`)
      setPosts(meta.data as Post[])
    })
  }

  return (
    <>
      <BaseLayout
        header={
          <>
            <BannerCarousel items={heroBanners} />
            <Specification className='mx-5 sm:mx-10 lg:mx-20' />
          </>
        }
      >
        <Section
          titleProps={{
            title: 'Về chúng tôi'
          }}
          className='relative'
        >
          <Row gutter={[20, 20]}>
            <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
              <Image src={a0} width='100%' height='368px' className='object-cover' preview={false} />
            </Col>
            <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
              <Flex vertical className='h-full' justify='space-between'>
                <Flex vertical gap={20}>
                  <Typography.Text className='text-2xl font-semibold text-secondPrimary'>
                    Công ty TNHH MTV May Mặc Phụng Nguyên
                  </Typography.Text>
                  <Typography.Paragraph>
                    <strong>Công ty TNHH MTV May Mặc Phụng Nguyên</strong> được thành lập vào tháng 4 năm 2016, với
                    ngành nghề kinh doanh chuyên gia công hàng may mặc xuất khẩu, thị trường chính là Mỹ và Nga. Hiện
                    nay, số lượng cán bộ, công nhân viên tại Công ty là 700 người. Trong số đó có 3 đảng viên. Trong
                    những năm qua, Công ty luôn đoàn kết, nỗ lực phát triển sản xuất, tạo nhiều việc làm cho người lao
                    động, đóng góp tích cực vào công tác an sinh xã hội tại địa phương.
                  </Typography.Paragraph>
                </Flex>
                <Flex justify='center' className='mb-10'>
                  <Button type='primary' className='w-fit'>
                    <Link to='\about'>Xem thêm</Link>
                  </Button>
                </Flex>
              </Flex>
            </Col>
          </Row>
        </Section>
        <Section
          titleProps={{
            title: 'Sản phẩm',
            position: 'center'
          }}
          subTitleProps={{
            title: 'Sản Phẩm Của Chúng Tôi',
            position: 'center',
            size: 'large'
          }}
          descriptionProps={{
            title: 'Một vài sản phẩm tiêu biểu của chúng tôi.',
            position: 'center',
            size: 'middle'
          }}
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
                slidesPerView: 6,
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
            {homeProducts.length > 0
              ? homeProducts.map((item, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <ProductItem item={item} />
                    </SwiperSlide>
                  )
                })
              : Array.from({ length: 10 }, (item, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <Flex vertical gap={8} justify='center' align='center'>
                        <Skeleton width={224} height={216} />
                        <Skeleton count={1} width={224} />
                      </Flex>
                    </SwiperSlide>
                  )
                })}
          </Swiper>
        </Section>
        <Section className='relative' gap={80}>
          <Flex className='relative h-full w-full' vertical justify='center' align='center'>
            <SectionTitle
              className='absolute top-0 z-10 w-fit -translate-y-1/2'
              title='Partner'
              position='center'
              underline={false}
              size='large'
            />
            <SectionTitle
              className='absolute top-0 z-0 -translate-y-1/2 text-7xl opacity-25 md:text-9xl'
              title='Partner'
              position='center'
              underline={false}
              size='superLarge'
              type='secondary'
            />
          </Flex>
          {partners.length > 0 ? (
            <InfiniteScroll
              items={partners}
              renderItem={(item) => {
                return (
                  <Image
                    src={imageValidatorDisplay(item.imageUrl)}
                    preview={false}
                    width='120px'
                    height='35px'
                    className='max-w-none object-contain grayscale transition-all duration-300 hover:grayscale-0'
                  />
                )
              }}
            />
          ) : (
            <InfiniteScroll
              items={Array.from({ length: 5 })}
              renderItem={() => {
                return <Skeleton width={120} height={35} circle />
              }}
            />
          )}
        </Section>
        <Section
          titleProps={{
            title: 'Tin tức & Sự kiện'
          }}
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
                spaceBetween: 20
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 20
              },
              1280: {
                slidesPerView: 4,
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
            {posts.length > 0
              ? posts.map((item, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <PostItem item={item} />
                    </SwiperSlide>
                  )
                })
              : Array.from({ length: 10 }, (_, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <Flex vertical gap={8} className='items-center justify-center md:items-start'>
                        <Skeleton width={260} height={260} />
                        <Skeleton count={3} width={260} />
                      </Flex>
                    </SwiperSlide>
                  )
                })}
          </Swiper>
        </Section>
      </BaseLayout>
    </>
  )
}

export default HomePage
