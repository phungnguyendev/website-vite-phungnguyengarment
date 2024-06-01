import { Col, Input, Row, Select } from 'antd'
import { Search } from 'lucide-react'
import { a22 } from '~/assets'
import useTitle from '~/components/hooks/useTitle'
import BaseLayout from '~/components/layout/BaseLayout'
import Head from '~/components/sky-ui/Head'
import Section from '~/components/sky-ui/Section/Section'

const CareerPage = () => {
  useTitle('Phung Nguyen - Careers')

  return (
    <>
      <BaseLayout header={<Head imageURL={a22} title='About PHUNG NGUYEN RECRUITMENT' />}>
        <Section
          titleProps={{
            title: 'Tuyển dụng',
            position: 'center'
          }}
          subTitleProps={{
            title: 'Cơ Hội Nghề Nghiệp',
            position: 'center'
          }}
        >
          <Row gutter={[20, 20]}>
            <Col xs={24} xl={6}>
              <Input
                className='placeholder:text-muted'
                prefix={<Search className='text-muted' />}
                placeholder='Vị trí công việc'
              />
            </Col>
            <Col xs={24} xl={6}>
              <Select
                defaultValue='lucy'
                style={{ width: 120 }}
                onChange={(value) => {
                  console.log(`selected ${value}`)
                }}
                options={[
                  { value: 'jack', label: 'Jack' },
                  { value: 'lucy', label: 'Lucy' },
                  { value: 'Yiminghe', label: 'yiminghe' },
                  { value: 'disabled', label: 'Disabled', disabled: true }
                ]}
              />
            </Col>
          </Row>
        </Section>
      </BaseLayout>
    </>
  )
}

export default CareerPage
