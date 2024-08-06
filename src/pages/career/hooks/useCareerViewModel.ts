import { App } from 'antd'
import { useEffect, useState } from 'react'
import JobSectorAPI from '~/api/services/JobSectorAPI'
import RecruitmentPostAPI from '~/api/services/RecruitmentPostAPI'
import useTable from '~/components/hooks/useTable'
import useAPIService from '~/hooks/useAPIService'
import { JobSector, RecruitmentPost } from '~/typing'
import { RecruitmentPostTableDataType } from '../type'

export function useCareerViewModel() {
  const { message } = App.useApp()
  const table = useTable<RecruitmentPostTableDataType>([])
  const [loading, setLoading] = useState<boolean>(false)

  const jobSectorService = useAPIService<JobSector>(JobSectorAPI)
  const recruitmentService = useAPIService<RecruitmentPost>(RecruitmentPostAPI)

  const [jobSectors, setJobSectors] = useState<JobSector[]>([])
  const [recruitments, setRecruitments] = useState<RecruitmentPost[]>([])

  useEffect(() => {
    initialize()
  }, [])

  const mappedData = (recruitments: RecruitmentPost[]) => {
    table.setDataSource(
      recruitments.map((item) => {
        return { ...item, key: `${item.id}` }
      })
    )
  }

  const initialize = async () => {
    try {
      await jobSectorService.getItemsSync({ paginator: { page: 1, pageSize: -1 } }, setLoading, (res) => {
        const data = res.data as JobSector[]
        data.push({ id: -1, title: 'Tất cả' })
        setJobSectors(data)
      })

      await recruitmentService.getItemsSync({ paginator: { page: 1, pageSize: -1 } }, setLoading, (res) => {
        const data = res.data as RecruitmentPost[]
        setRecruitments(data)
        mappedData(data)
      })
    } catch (error: any) {
      message.error(error.message)
    }
  }

  const handleJobSectorChange = (value: number) => {
    if (value === -1) {
      mappedData(recruitments)
    } else {
      table.setDataSource((prevDataSource) => {
        return prevDataSource.filter((item) => item.jobSectorID === value)
      })
    }
  }

  return {
    loading,
    table,
    jobSectors,
    recruitments,
    handleJobSectorChange
  }
}
