import { RequestBodyType, ResponseDataType } from '~/api/client'
import useLocalStorage from './useLocalStorage'

export const defaultRequestBody: RequestBodyType = {
  filter: {
    status: ['active'],
    items: [-1]
  },
  paginator: {
    page: 1,
    pageSize: 10
  },
  search: {
    field: 'id',
    term: ''
  },
  sorting: {
    column: 'orderNumber',
    direction: 'desc'
  }
}

interface RequiredDataType {
  id?: number
}

export type SortedDirection = 'asc' | 'desc'

export interface APIService<T extends RequiredDataType> {
  createItem: (newItem: T, accessToken: string) => Promise<ResponseDataType>
  getItemByPk: (key: number | string, accessToken: string) => Promise<ResponseDataType>
  getItemBy?: (query: { field: string; key: number | string }, accessToken: string) => Promise<ResponseDataType>
  getItems: (params: RequestBodyType, accessToken: string) => Promise<ResponseDataType>
  updateItemByPk: (key: number | string, itemToUpdate: T, accessToken: string) => Promise<ResponseDataType>
  updateItemBy?: (
    query: { field: string; key: number | string },
    itemToUpdate: T,
    accessToken: string
  ) => Promise<ResponseDataType>
  updateItemsBy?: (
    query: { field: string; key: number | string },
    itemsToUpdate: T[],
    accessToken: string
  ) => Promise<ResponseDataType>
  updateItems?: (itemsToUpdate: T[], accessToken: string) => Promise<ResponseDataType>
  deleteItemByPk: (key: number | string, accessToken: string) => Promise<ResponseDataType>
  deleteItemBy?: (query: { field: string; key: number | string }, accessToken: string) => Promise<ResponseDataType>
}

export default function useAPIService<T extends RequiredDataType>(apiService: APIService<T>) {
  const [tokenStored] = useLocalStorage<string>('accessToken', '')
  const accessTokenStored = tokenStored ?? ''

  const createItem = async (itemNew: T, setLoading?: (enable: boolean) => void): Promise<ResponseDataType> => {
    try {
      setLoading?.(true)
      return await apiService.createItem(itemNew, accessTokenStored)
    } catch (err) {
      throw err
    } finally {
      setLoading?.(false)
    }
  }

  const createItemSync = async (
    itemNew: T,
    setLoading?: (enable: boolean) => void,
    onDataSuccess?: (res: ResponseDataType) => void
  ) => {
    try {
      setLoading?.(true)
      await apiService.createItem(itemNew, accessTokenStored).then((res) => {
        if (!res?.success) throw new Error(`${res?.message}`)
        onDataSuccess?.(res)
      })
    } catch (err) {
      throw err
    } finally {
      setLoading?.(false)
    }
  }

  const getItemByPk = async (
    key: number | string,
    setLoading?: (enable: boolean) => void
  ): Promise<ResponseDataType> => {
    try {
      setLoading?.(true)
      return await apiService.getItemByPk(Number(key), accessTokenStored)
    } catch (err) {
      throw err
    } finally {
      setLoading?.(false)
    }
  }

  const getItemByPkSync = async (
    key: number | string,
    setLoading?: (enable: boolean) => void,
    onDataSuccess?: (res: ResponseDataType) => void
  ) => {
    try {
      setLoading?.(true)
      const res = await apiService.getItemByPk(Number(key), accessTokenStored)
      if (!res?.success) throw new Error(`${res?.message}`)
      onDataSuccess?.(res)
    } catch (err) {
      throw err
    } finally {
      setLoading?.(false)
    }
  }

  const getItemBy = async (
    query: { field: string; key: number | string },
    setLoading?: (enable: boolean) => void
  ): Promise<ResponseDataType> => {
    try {
      setLoading?.(true)
      const res = await apiService.getItemBy?.(query, accessTokenStored)
      if (!res?.success) throw new Error(`${res?.message}`)
      return res
    } catch (err) {
      throw err
    } finally {
      setLoading?.(false)
    }
  }

  const getItemBySync = async (
    query: { field: string; key: number | string },
    setLoading?: (enable: boolean) => void,
    onDataSuccess?: (res: ResponseDataType) => void
  ) => {
    try {
      setLoading?.(true)
      const res = await apiService.getItemBy?.(query, accessTokenStored)
      if (!res?.success) throw new Error(`${res?.message}`)
      onDataSuccess?.(res)
    } catch (err) {
      throw err
    } finally {
      setLoading?.(false)
    }
  }

  const getItems = async (
    params: RequestBodyType,
    setLoading?: (enable: boolean) => void
  ): Promise<ResponseDataType> => {
    try {
      setLoading?.(true)
      const res = await apiService.getItems({ ...defaultRequestBody, ...params }, accessTokenStored)
      return res
    } catch (err) {
      console.log(err)
      throw err
    } finally {
      setLoading?.(false)
    }
  }

  const getItemsSync = async (
    params: RequestBodyType,
    setLoading?: (enable: boolean) => void,
    onDataSuccess?: (res: ResponseDataType) => void
  ) => {
    try {
      setLoading?.(true)
      const res = await apiService.getItems({ ...defaultRequestBody, ...params }, accessTokenStored)
      if (!res?.message) throw new Error(`${res}`)
      onDataSuccess?.(res)
    } catch (err) {
      throw err
    } finally {
      setLoading?.(false)
    }
  }

  const updateItemByPk = async (
    key: number | string,
    itemToUpdate: T,
    setLoading?: (enable: boolean) => void
  ): Promise<ResponseDataType> => {
    try {
      setLoading?.(true)
      const meta = await apiService.updateItemByPk(Number(key), itemToUpdate, accessTokenStored)
      return meta
    } catch (err) {
      throw err
    } finally {
      setLoading?.(false)
    }
  }

  const updateItemByPkSync = async (
    key: number | string,
    itemToUpdate: T,
    setLoading?: (enable: boolean) => void,
    onDataSuccess?: (data: ResponseDataType) => void
  ) => {
    try {
      setLoading?.(true)
      const res = await apiService.updateItemByPk(Number(key), itemToUpdate, accessTokenStored)
      if (!res?.success) throw new Error(`${res?.message}`)
      onDataSuccess?.(res)
    } catch (err) {
      throw err
    } finally {
      setLoading?.(false)
    }
  }

  const updateItemBy = async (
    query: { field: string; key: number | string },
    itemToUpdate: T,
    setLoading?: (enable: boolean) => void
  ): Promise<ResponseDataType> => {
    try {
      setLoading?.(true)
      const res = await apiService.updateItemBy?.(query, itemToUpdate, accessTokenStored)
      if (!res?.success) throw new Error(`${res?.message}`)
      return res
    } catch (err) {
      throw err
    } finally {
      setLoading?.(false)
    }
  }

  const updateItemBySync = async (
    query: { field: string; key: number | string },
    itemToUpdate: T,
    setLoading?: (enable: boolean) => void,
    onDataSuccess?: (data: ResponseDataType) => void
  ) => {
    try {
      setLoading?.(true)
      const res = await apiService.updateItemBy?.(query, itemToUpdate, accessTokenStored)
      if (!res?.success) throw new Error(`${res?.message}`)
      onDataSuccess?.(res)
    } catch (err) {
      throw err
    } finally {
      setLoading?.(false)
    }
  }

  const updateItemsBy = async (
    query: { field: string; key: number | string },
    itemsToUpdate: T[],
    setLoading?: (enable: boolean) => void
  ): Promise<ResponseDataType> => {
    try {
      setLoading?.(true)
      const res = await apiService.updateItemsBy?.(query, itemsToUpdate, accessTokenStored)
      if (!res?.success) throw new Error(`${res?.message}`)
      return res
    } catch (err) {
      throw err
    } finally {
      setLoading?.(false)
    }
  }

  const updateItemsBySync = async (
    query: { field: string; key: number | string },
    itemsToUpdate: T[],
    setLoading?: (enable: boolean) => void,
    onDataSuccess?: (data: ResponseDataType) => void
  ) => {
    try {
      setLoading?.(true)
      const res = await apiService.updateItemsBy?.(query, itemsToUpdate, accessTokenStored)
      if (!res?.success) throw new Error(`${res?.message}`)
      onDataSuccess?.(res)
    } catch (err) {
      throw err
    } finally {
      setLoading?.(false)
    }
  }

  const updateItems = async (itemsToUpdate: T[], setLoading?: (enable: boolean) => void) => {
    try {
      setLoading?.(true)
      const res = await apiService.updateItems?.(itemsToUpdate, accessTokenStored)
      if (!res?.success) throw new Error(`${res?.message}`)
      return res
    } catch (err) {
      throw err
    } finally {
      setLoading?.(false)
    }
  }

  const updateItemsSync = async (
    itemsToUpdate: T[],
    setLoading?: (enable: boolean) => void,
    onDataSuccess?: (data: ResponseDataType) => void
  ) => {
    try {
      setLoading?.(true)
      const res = await apiService.updateItems?.(itemsToUpdate, accessTokenStored)
      if (!res?.success) throw new Error(`${res?.message}`)
      onDataSuccess?.(res)
    } catch (err) {
      throw err
    } finally {
      setLoading?.(false)
    }
  }

  const deleteItem = async (
    key: number | string,
    setLoading?: (enable: boolean) => void
  ): Promise<ResponseDataType> => {
    try {
      setLoading?.(true)
      const res = await apiService.deleteItemByPk(Number(key), accessTokenStored)
      return res
    } catch (err) {
      throw err
    } finally {
      setLoading?.(false)
    }
  }

  const deleteItemSync = async (
    key: number | string,
    setLoading?: (enable: boolean) => void,
    onDataSuccess?: (data: ResponseDataType) => void
  ) => {
    try {
      setLoading?.(true)
      const res = await apiService.deleteItemByPk(Number(key), accessTokenStored)
      if (!res?.success) throw new Error(`${res?.message}`)
      onDataSuccess?.(res)
    } catch (err) {
      throw err
    } finally {
      setLoading?.(false)
    }
  }

  const deleteItemBy = async (
    query: { field: string; key: number | string },
    setLoading?: (enable: boolean) => void
  ): Promise<ResponseDataType> => {
    try {
      setLoading?.(true)
      const res = await apiService.deleteItemBy?.(query, accessTokenStored)
      if (!res?.success) throw new Error(`${res?.message}`)
      return res
    } catch (err) {
      throw err
    } finally {
      setLoading?.(false)
    }
  }

  const deleteItemBySync = async (
    query: { field: string; key: number | string },
    setLoading?: (enable: boolean) => void,
    onDataSuccess?: (data: ResponseDataType) => void
  ) => {
    try {
      setLoading?.(true)
      const res = await apiService.deleteItemBy?.(query, accessTokenStored)
      if (!res?.success) throw new Error(`${res?.message}`)
      onDataSuccess?.(res)
    } catch (err) {
      throw err
    } finally {
      setLoading?.(false)
    }
  }

  return {
    createItem,
    createItemSync,
    getItemByPk,
    getItemByPkSync,
    getItemBy,
    getItemBySync,
    getItems,
    getItemsSync,
    updateItemByPk,
    updateItemByPkSync,
    updateItemBy,
    updateItemBySync,
    updateItemsBy,
    updateItemsBySync,
    updateItems,
    updateItemsSync,
    deleteItem,
    deleteItemSync,
    deleteItemBy,
    deleteItemBySync
  }
}
