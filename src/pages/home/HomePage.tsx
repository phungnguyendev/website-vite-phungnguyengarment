import { Button, Col, Flex, Image, Row, Typography } from 'antd'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
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
import BannerCarousel from './components/BannerCarousel'
import Specification from './components/Specification'
// import required modules
import { a0 } from '~/assets'
import HomePartnerSlider from './components/HomePartnerSlider'
import HomePostSlider from './components/HomePostSlider'
import ProductHomeSlider from './components/HomeProductSlider'

const HomePage: React.FC = () => {
  useTitle('Phung Nguyen - Home')
  const [, setLoading] = useState<boolean>(false)
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
    try {
      await heroBannerService.getListItems(defaultRequestBody, setLoading, (meta) => {
        if (!meta?.success) throw new Error(`${meta?.message}`)
        setHeroBanners(meta.data as HeroBanner[])
      })
      await homeProductService.getListItems(
        { ...defaultRequestBody, paginator: { page: 1, pageSize: 10 } },
        setLoading,
        (meta) => {
          if (!meta?.success) throw new Error(`${meta?.message}`)
          setHomeProducts(meta.data as Product[])
        }
      )
      await partnerService.getListItems(
        { ...defaultRequestBody, paginator: { page: 1, pageSize: -1 } },
        setLoading,
        (meta) => {
          if (!meta?.success) throw new Error(`${meta?.message}`)
          setPartners(meta.data as Partner[])
        }
      )
      await postService.getListItems(
        { ...defaultRequestBody, paginator: { page: 1, pageSize: 10 } },
        setLoading,
        (meta) => {
          if (!meta?.success) throw new Error(`${meta?.message}`)
          setPosts(meta.data as Post[])
        }
      )
    } catch (error) {
      console.log(`${error}`)
    }
  }

  return (
    <>
      <BaseLayout
        header={
          <>
            <BannerCarousel items={heroBanners} loading={heroBanners.length <= 0} />
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
                  <Typography.Paragraph className='text-base'>
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
        >
          <ProductHomeSlider items={homeProducts} loading={homeProducts.length <= 0} />
        </Section>
        <Section className='relative gap-[40px] md:gap-[80px]'>
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
          <HomePartnerSlider items={partners} loading={partners.length <= 0} />
        </Section>
        <Section
          titleProps={{
            title: 'Tin tức & Sự kiện'
          }}
        >
          <HomePostSlider items={posts} loading={posts.length <= 0} />
        </Section>
      </BaseLayout>
    </>
  )
}

export default HomePage
