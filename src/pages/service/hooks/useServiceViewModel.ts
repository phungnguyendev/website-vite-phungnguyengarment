import { App } from 'antd'
import { useEffect, useState } from 'react'
import ProjectAPI from '~/api/services/ProjectAPI'
import define from '~/constants/define'
import useAPIService from '~/hooks/useAPIService'
import { Project } from '~/typing'

export default function useServiceViewModel() {
  const { message } = App.useApp()
  const [loading, setLoading] = useState<boolean>(false)
  const projectService = useAPIService<Project>(ProjectAPI)

  const [projects, setProjects] = useState<Project[]>([])

  useEffect(() => {
    initialize()
  }, [])

  const initialize = async () => {
    try {
      await projectService.getItemsSync({ paginator: { page: 1, pageSize: -1 } }, setLoading, (res) => {
        if (!res.success) throw new Error(define('dataLoad_failed'))
        setProjects(res.data as Project[])
      })
    } catch (error: any) {
      message.error(error.message)
    }
  }

  return {
    loading,
    projects
  }
}
