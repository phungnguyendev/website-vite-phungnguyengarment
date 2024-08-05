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
    breadcrumb: 'Home',
    component: HomePage
  },
  { key: '1', name: 'Giới thiệu', path: '/about', breadcrumb: 'About', component: AboutPage },
  { key: '2', name: 'Dịch vụ', path: '/services', breadcrumb: 'Service', component: ServicePage },
  { key: '3', name: 'Sản phẩm', path: '/products', breadcrumb: 'Products', component: ProductPage },
  {
    key: '4',
    name: 'Tin tức & Sự kiện',
    path: '/posts',
    breadcrumb: 'News',
    component: PostPage
  },
  {
    key: '5',
    name: 'Tuyển dụng',
    path: '/career',
    breadcrumb: 'Career',
    component: CareerPage
  }
]

export default routes
