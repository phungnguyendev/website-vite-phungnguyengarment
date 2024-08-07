import { App } from 'antd'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import RecruitmentPostAPI from '~/api/services/RecruitmentPostAPI'
import useAPIService from '~/hooks/useAPIService'
import { RecruitmentPost } from '~/typing'

export function useCareerDetailViewModel() {
  const params = useParams()
  const { message } = App.useApp()
  const [loading, setLoading] = useState<boolean>(false)

  const recruitmentService = useAPIService<RecruitmentPost>(RecruitmentPostAPI)

  const [recruitmentPost, setRecruitmentPost] = useState<RecruitmentPost>({})

  useEffect(() => {
    initialize()
  }, [])

  const initialize = async () => {
    try {
      await recruitmentService.getItemBySync(
        { field: 'routeTitle', key: `${params.routeTitle}` },
        setLoading,
        (res) => {
          const data = res.data as RecruitmentPost
          setRecruitmentPost(data)
        }
      )
    } catch (error: any) {
      message.error(error.message)
    } finally {
      setLoading(false)
    }
  }

  return {
    loading,
    recruitmentPost
  }
}
