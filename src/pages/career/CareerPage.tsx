import { CaretDownOutlined } from '@ant-design/icons'
import { Flex, Select } from 'antd'
import { ColumnsType } from 'antd/es/table'
import { Link } from 'react-router-dom'
import { a22 } from '~/assets'
import useTitle from '~/components/hooks/useTitle'
import BaseLayout from '~/components/layout/BaseLayout'
import Head from '~/components/sky-ui/Head'
import Section from '~/components/sky-ui/Section/Section'
import SkyTable from '~/components/sky-ui/SkyTable/SkyTable'
import SkyTableTypography from '~/components/sky-ui/SkyTable/SkyTableTypography'
import { numberValidatorDisplay, textValidatorDisplay } from '~/utils/helpers'
import { useCareerViewModel } from './hooks/useCareerViewModel'
import { RecruitmentPostTableDataType } from './type'

const CareerPage = () => {
  useTitle('Tuyển dụng')
  const viewModel = useCareerViewModel()

  const columns: ColumnsType<RecruitmentPostTableDataType> = [
    {
      title: 'Vị trí tuyển dụng',
      dataIndex: 'title',
      width: '20%',
      render: (_value: any, record: RecruitmentPostTableDataType) => {
        return <SkyTableTypography>{textValidatorDisplay(record.jobSector?.title)}</SkyTableTypography>
      }
    },
    {
      title: 'Số lượng',
      dataIndex: 'imageUrl',
      width: '10%',
      responsive: ['sm'],
      render: (_value: any, record: RecruitmentPostTableDataType) => {
        return <SkyTableTypography>{numberValidatorDisplay(record.quantity)}</SkyTableTypography>
      }
    },
    {
      title: 'Nơi làm việc',
      dataIndex: 'workingPlace',
      width: '20%',
      responsive: ['sm'],
      render: (_value: any, record: RecruitmentPostTableDataType) => {
        return <SkyTableTypography>{textValidatorDisplay(record.workingPlace)}</SkyTableTypography>
      }
    },
    {
      title: '',
      dataIndex: '',
      width: '10%',
      align: 'center',
      render: (_value: any, record: RecruitmentPostTableDataType) => {
        return <Link to={`${record.routeTitle}`}>Xem chi tiết</Link>
      }
    }
  ]

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
          <Flex vertical gap={20} className='bg-white p-5'>
            <Flex gap={20}>
              <Select
                defaultValue={-1}
                className='w-full sm:w-[350px]'
                onChange={viewModel.handleJobSectorChange}
                suffixIcon={<CaretDownOutlined />}
                options={viewModel.jobSectors.map((item) => {
                  return {
                    value: item.id,
                    label: textValidatorDisplay(item.title)
                  }
                })}
              />
            </Flex>
            <SkyTable
              dataSource={viewModel.table.dataSource}
              setDataSource={viewModel.table.setDataSource}
              tableColumns={{
                columns: columns,
                actionColumn: undefined,
                showAction: undefined
              }}
            />
          </Flex>
        </Section>
      </BaseLayout>
    </>
  )
}

export default CareerPage
