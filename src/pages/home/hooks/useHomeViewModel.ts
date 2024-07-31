import { App } from 'antd'
import { useEffect, useState } from 'react'
import HeroBannerAPI from '~/api/services/HeroBannerAPI'
import HomeProductAPI from '~/api/services/HomeProductAPI'
import PartnerAPI from '~/api/services/PartnerAPI'
import PostAPI from '~/api/services/PostAPI'
import define from '~/constants/define'
import useAPIService from '~/hooks/useAPIService'
import { HeroBanner, HomeProduct, Partner, Post } from '~/typing'

export default function useHomeViewModel() {
  const { message } = App.useApp()
  const [loading, setLoading] = useState<boolean>(false)
  const heroBannerService = useAPIService<HeroBanner>(HeroBannerAPI)
  const homeProductService = useAPIService<HomeProduct>(HomeProductAPI)
  const partnerService = useAPIService<Partner>(PartnerAPI)
  const postService = useAPIService<Post>(PostAPI)

  const [heroBanners, setHeroBanners] = useState<HeroBanner[]>([])
  const [homeProducts, setHomeProducts] = useState<HomeProduct[]>([])
  const [partners, setPartners] = useState<Partner[]>([])
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    initialize()
  }, [])

  const initialize = async () => {
    try {
      await heroBannerService.getItemsSync({ paginator: { page: 1, pageSize: -1 } }, setLoading, (res) => {
        if (!res.success) throw new Error(define('dataLoad_failed'))
        setHeroBanners(res.data as HeroBanner[])
      })
      await homeProductService.getItemsSync({ paginator: { page: 1, pageSize: -1 } }, setLoading, (res) => {
        if (!res.success) throw new Error(define('dataLoad_failed'))
        setHomeProducts(res.data as HomeProduct[])
      })
      await partnerService.getItemsSync({ paginator: { page: 1, pageSize: -1 } }, setLoading, (res) => {
        if (!res.success) throw new Error(define('dataLoad_failed'))
        setPartners(res.data as Partner[])
      })
      await postService.getItemsSync({ paginator: { page: 1, pageSize: -1 } }, setLoading, (res) => {
        if (!res.success) throw new Error(define('dataLoad_failed'))
        setPosts(res.data as Post[])
      })
    } catch (error: any) {
      message.error(error.message)
    }
  }

  return {
    loading,
    heroBanners,
    homeProducts,
    partners,
    posts
  }
}
