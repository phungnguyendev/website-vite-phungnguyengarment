import { useEffect, useState } from 'react'
import { defaultRequestBody } from '~/api/client'
import HeroBannerAPI from '~/api/services/HeroBannerAPI'
import useTitle from '~/components/hooks/useTitle'
import BaseLayout from '~/components/layout/BaseLayout'
import useAPIService from '~/hooks/useAPIService'
import { HeroBanner } from '~/typing'
import BannerCarousel from './components/BannerCarousel'
import Specification from './components/Specification'

const HomePage: React.FC = () => {
  useTitle('Phung Nguyen - Home')
  const [loading, setLoading] = useState<boolean>(false)
  const heroBannerService = useAPIService<HeroBanner>(HeroBannerAPI)
  const [heroBanners, setHeroBanners] = useState<HeroBanner[]>([])

  const initialize = async () => {
    await heroBannerService.getListItems(defaultRequestBody, setLoading, (meta) => {
      if (!meta?.success) throw new Error(`${meta?.message}`)
      setHeroBanners(meta.data as HeroBanner[])
    })
  }

  useEffect(() => {
    initialize()
  }, [])

  return (
    <>
      <BaseLayout>
        <BannerCarousel items={heroBanners} />
        <Specification />
      </BaseLayout>
    </>
  )
}

export default HomePage
