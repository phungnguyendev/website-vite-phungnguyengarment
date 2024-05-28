import { Row } from 'antd'
import { useEffect, useState } from 'react'
import { defaultRequestBody } from '~/api/client'
import ProjectAPI from '~/api/services/ProjectAPI'
import { a4 } from '~/assets'
import { InternalExporterIcon, ProgressIcon, ShakeHandIcon } from '~/assets/icons'
import useTitle from '~/components/hooks/useTitle'
import BaseLayout from '~/components/layout/BaseLayout'
import Head from '~/components/sky-ui/Head'
import Section from '~/components/sky-ui/Section/Section'
import useAPIService from '~/hooks/useAPIService'
import { Project } from '~/typing'
import ServiceCard from './components/ServiceCard'
import ServiceProjectList from './components/projects/ServiceProjectList'

const ServicePage = () => {
  useTitle('Phung Nguyen - Services')
  const [, setLoading] = useState<boolean>(false)
  const projectService = useAPIService<Project>(ProjectAPI)
  const [projects, setProjects] = useState<Project[]>([])

  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    try {
      await projectService.getListItems(
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
          setProjects(meta.data as Project[])
        }
      )
    } catch (error) {
      console.log(`${error}`)
    }
  }

  return (
    <>
      <BaseLayout title='Service page' header={<Head imageURL={a4} title='About PHUNG NGUYEN SERVICE' />}>
        <Section
          titleProps={{
            title: 'Dịch Vụ',
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
            title: 'Dự Án',
            position: 'center'
          }}
          subTitleProps={{
            title: 'Dự Án Mới Nhất Của Chúng Tôi',
            position: 'center'
          }}
          descriptionProps={{
            title: 'Những khách hàng đến từ các nước trên thế giới, đến gặp gỡ và hợp tác với doanh nghiệp chúng tôi',
            position: 'center'
          }}
        >
          <ServiceProjectList items={projects} />
        </Section>
      </BaseLayout>
    </>
  )
}

export default ServicePage
