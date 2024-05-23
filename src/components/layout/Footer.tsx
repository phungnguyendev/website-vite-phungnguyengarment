import { Button, Flex, Form, Input, Typography } from 'antd'
import {
  Dribbble,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  PhoneCall,
  Send,
  SendHorizontal,
  Youtube
} from 'lucide-react'
import React, { HTMLAttributes } from 'react'
import { Link, LinkProps } from 'react-router-dom'
import { Logo } from '~/assets'
import { routes } from '~/types/routes'
import { cn } from '~/utils/helpers'

interface FooterProps extends React.HTMLAttributes<HTMLElement> {}

const { Text, Paragraph } = Typography

interface SocialItemProps extends LinkProps {
  icon: React.ReactNode
}

interface ContactItemProps extends HTMLAttributes<HTMLDivElement> {
  icon: React.ReactNode
  text: string
}

function Footer({ ...props }: FooterProps) {
  const SocialItem: React.FC<SocialItemProps> = ({ icon, ...props }) => {
    return (
      <>
        <Link {...props} to={props.to}>
          <Flex className='h-fit rounded-full bg-white bg-opacity-10 p-2 text-muted-foreground transition-colors duration-300 hover:bg-opacity-25'>
            {icon}
          </Flex>
        </Link>
      </>
    )
  }

  const ContactItem: React.FC<ContactItemProps> = ({ icon, text, ...props }) => {
    return (
      <Flex gap={10} className={props.className}>
        {icon}
        <Typography.Text className='text-white'>{text}</Typography.Text>
      </Flex>
    )
  }

  const Header = () => {
    return (
      <Flex vertical className='relative h-fit w-full'>
        <Flex
          className={cn(
            'relative top-10 z-10 h-fit w-auto',
            'bg-[url("~/assets/images/a2.png")] bg-cover bg-center',
            'before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:z-0 before:bg-black before:opacity-[50%] before:content-[""]'
          )}
          vertical
        >
          <Flex justify='space-between' align='center' className='z-10 h-full w-full'>
            <Flex
              className='h-full w-full flex-col p-5 sm:p-10 lg:flex-row'
              gap={40}
              justify='space-between'
              align='center'
            >
              <Flex vertical gap={10} justify='end' className='h-fit w-full lg:w-1/2'>
                <Text className='font-roboto-flex text-2xl font-bold text-white'>
                  Đừng ngần ngại liên hệ với chúng tôi nếu bạn có bất kì câu hỏi nào
                </Text>
                <Paragraph className='text-sm text-white'>
                  Đừng ngần ngại liên hệ với chúng tôi nếu bạn có bất kỳ câu hỏi kỳ lạ nào, chúng tôi sẽ trả lời trong
                  thời gian sớm nhất!
                </Paragraph>
              </Flex>
              <Flex className='h-fit w-full lg:w-1/2' justify='center' align='end'>
                <Flex vertical className='w-full text-white'>
                  <Flex className='w-full flex-col sm:flex-row' gap={20} align='start' justify='center'>
                    <Flex gap={10}>
                      <PhoneCall size={24} className='text-secondPrimary' />
                      <Flex vertical>
                        <Typography.Text className='font-bold text-white'>Phone</Typography.Text>
                        <Typography.Paragraph copyable className='text-white'>
                          (+84) 949 071 286
                        </Typography.Paragraph>
                      </Flex>
                    </Flex>
                    <Flex gap={10}>
                      <Mail size={24} className='text-secondPrimary' />
                      <Flex vertical>
                        <Typography.Text className='font-bold text-white'>Email</Typography.Text>
                        <Typography.Paragraph copyable className='text-white'>
                          info@phungnguyengarment.vn
                        </Typography.Paragraph>
                      </Flex>
                    </Flex>
                  </Flex>
                  <Flex justify='center'>
                    <Button type='primary' icon={<Send />} iconPosition='end' className='flex items-center'>
                      Liên hệ
                    </Button>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    )
  }

  const Footer = () => {
    return (
      <Flex vertical className='relative h-fit w-full'>
        <Flex
          className={cn(
            'relative top-10 z-10 mx-5 h-fit w-auto rounded-lg sm:mx-10',
            'bg-[url("~/assets/images/a6.jpg")] bg-cover bg-center',
            'before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:z-0 before:rounded-lg before:bg-black before:opacity-[50%] before:content-[""]'
          )}
          vertical
        >
          <Flex justify='space-between' align='center' className='z-10 h-full w-full'>
            <Flex
              className='h-full w-full flex-col p-5 sm:p-10 lg:flex-row'
              gap={40}
              justify='space-between'
              align='center'
            >
              <Flex vertical gap={20} justify='end' className='h-fit w-full lg:w-1/2'>
                <Text className='font-roboto-flex text-2xl font-bold text-white'>Gửi thư cho chúng tôi</Text>
                <Paragraph className='text-sm text-white'>
                  Nếu bạn đang có thắc mắc hoặc câu hỏi về các dịch vụ hoặc sản phẩm may mặc của chúng tôi, hãy để lại
                  email, chúng tôi sẽ cung cấp thông tin vào hộp thư cho bạn!
                </Paragraph>
              </Flex>
              <Flex className='h-fit w-full lg:w-1/2' justify='center' align='end'>
                <Form className='m-0 h-fit w-full p-0'>
                  <Flex gap={20} className='w-full flex-col items-center sm:flex-row'>
                    <Form.Item className='m-0 w-full p-0'>
                      <Input
                        variant='borderless'
                        className='h-10 w-full bg-white bg-opacity-[35%] text-white backdrop-blur-sm placeholder:text-grey'
                        placeholder='Enter your mail..'
                      />
                    </Form.Item>
                    <Form.Item className='m-0 p-0'>
                      <Button
                        type='primary'
                        size='large'
                        className='flex items-center rounded-md'
                        iconPosition='end'
                        icon={<SendHorizontal size={20} />}
                        htmlType='submit'
                      >
                        Send
                      </Button>
                    </Form.Item>
                  </Flex>
                </Form>
              </Flex>
            </Flex>
          </Flex>
        </Flex>

        <Flex className='relative z-0 bg-dark p-10'>
          <Flex className='mt-10 w-full flex-col-reverse lg:flex-row' gap={40}>
            <Flex className='relative lg:w-1/2' vertical>
              <Flex vertical gap={10} justify='space-between' align='start' className='w-full lg:w-1/2'>
                <Flex justify='center' align='center' gap={10}>
                  <img src={Logo} className='h-[26px] w-[26px] object-contain' />
                  <Text className='text-2xl font-black uppercase text-white'>PHUNG NGUYEN GARMENT</Text>
                </Flex>
                <Paragraph className='text-white'>
                  Copyright © 2020 PHUNG NGUYEN GAR CO.,LTD. <br /> All rights reserved
                </Paragraph>
                <Flex gap={10}>
                  <SocialItem to='#' icon={<Facebook size={24} />} />
                  <SocialItem to='#' icon={<Instagram size={24} />} />
                  <SocialItem to='#' icon={<Dribbble size={24} />} />
                  <SocialItem to='#' icon={<Youtube size={24} />} />
                </Flex>
              </Flex>
            </Flex>
            <Flex className='w-full lg:w-1/2'>
              <Flex className='w-full flex-col md:flex-row' gap={40}>
                <Flex vertical gap={20} className='w-full items-start justify-center md:w-1/2'>
                  <Typography.Text className='text-2xl font-bold text-white'>Danh mục</Typography.Text>
                  <Flex vertical gap={10}>
                    {routes.map((item, index) => {
                      return (
                        <Link key={index} to={item.path}>
                          <Typography.Text className='text-white'>{item.name}</Typography.Text>
                        </Link>
                      )
                    })}
                  </Flex>
                </Flex>
                <Flex vertical gap={20} className='w-full md:w-1/2'>
                  <Typography.Text className='text-2xl font-bold text-white'>Liên hệ</Typography.Text>
                  <Flex vertical gap={10} className='text-white'>
                    <ContactItem
                      icon={<MapPin className='flex flex-shrink-0' size={24} />}
                      text='QL 30, Ấp Trung, Xã Tân Thạnh, Huyện Thanh Bình, Tỉnh Đồng Tháp, Việt Nam (Chi Nhánh Phụng Nguyên)'
                    />
                    <ContactItem
                      icon={<MapPin className='flex flex-shrink-0' size={24} />}
                      text='Số 90, Lộ Hoà Tây, Xã Hoà An, TP. Cao Lãnh, Tỉnh Đồng Tháp, Việt Nam (Chi nhánh Phụng Tình)'
                    />
                    <ContactItem icon={<Phone size={24} />} text='(+84) 949 071 286' />
                    <ContactItem icon={<Mail size={24} />} text='info@phungnguyengarment.vn' />
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    )
  }

  return (
    <footer {...props} className='relative pt-10'>
      <Flex vertical gap={40}>
        <Header />
        <Footer />
      </Flex>
    </footer>
  )
}

export default Footer
