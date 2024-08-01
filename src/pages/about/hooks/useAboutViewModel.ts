import { App } from 'antd'
import { useEffect, useState } from 'react'
import PrizeAPI from '~/api/services/PrizeAPI'
import define from '~/constants/define'
import useAPIService from '~/hooks/useAPIService'
import { Prize } from '~/typing'

export default function useAboutViewModel() {
  const { message } = App.useApp()

  const prizeService = useAPIService<Prize>(PrizeAPI)

  const [loading, setLoading] = useState<boolean>(false)
  const [prizes, setPrizes] = useState<Prize[]>([])

  useEffect(() => {
    initialize()
  }, [])

  const initialize = async () => {
    try {
      await prizeService.getItemsSync({ paginator: { page: 1, pageSize: -1 } }, setLoading, (res) => {
        if (!res.success) throw new Error(define('dataLoad_failed'))
        setPrizes(res.data as Prize[])
      })
    } catch (error: any) {
      message.error(error.message)
    } finally {
      setLoading(false)
    }
  }

  return { loading, prizes }
}
