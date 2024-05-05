import { lazy } from 'react'

const HomePage = lazy(() => import('~/pages/home/HomePage'))
const AboutPage = lazy(() => import('~/pages/about/AboutPage'))
const ServicePage = lazy(() => import('~/pages/service/ServicePage'))
const ProductPage = lazy(() => import('~/pages/product/ProductPage'))
const NewsEventPage = lazy(() => import('~/pages/newsevent/NewsEventPage'))
const CareerPage = lazy(() => import('~/pages/career/CareerPage'))

export interface RouteType {
  name: string
  path: string
  breadcrumb: string
  component: React.LazyExoticComponent<() => JSX.Element> | React.ReactNode | any
}

export const routes: RouteType[] = [
  {
    name: 'Trang chủ',
    path: '/',
    breadcrumb: 'Home',
    component: HomePage
  },
  { name: 'Giới thiệu', path: '/about', breadcrumb: 'About', component: AboutPage },
  { name: 'Dịch vụ', path: '/services', breadcrumb: 'Service', component: ServicePage },
  { name: 'Sản phẩm', path: '/products', breadcrumb: 'Products', component: ProductPage },
  {
    name: 'Tin tức & Sự kiện',
    path: '/news',
    breadcrumb: 'News',
    component: NewsEventPage
  },
  {
    name: 'Tuyển dụng',
    path: '/career',
    breadcrumb: 'Career',
    component: CareerPage
  }
]
