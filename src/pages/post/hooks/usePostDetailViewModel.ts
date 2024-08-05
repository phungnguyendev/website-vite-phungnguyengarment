import { App } from 'antd'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PostAPI from '~/api/services/PostAPI'
import define from '~/constants/define'
import useAPIService from '~/hooks/useAPIService'
import { Post } from '~/typing'

export default function usePostDetailViewModel() {
  const params = useParams()

  const { message } = App.useApp()
  const postService = useAPIService<Post>(PostAPI)
  const [loading, setLoading] = useState<boolean>(false)
  const [post, setPost] = useState<Post | null>(null)

  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    initialize()
  }, [])

  useEffect(() => {
    loadData()
  }, [params.postID])

  const initialize = async () => {
    try {
      await postService.getItemsSync({ paginator: { page: 1, pageSize: -1 } }, setLoading, (res) => {
        if (!res.success) throw new Error(define('dataLoad_failed'))
        setPosts(res.data as Post[])
      })
    } catch (error: any) {
      message.error(error.message)
    }
  }

  const loadData = async () => {
    try {
      const postID = params.postID
      if (postID) {
        await postService.getItemByPkSync(Number(postID), setLoading, (res) => {
          if (!res.success) throw new Error(define('dataLoad_failed'))
          setPost(res.data as Post)
        })
      }
    } catch (error: any) {
      message.error(error.message)
    } finally {
      setLoading(false)
    }
  }

  return {
    loading,
    post,
    posts
  }
}
