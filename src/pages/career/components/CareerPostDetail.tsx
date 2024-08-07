import { Flex, Typography } from 'antd'
import React from 'react'
import { a22 } from '~/assets'
import BaseLayout from '~/components/layout/BaseLayout'
import Head from '~/components/sky-ui/Head'
import HTMLReader from '~/components/sky-ui/htmlreader/HTMLReader'
import Section from '~/components/sky-ui/Section/Section'
import appConfig from '~/config/app.config'
import { dateFormatter } from '~/utils/date-formatter'
import { htmlValidatorDisplay, numberValidatorDisplay, textValidatorDisplay } from '~/utils/helpers'
import { useCareerDetailViewModel } from '../hooks/useCareerDetailViewModel'
import CareerPostDetailItem from './CareerPostDetailItem'

interface CareerPostDetailProps {}

const CareerPostDetail: React.FC<CareerPostDetailProps> = () => {
  const viewModel = useCareerDetailViewModel()

  const contact = {
    phone: appConfig.contact.career.phone,
    email: appConfig.contact.career.email
  }

  return (
    <BaseLayout header={<Head imageURL={a22} title='About PHUNG NGUYEN RECRUITMENT' />}>
      <Section
        titleProps={{
          title: textValidatorDisplay(viewModel.recruitmentPost.jobSector?.title),
          underline: false,
          size: 'superLarge',
          className: 'text-4xl'
        }}
        className='mt-10'
      >
        <Flex vertical gap={40}>
          <Typography.Text className='text-xl font-bold text-primary'>TỔNG QUAN</Typography.Text>
          <Flex vertical>
            <CareerPostDetailItem
              title='Số lượng'
              subTitle={numberValidatorDisplay(viewModel.recruitmentPost.quantity)}
            />
            <CareerPostDetailItem title='Độ tuổi' subTitle={textValidatorDisplay(viewModel.recruitmentPost.age)} />
            <CareerPostDetailItem title='Giới tính' subTitle={textValidatorDisplay(viewModel.recruitmentPost.sex)} />
            <CareerPostDetailItem
              title='Trình độ học vấn'
              subTitle={textValidatorDisplay(viewModel.recruitmentPost.academicLevel)}
            />
            <CareerPostDetailItem title='Mức lương' subTitle={textValidatorDisplay(viewModel.recruitmentPost.wage)} />
            <CareerPostDetailItem
              title='Thời gian làm việc'
              subTitle={textValidatorDisplay(viewModel.recruitmentPost.workingTime)}
            />
            <CareerPostDetailItem
              title='Địa điểm làm việc'
              subTitle={textValidatorDisplay(viewModel.recruitmentPost.workingPlace)}
            />
            <CareerPostDetailItem
              title='Thời hạn'
              subTitle={textValidatorDisplay(dateFormatter(viewModel.recruitmentPost.expirationDate, 'dateOnly'))}
            />
          </Flex>
        </Flex>
        <Flex vertical gap={40}>
          <Typography.Text className='text-xl font-bold uppercase text-primary'>Mô tả công việc</Typography.Text>
          <HTMLReader htmlString={htmlValidatorDisplay(viewModel.recruitmentPost.jobDescription)} />
        </Flex>
        <Flex vertical gap={40}>
          <Typography.Text className='text-xl font-bold uppercase text-primary'>Yêu cầu ứng viên</Typography.Text>
          <HTMLReader htmlString={htmlValidatorDisplay(viewModel.recruitmentPost.required)} />
        </Flex>
        <Flex vertical gap={40}>
          <Typography.Text className='text-xl font-bold uppercase text-primary'>Quyền lợi được hưởng</Typography.Text>
          <HTMLReader htmlString={htmlValidatorDisplay(viewModel.recruitmentPost.benefits)} />
        </Flex>
        <Flex vertical gap={40}>
          <Typography.Text className='text-xl font-bold uppercase text-primary'>Cách thức ứng tuyển</Typography.Text>
          <Flex vertical>
            <ul>
              <li>
                <Typography.Paragraph>
                  Ứng viên nộp hồ sơ trực tuyến bằng cách gửi mail:{' '}
                  <strong className='text-blue'>{contact.email}</strong>
                </Typography.Paragraph>
              </li>
              <li>
                <Typography.Paragraph>
                  Liên hệ số điện thoại: <strong className='text-blue'>{contact.phone}</strong>
                </Typography.Paragraph>
              </li>
            </ul>
          </Flex>
        </Flex>
      </Section>
    </BaseLayout>
  )
}

export default CareerPostDetail
