import { App } from 'antd'
import { useEffect, useState } from 'react'
import CategoryAPI from '~/api/services/CategoryAPI'
import ProductAPI from '~/api/services/ProductAPI'
import define from '~/constants/define'
import useAPIService from '~/hooks/useAPIService'
import { Category, Product } from '~/typing'

export default function useProductViewModel() {
  const { message } = App.useApp()

  const categoryService = useAPIService<Category>(CategoryAPI)
  const productService = useAPIService<Product>(ProductAPI)

  const [loading, setLoading] = useState<boolean>(false)
  const [products, setProducts] = useState<Product[]>([])
  const [categories, setCategories] = useState<Category[]>([])

  useEffect(() => {
    initialize()
  }, [])

  const initialize = async () => {
    try {
      await categoryService.getItemsSync({ paginator: { page: 1, pageSize: -1 } }, setLoading, (res) => {
        if (!res.success) throw new Error(define('dataLoad_failed'))
        setCategories(res.data as Category[])
      })
      await productService.getItemsSync({ paginator: { page: 1, pageSize: -1 } }, setLoading, (res) => {
        if (!res.success) throw new Error(define('dataLoad_failed'))
        setProducts(res.data as Product[])
      })
    } catch (error: any) {
      message.error(error.message)
    } finally {
      setLoading(false)
    }
  }

  const matchCategory = (products: Product[], categoryID?: number): Product[] => {
    return products.filter((item) => item.categoryID === categoryID)
  }

  return { loading, products, categories, matchCategory }
}
