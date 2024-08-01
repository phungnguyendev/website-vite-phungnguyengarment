import { Col, Flex, Row, Typography } from 'antd'
import { About, NoImage, PhungNguyenCertification, a1, a10, a11, a2, a3, a8, a9 } from '~/assets'
import { ArcheryIcon, MissionIcon, VisionIcon } from '~/assets/icons'
import useTitle from '~/components/hooks/useTitle'
import BaseLayout from '~/components/layout/BaseLayout'
import Head from '~/components/sky-ui/Head'
import Section from '~/components/sky-ui/Section/Section'
import { imageValidatorDisplay } from '~/utils/helpers'
import AboutCard from './components/AboutCard'
import AboutPrizeSlider from './components/AboutPrizeSlider'
import AboutProcedure from './components/AboutProcedure'
import AboutQuantity from './components/AboutQuantity'
import useAboutViewModel from './hooks/useAboutViewModel'

const AboutPage = () => {
  useTitle('Giới thiệu')
  const viewModel = useAboutViewModel()

  return (
    <>
      <BaseLayout header={<Head imageURL={a1} title='About PHUNG NGUYEN GARMENT' />}>
        <Section
          titleProps={{
            title: 'Về chúng tôi'
          }}
        >
          <Flex vertical gap={40}>
            <Flex className='flex-col items-start justify-center md:flex-row' gap={40}>
              <Flex justify='center' align='center' className='h-fit w-full md:m-5 md:w-fit'>
                <img
                  src={imageValidatorDisplay(About)}
                  alt='about-image'
                  className='h-[350px] w-full object-contain md:h-[350px] md:w-[350px] xl:h-[372px] xl:w-[372px]'
                />
              </Flex>
              <Flex vertical className='w-full'>
                <Typography.Paragraph className='text-base leading-10'>
                  <strong>Công ty TNHH MTV May Mặc Phụng Nguyên</strong> được thành lập vào tháng 4 năm 2016, với ngành
                  nghề kinh doanh chuyên gia công hàng may mặc xuất khẩu, thị trường chính là Mỹ và Nga. Hiện nay, số
                  lượng cán bộ, công nhân viên tại Công ty là 700 người. Trong số đó có 3 đảng viên. Trong những năm
                  qua, Công ty luôn đoàn kết, nỗ lực phát triển sản xuất, tạo nhiều việc làm cho người lao động, đóng
                  góp tích cực vào công tác an sinh xã hội tại địa phương.
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
        </Section>
        <Section spacing={false}>
          <Flex className='relative h-fit w-full bg-[url("~/assets/images/a5.jpg")] bg-cover bg-center before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:bg-black before:bg-opacity-[50%] before:content-[""]'>
            <Row className='z-10 h-full w-full p-10' gutter={[40, 40]}>
              <Col xs={24} xl={6}>
                <Flex justify='center' align='center' className='h-full'>
                  <Typography.Text className='h-fit text-center text-5xl font-bold text-white lg:text-start'>
                    Ngành công nghiệp của chúng tôi về số lượng
                  </Typography.Text>
                </Flex>
              </Col>
              <AboutQuantity title='2000' subTitle='Thiết bị máy móc' />
              <AboutQuantity title='25' subTitle='25 chuyền may / 1.200 công nhân toàn bộ' />
              <AboutQuantity title='800.000' subTitle='Chiếc áo phông / tháng' />
            </Row>
          </Flex>
        </Section>
        <Section
          titleProps={{
            title: 'Quy trình',
            position: 'center'
          }}
          subTitleProps={{
            title: 'Quy Trình Của Chúng Tôi',
            position: 'center'
          }}
          descriptionProps={{
            title:
              'Quy trình sản xuất ngành may mặc bài bản là điều kiện cần thiết để doanh nghiệp có thể mang lại những sản phẩm chất lượng, đúng yêu cầu và tiêu chuẩn đã đề ra trong hợp đồng.',
            position: 'center'
          }}
          className='relative before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:z-0 before:bg-[url("~/assets/images/bg-2.png")] before:opacity-[15%] before:content-[""]'
        >
          <AboutProcedure
            index='1'
            imageURL={a3}
            direction='left'
            title='Chuẩn bị nguyên liệu'
            desc='Để quá trình sản xuất sản phẩm diễn ra một cách linh hoạt, thuận lợi và đảm bảo chất lượng, khâu chuẩn bị là điều cực kỳ quan trọng mà bất cứ doanh nghiệp may nào cũng cần có. Sau khi nhận được lệnh sản xuất, mỗi bộ phận trong doanh nghiệp sẽ có những sự chuẩn bị khác nhau. Trong đó, một số công việc quan trọng có thể kể đến như: chuẩn bị vải, kiểm tra vải, kiểm tra khả năng hoạt động của máy móc, chuẩn bị bản thiết kế,…'
          />
          <AboutProcedure
            index='2'
            imageURL={a2}
            direction='right'
            title='Thiết kế rập (Lên sơ đồ)'
            desc='Đây là bước quan trọng trong quy trình sản xuất ngành may mặc nhằm tạo ra bản gốc cho sản phẩm. Lên sơ đồ là việc sắp xếp các chi tiết của sản phẩm lên bề mặt vải sao cho có thể tiết kiệm vải nhất có thể.Công đoạn này giúp nhà sản xuất hoạch định được số lượng vải cần thiết cho đơn hàng. Vì vậy, chúng yêu cầu sự chính xác, người thực hiện cần nắm rõ mẫu thiết kế, khổ vải,… từ đó đưa ra quyết định cần số lượng vải như thế nào, trải vải bao nhiêu lớp,…Hiện nay, các phần mềm thiết kế rập đang dần thay thế hoàn toàn phương pháp rập tay trước đây. Giúp giai đoạn này trở nên đơn giản, chính xác, tiết kiệm thời gian và công sức vượt trội.'
          />
          <AboutProcedure
            index='3'
            imageURL={NoImage}
            direction='left'
            title='Trải vải, cắt tạo bán thành phẩm'
            desc='Sau khi đã thiết kế rập, việc tiếp theo là trải vải đúng với sơ đồ. Các xưởng may lớn hiện nay họ có hệ thống máy nâng vải, máy trải vải, bàn trải vải hiện đại, được thực hiện tự động 100%. Ngược lại, với các cơ sở sản xuất nhỏ, việc trải vải cần ít nhất 2 nhân công thực hiện bằng phương pháp thủ công.

            Tiếp đến, là giai đoạn cắt vải. Công đoạn này yêu cầu người thợ phải có tay nghề cao, tập trung tạo ra những mảnh vải hoàn hảo nhất. Để hạn chế lỗi, không phụ thuộc vào con người, tiết kiệm thời gian, công sức cũng như tiết kiệm vải hiệu quả, nhiều doanh nghiệp đã thay thế phương pháp cắt thủ công hoặc các loại máy cắt vải năng suất thấp bằng các loại máy cắt vải hoàn toàn tự động.Đặc biệt, sau khi hoàn thiện công đoạn cắt, cần kiểm tra lại số lượng và chất lượng bán thành phẩm. Đảm bảo không bị lỗi, đúng tiêu chuẩn, kích thước nhằm thực hiện suôn sẻ những bước sau.'
          />
          <AboutProcedure
            index='4'
            imageURL={a8}
            direction='right'
            title='May thành phẩm'
            desc='Tai bước này, thợ may sẽ sử dụng những mảnh vải đã cắt và ráp chúng lại với nhau để tạo thành sản phẩm hoàn chỉnh. Để quy trình sản xuất ngành may mặc diễn ra đúng kế hoạch, người thợ cần tuân thủ nghiêm ngặt về mẫu mã đúng với thiết kế ban đầu.
            Công đoạn may thường được phân chia theo tổ. Trong đó, mỗi tổ sẽ đảm nhiệm vai trò riêng như phần cổ, phần thân, phần tay,… Các doanh nghiệp may lớn hiện nay ưu tiên sử dụng hệ thống chuyền treo tự động để đẩy nhanh tiến độ công việc cũng như quản lý tốt quy trình sản xuất.'
          />
          <AboutProcedure
            index='5'
            imageURL={a9}
            direction='left'
            title='Hoàn thiện sản phẩm'
            desc='Thành phẩm sau khi may cần được làm sạch và là ủi để tăng độ thẩm mỹ. Việc ủi sản phẩm ở doanh nghiệp may không hề đơn giản mà cần đảm bảo nhiệt độ thích hợp cho từng loại vải, đường ly sắc nét. Hơn nữa, với những đơn hàng lớn, phương pháp ủi thủ công không còn được sử dụng mà thay vào đó là hệ thống hầm ủi tự động nhằm tối ưu thời gian, năng suất cũng như chất lượng và thẩm mỹ của sản phẩm.'
          />
          <AboutProcedure
            index='6'
            imageURL={a10}
            direction='right'
            title='Kiểm tra chất lượng'
            desc='Đây là bước đánh giá lại một lần nữa chất lượng của sản phẩm trong quy trình sản xuất ngành may mặc. Cần xem lại thành phẩm đã đảm bảo yêu cầu hay chưa, có lỗi hay không và bắt buộc phải giống với thiết kế ban đầu.
            Quản lý chất lượng ngành may không chỉ đánh giá được chất lượng sản phẩm mà còn là công đoạn quan trọng nhằm đánh giá khả năng sản xuất, tay nghề nhân công và hạn chế rủi ro cho doanh nghiệp.'
          />
          <AboutProcedure
            index='7'
            imageURL={a11}
            direction='left'
            title='Đóng thùng, xuất kho'
            desc='Các sản phẩm sau khi được kiểm tra sẽ được phân loại size và đóng thùng để chuẩn bị xuất xưởng. Hiện nay, mọi công đoạn trong quy trình sản xuất ngành may mặc đều có thể trang bị hệ thống máy móc tự động thay thế con người. Tại công đoạn này, các doanh nghiệp lớn đã bắt đầu sử dụng máy phân loại size tự động, hệ thống dựng thùng, dán thùng tự động nhằm tiết kiệm thời gian, công suất và đảm bảo tránh sai sót trước khi giao sản phẩm cho khách hàng.'
          />
        </Section>
        <Section
          titleProps={{
            title: 'Chứng nhận & Thành tích',
            position: 'center'
          }}
        >
          <Flex justify='center'>
            <img
              src={PhungNguyenCertification}
              className='h-full w-full object-cover md:h-2/3 md:w-2/3 lg:h-1/2 lg:w-1/2'
            />
          </Flex>
        </Section>
        <Section
          titleProps={{
            title: 'Những giải thưởng đạt được',
            position: 'center',
            size: 'middle'
          }}
          className='h-full w-full'
        >
          <AboutPrizeSlider items={viewModel.prizes} />
        </Section>
      </BaseLayout>
    </>
  )
}

export default AboutPage
