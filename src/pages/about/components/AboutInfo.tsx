import { Flex, Row, Typography } from 'antd'
import { About2 } from '~/assets'
import { ArcheryIcon, MissionIcon, VisionIcon } from '~/assets/icons'
import AboutCard from './AboutCard'

const AboutInfo = () => {
  return (
    <>
      <Flex vertical gap={40}>
        <Flex className='flex-col items-start justify-center md:flex-row' gap={40}>
          <Flex justify='center' align='center' className='h-fit w-full'>
            <img
              src={About2}
              alt='about-image'
              className='h-[272px] w-[272px] object-contain md:h-[272px] md:w-[272px] lg:h-[272px] lg:w-[272px] xl:h-[372px] xl:w-[372px]'
            />
          </Flex>
          <Flex vertical>
            <Typography.Paragraph className='text-base leading-10'>
              <strong>Công ty TNHH MTV May Mặc Phụng Nguyên</strong> được thành lập vào tháng 4 năm 2016, với ngành nghề
              kinh doanh chuyên gia công hàng may mặc xuất khẩu, thị trường chính là Mỹ và Nga. Hiện nay, số lượng cán
              bộ, công nhân viên tại Công ty là 700 người. Trong số đó có 3 đảng viên. Trong những năm qua, Công ty luôn
              đoàn kết, nỗ lực phát triển sản xuất, tạo nhiều việc làm cho người lao động, đóng góp tích cực vào công
              tác an sinh xã hội tại địa phương.
            </Typography.Paragraph>
            <Row gutter={[20, 20]} className='hidden xl:flex'>
              <AboutCard
                icon={ArcheryIcon}
                title='Mục tiêu'
                desc='Tạo ra một môi trường làm việc an toàn về mọi mặt và mang lại hiệu quả cao.Đáp ứng mọi nhu cầu của khách hàng bằng tất cả các giải pháp.'
              />
              <AboutCard
                icon={VisionIcon}
                title='Tầm nhìn'
                desc='Bằng khát khao và làm việc sáng tạo từng ngày, chúng tôi tạo ra những sản phẩm có giá trị vượt trội gắn liền với chiến lược phát triển bền vững.'
              />
              <AboutCard
                icon={MissionIcon}
                title='Mục tiêu'
                desc='Nâng cao tiềm lực kinh tế và chất lượng cuộc sống cộng đồng thông qua việc cung ứng các sản phẩm dịch vụ có chất lượng vượt trội.'
              />
            </Row>
          </Flex>
        </Flex>
        <Row gutter={[20, 20]} className='flex xl:hidden'>
          <AboutCard
            icon={ArcheryIcon}
            title='Mục tiêu'
            desc='Tạo ra một môi trường làm việc an toàn về mọi mặt và mang lại hiệu quả cao.Đáp ứng mọi nhu cầu của khách hàng bằng tất cả các giải pháp.'
          />
          <AboutCard
            icon={VisionIcon}
            title='Tầm nhìn'
            desc='Bằng khát khao và làm việc sáng tạo từng ngày, chúng tôi tạo ra những sản phẩm có giá trị vượt trội gắn liền với chiến lược phát triển bền vững.'
          />
          <AboutCard
            icon={MissionIcon}
            title='Mục tiêu'
            desc='Nâng cao tiềm lực kinh tế và chất lượng cuộc sống cộng đồng thông qua việc cung ứng các sản phẩm dịch vụ có chất lượng vượt trội.'
          />
        </Row>
      </Flex>
    </>
  )
}

export default AboutInfo
