import { Row } from 'antd'
import { a20 } from '~/assets'
import { InternalExporterIcon, ProgressIcon, ShakeHandIcon } from '~/assets/icons'
import BaseLayout from '~/components/layout/BaseLayout'
import Head from '~/components/sky-ui/Head'
import Section from '~/components/sky-ui/Section/Section'
import useSEO from '~/hooks/useSEO'
import ServiceCard from './components/ServiceCard'
import ServiceProjectList from './components/projects/ServiceProjectList'
import useServiceViewModel from './hooks/useServiceViewModel'

const ServicePage = () => {
  useSEO({
    title: 'Dịch Vụ - Phụng Nguyên Garment | Gia Công May Mặc Cao Cấp',
    description:
      'Phụng Nguyên Garment cung cấp dịch vụ gia công may mặc cao cấp với quy trình sản xuất hiện đại, đảm bảo chất lượng vượt trội và tiến độ giao hàng nhanh chóng.',
    keywords: 'dịch vụ may mặc, gia công may mặc, Phụng Nguyên Garment, sản xuất thời trang, may mặc cao cấp',
    image: 'https://phungnguyengarment.vn/assets/company-factory.jpg',
    url: 'https://phungnguyengarment.vn/dich-vu'
  })
  const viewModel = useServiceViewModel()

  return (
    <>
      <BaseLayout header={<Head imageURL={a20} title='About PHUNG NGUYEN SERVICE' />}>
        <Section
          titleProps={{
            title: 'Dịch vụ',
            position: 'center'
          }}
          subTitleProps={{
            title: 'Dịch Vụ Của Chúng Tôi',
            position: 'center'
          }}
          descriptionProps={{
            title: 'Cùng chúng tôi, thực hiện nên những cơ hội đổi mới, hợp tác, phát triển và cùng mang lại giá trị',
            position: 'center'
          }}
        >
          <Row gutter={[20, 20]}>
            <ServiceCard
              icon={ShakeHandIcon}
              title='Hợp Tác Phát Triển'
              desc='Mang đến lợi nhuận cho nhà đầu tư tin tưởng vào tri thức và tính chính trực của chúng tôi.'
            />
            <ServiceCard
              icon={ProgressIcon}
              title='Gia Công Sản Phẩm'
              desc='Sản xuất và kinh doanh các sản phẩm sợi, dệt, đan kim, nhuộm và may mặc.'
            />
            <ServiceCard
              icon={InternalExporterIcon}
              title='Xuất Khẩu Quốc Tế'
              desc='Chúng tôi tạo ra những sản phẩm có giá trị vượt trội gắn liền với chiến lược phát triển bền vững.'
            />
          </Row>
        </Section>
        <Section
          titleProps={{
            title: 'Dự án',
            position: 'center'
          }}
          subTitleProps={{
            title: 'Dự Án Mới Nhất Của Chúng Tôi',
            position: 'center',
            size: 'middle'
          }}
          descriptionProps={{
            title: 'Những khách hàng đến từ các nước trên thế giới, đến gặp gỡ và hợp tác với doanh nghiệp chúng tôi',
            position: 'center'
          }}
        >
          <ServiceProjectList items={viewModel.projects} />
        </Section>
      </BaseLayout>
    </>
  )
}

export default ServicePage
