import { Button, Flex } from 'antd'
import { Link } from 'react-router-dom'
import StopIcon from '~/assets/stop-sign.png'

const ErrorPage = () => {
  return (
    <>
      <Flex justify='center' align='center' className='m-0 min-h-[100vh] bg-white'>
        <Flex gap={60} justify='center' align='center'>
          <Flex vertical justify='center' align='center'>
            <h1 className='text-[48px]'>Error 404!!</h1>
            <p>PAGE NOT FOUND</p>
            <p>It seems you have gone too far with what we have to offer, please return to the home page!.</p>
            <Link to='/'>
              <Button type='primary' size='large' className='w-[320px] rounded-none'>
                BACK TO HOME
              </Button>
            </Link>
          </Flex>
          <Flex className='h-[350px] w-[350px]'>
            <img src={StopIcon} className='h-full w-full object-contain' />
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}

export default ErrorPage
