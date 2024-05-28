import { Col, Flex, Row, Typography } from 'antd'
import { useEffect, useState } from 'react'
// import Skeleton from 'react-loading-skeleton'
import { defaultRequestBody } from '~/api/client'
import PrizeAPI from '~/api/services/PrizeAPI'
import { NoImage, PhungNguyenCertification, a1, a10, a11, a2, a3, a8, a9 } from '~/assets'
import useTitle from '~/components/hooks/useTitle'
import BaseLayout from '~/components/layout/BaseLayout'
import Head from '~/components/sky-ui/Head'
import Section from '~/components/sky-ui/Section/Section'
import useAPIService from '~/hooks/useAPIService'
import { Prize } from '~/typing'
import AboutInfo from './components/AboutInfo'
import AboutPrizeSlider from './components/AboutPrizeSlider'
import AboutProcedure from './components/AboutProcedure'
import AboutQuantity from './components/AboutQuantity'

const AboutPage = () => {
  useTitle('Phung Nguyen - About')

  const [, setLoading] = useState<boolean>(false)
  const [prizes, setPrizes] = useState<Prize[]>([])

  const prizeService = useAPIService<Prize>(PrizeAPI)

  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    try {
      await prizeService.getListItems(
        {
          ...defaultRequestBody,
          paginator: {
            page: 1,
            pageSize: -1
          }
        },
        setLoading,
        (meta) => {
          if (meta?.success) {
            setPrizes(meta.data as Prize[])
          }
        }
      )
    } catch (error) {
      console.log(`${error}`)
    }
  }

  return (
    <>
      <BaseLayout header={<Head imageURL={a1} title='About PHUNG NGUYEN GARMENT' />}>
        <Section
          titleProps={{
            title: 'Về Phụng Nguyên'
          }}
        >
          <AboutInfo />
        </Section>
        <Section spacing={false}>
          <Flex className='relative h-fit w-full bg-[url("~/assets/images/a5.jpg")] bg-cover bg-center before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:bg-black before:bg-opacity-[50%] before:content-[""]'>
            <Row className='z-10 h-full w-full px-10 py-20' gutter={[40, 40]}>
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
            position: 'center',
            size: 'large'
          }}
          descriptionProps={{
            title:
              'Quy trình sản xuất ngành may mặc bài bản là điều kiện cần thiết để doanh nghiệp có thể mang lại những sản phẩm chất lượng, đúng yêu cầu và tiêu chuẩn đã đề ra trong hợp đồng.',
            position: 'center'
          }}
          className='relative before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:z-0 before:bg-[url("~/assets/images/bg-2.png")] before:opacity-[15%] before:content-[""]'
        >
          <AboutProcedure
            noNumber='1'
            imageURL={a3}
            direction='left'
            title='Chuẩn bị nguyên liệu'
            desc='Để quá trình sản xuất sản phẩm diễn ra một cách linh hoạt, thuận lợi và đảm bảo chất lượng, khâu chuẩn bị là điều cực kỳ quan trọng mà bất cứ doanh nghiệp may nào cũng cần có. Sau khi nhận được lệnh sản xuất, mỗi bộ phận trong doanh nghiệp sẽ có những sự chuẩn bị khác nhau. Trong đó, một số công việc quan trọng có thể kể đến như: chuẩn bị vải, kiểm tra vải, kiểm tra khả năng hoạt động của máy móc, chuẩn bị bản thiết kế,…'
          />
          <AboutProcedure
            noNumber='2'
            imageURL={a2}
            direction='right'
            title='Thiết kế rập (Lên sơ đồ)'
            desc='Đây là bước quan trọng trong quy trình sản xuất ngành may mặc nhằm tạo ra bản gốc cho sản phẩm. Lên sơ đồ là việc sắp xếp các chi tiết của sản phẩm lên bề mặt vải sao cho có thể tiết kiệm vải nhất có thể.Công đoạn này giúp nhà sản xuất hoạch định được số lượng vải cần thiết cho đơn hàng. Vì vậy, chúng yêu cầu sự chính xác, người thực hiện cần nắm rõ mẫu thiết kế, khổ vải,… từ đó đưa ra quyết định cần số lượng vải như thế nào, trải vải bao nhiêu lớp,…Hiện nay, các phần mềm thiết kế rập đang dần thay thế hoàn toàn phương pháp rập tay trước đây. Giúp giai đoạn này trở nên đơn giản, chính xác, tiết kiệm thời gian và công sức vượt trội.'
          />
          <AboutProcedure
            noNumber='3'
            imageURL={NoImage}
            direction='left'
            title='trải vải, cắt tạo bán thành phẩm'
            desc='Sau khi đã thiết kế rập, việc tiếp theo là trải vải đúng với sơ đồ. Các xưởng may lớn hiện nay họ có hệ thống máy nâng vải, máy trải vải, bàn trải vải hiện đại, được thực hiện tự động 100%. Ngược lại, với các cơ sở sản xuất nhỏ, việc trải vải cần ít nhất 2 nhân công thực hiện bằng phương pháp thủ công.

            Tiếp đến, là giai đoạn cắt vải. Công đoạn này yêu cầu người thợ phải có tay nghề cao, tập trung tạo ra những mảnh vải hoàn hảo nhất. Để hạn chế lỗi, không phụ thuộc vào con người, tiết kiệm thời gian, công sức cũng như tiết kiệm vải hiệu quả, nhiều doanh nghiệp đã thay thế phương pháp cắt thủ công hoặc các loại máy cắt vải năng suất thấp bằng các loại máy cắt vải hoàn toàn tự động.Đặc biệt, sau khi hoàn thiện công đoạn cắt, cần kiểm tra lại số lượng và chất lượng bán thành phẩm. Đảm bảo không bị lỗi, đúng tiêu chuẩn, kích thước nhằm thực hiện suôn sẻ những bước sau.'
          />
          <AboutProcedure
            noNumber='4'
            imageURL={a8}
            direction='right'
            title='May thành phẩm'
            desc='Tai bước này, thợ may sẽ sử dụng những mảnh vải đã cắt và ráp chúng lại với nhau để tạo thành sản phẩm hoàn chỉnh. Để quy trình sản xuất ngành may mặc diễn ra đúng kế hoạch, người thợ cần tuân thủ nghiêm ngặt về mẫu mã đúng với thiết kế ban đầu.
            Công đoạn may thường được phân chia theo tổ. Trong đó, mỗi tổ sẽ đảm nhiệm vai trò riêng như phần cổ, phần thân, phần tay,… Các doanh nghiệp may lớn hiện nay ưu tiên sử dụng hệ thống chuyền treo tự động để đẩy nhanh tiến độ công việc cũng như quản lý tốt quy trình sản xuất.'
          />
          <AboutProcedure
            noNumber='5'
            imageURL={a9}
            direction='left'
            title='Hoàn thiện sản phẩm'
            desc='Thành phẩm sau khi may cần được làm sạch và là ủi để tăng độ thẩm mỹ. Việc ủi sản phẩm ở doanh nghiệp may không hề đơn giản mà cần đảm bảo nhiệt độ thích hợp cho từng loại vải, đường ly sắc nét. Hơn nữa, với những đơn hàng lớn, phương pháp ủi thủ công không còn được sử dụng mà thay vào đó là hệ thống hầm ủi tự động nhằm tối ưu thời gian, năng suất cũng như chất lượng và thẩm mỹ của sản phẩm.'
          />
          <AboutProcedure
            noNumber='6'
            imageURL={a10}
            direction='right'
            title='Kiểm tra chất lượng'
            desc='Đây là bước đánh giá lại một lần nữa chất lượng của sản phẩm trong quy trình sản xuất ngành may mặc. Cần xem lại thành phẩm đã đảm bảo yêu cầu hay chưa, có lỗi hay không và bắt buộc phải giống với thiết kế ban đầu.
            Quản lý chất lượng ngành may không chỉ đánh giá được chất lượng sản phẩm mà còn là công đoạn quan trọng nhằm đánh giá khả năng sản xuất, tay nghề nhân công và hạn chế rủi ro cho doanh nghiệp.'
          />
          <AboutProcedure
            noNumber='7'
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
            title: 'Những Giải Thưởng Đạt Được'
          }}
        >
          <AboutPrizeSlider items={prizes} />
        </Section>
      </BaseLayout>
    </>
  )
}

export default AboutPage
