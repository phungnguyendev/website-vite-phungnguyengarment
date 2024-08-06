import { Button, Col, Flex, Image, Row, Typography } from 'antd'
import { Link } from 'react-router-dom'
import useTitle from '~/components/hooks/useTitle'
import BaseLayout from '~/components/layout/BaseLayout'
import Section from '~/components/sky-ui/Section/Section'
import SectionTitle from '~/components/sky-ui/Section/SectionTitle'
import BannerCarousel from './components/banner/BannerCarousel'
import Specification from './components/specification/Specification'
// import required modules
import { a0 } from '~/assets'
import SwiperSlider from '~/components/sky-ui/SwiperSlider'
import PostItem from '../post/components/PostItem'
import ProductItem from '../product/components/ProductItem'
import HomePartnerSlider from './components/HomePartnerSlider'
import useHomeViewModel from './hooks/useHomeViewModel'

const HomePage: React.FC = () => {
  useTitle('Trang chủ')
  const viewModel = useHomeViewModel()

  return (
    <>
      <BaseLayout
        header={
          <>
            <BannerCarousel items={viewModel.heroBanners} loading={viewModel.heroBanners.length <= 0} />
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
                  <Link to='/gioi-thieu'>
                    <Button type='primary' className='w-fit'>
                      Xem thêm
                    </Button>
                  </Link>
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
            size: 'middle'
          }}
        >
          <SwiperSlider
            dataSource={viewModel.homeProducts}
            render={(record) => {
              return <ProductItem item={record} />
            }}
          />
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
          <HomePartnerSlider items={viewModel.partners} loading={viewModel.partners.length <= 0} />
        </Section>
        <Section
          titleProps={{
            title: 'Tin tức & Sự kiện'
          }}
        >
          <SwiperSlider
            dataSource={viewModel.posts}
            render={(record) => {
              return <PostItem item={record} />
            }}
          />
        </Section>
      </BaseLayout>
    </>
  )
}

export default HomePage
