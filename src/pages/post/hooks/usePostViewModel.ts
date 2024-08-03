import { App } from 'antd'
import { useEffect, useState } from 'react'
import PostAPI from '~/api/services/PostAPI'
import define from '~/constants/define'
import useAPIService from '~/hooks/useAPIService'
import { Post } from '~/typing'
import dayjs from '~/utils/date-formatter'

export default function usePostViewModel() {
  const { message } = App.useApp()
  const [loading, setLoading] = useState<boolean>(false)
  const postService = useAPIService<Post>(PostAPI)

  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    initialize()
  }, [])

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

  /**
   * Bài post mới nhất
   * @param posts
   * @returns Post
   */
  function latestPost(posts: Post[]): Post {
    let latestPost = posts[0]
    posts.forEach((post) => {
      if (dayjs(post.publishedAt).isAfter(dayjs(latestPost.publishedAt))) {
        latestPost = post
      }
    })

    return latestPost
  }

  /**
   * Danh sách các bài post mới nhất trong vòng 3 ngày trở lại đây
   * @param posts
   * @returns Post[]
   */
  function latestPosts(posts: Post[]): Post[] {
    const now = dayjs()
    const threeDaysAgo = now.subtract(3, 'day')
    const recentPosts = posts.filter((post) => {
      return dayjs(post.publishedAt).isAfter(threeDaysAgo)
    })

    // Nếu không có bài viết nào trong 3 ngày qua, lấy 3 bài viết mới nhất
    if (recentPosts.length === 0) {
      return posts.sort((a, b) => dayjs(b.publishedAt).diff(dayjs(a.publishedAt))).slice(0, 3)
    }

    return recentPosts
  }

  /**
   * Danh sách các bài post mới nhất trong vòng 7 ngày trở lại đây
   * @param posts
   * @returns Post[]
   */
  function recentPosts(posts: Post[]): Post[] {
    const now = dayjs()
    const sevenDaysAgo = now.subtract(7, 'day')
    const recentPosts = posts.filter((post) => {
      return dayjs(post.publishedAt).isAfter(sevenDaysAgo)
    })

    return recentPosts
  }

  /**
   * Danh sách các bài post cũ hơn
   * @param posts
   * @returns Post[]
   */
  function olderPosts(posts: Post[]): Post[] {
    const now = dayjs()
    const sevenDaysAgo = now.subtract(7, 'day')
    const olderPosts = posts.filter((post) => {
      return dayjs(post.publishedAt).isBefore(sevenDaysAgo)
    })

    return olderPosts
  }

  return {
    loading,
    posts,
    recentPosts,
    latestPosts,
    latestPost,
    olderPosts
  }
}
