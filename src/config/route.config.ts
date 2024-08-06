import { lazy } from 'react'

const HomePage = lazy(() => import('~/pages/home/HomePage'))
const AboutPage = lazy(() => import('~/pages/about/AboutPage'))
const ServicePage = lazy(() => import('~/pages/service/ServicePage'))
const ProductPage = lazy(() => import('~/pages/product/ProductPage'))
const PostPage = lazy(() => import('~/pages/post/PostPage'))
const CareerPage = lazy(() => import('~/pages/career/CareerPage'))

export interface RouteType {
  key: string
  name: string
  path: string
  breadcrumb: string
  component: React.LazyExoticComponent<() => JSX.Element> | React.ReactNode | any
}

export const routes: RouteType[] = [
  {
    key: '0',
    name: 'Trang chủ',
    path: '/',
    breadcrumb: 'Trang chủ',
    component: HomePage
  },
  { key: '1', name: 'Giới thiệu', path: '/gioi-thieu', breadcrumb: 'Giới thiệu', component: AboutPage },
  { key: '2', name: 'Dịch vụ', path: '/dich-vu', breadcrumb: 'Dịch vụ', component: ServicePage },
  { key: '3', name: 'Sản phẩm', path: '/san-pham', breadcrumb: 'Sản phẩm', component: ProductPage },
  {
    key: '4',
    name: 'Tin tức & Sự kiện',
    path: '/tin-tuc-va-su-kien',
    breadcrumb: 'Tin tức & Sự kiện',
    component: PostPage
  },
  {
    key: '5',
    name: 'Tuyển dụng',
    path: '/tuyen-dung',
    breadcrumb: 'Tuyển dụng',
    component: CareerPage
  }
]

export default routes
