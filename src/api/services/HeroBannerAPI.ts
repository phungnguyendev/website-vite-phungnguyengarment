import client, { RequestBodyType, ResponseDataType } from '~/api/client'
import { HeroBanner } from '~/typing'
import { responseFormatter, throwErrorFormatter } from '~/utils/response-formatter'
const NAMESPACE = 'hero-banners'

export default {
  createNewItem: async (item: HeroBanner, accessToken: string): Promise<ResponseDataType | undefined> => {
    return await client
      .post(
        `${NAMESPACE}`,
        {
          ...item
        },
        {
          headers: {
            authorization: accessToken
          }
        }
      )
      .then((res) => {
        return responseFormatter(res)
      })
      .catch(function (error) {
        throwErrorFormatter(error)
      })
  },
  getItemByPk: async (id: number, accessToken: string): Promise<ResponseDataType | undefined> => {
    return client
      .get(`${NAMESPACE}/${id}`, {
        headers: {
          authorization: accessToken
        }
      })
      .then((res) => {
        return responseFormatter(res)
      })
      .catch(function (error) {
        throwErrorFormatter(error)
      })
  },
  getItemBy: async (
    query: { field: string; key: React.Key },
    accessToken: string
  ): Promise<ResponseDataType | undefined> => {
    return client
      .get(`${NAMESPACE}/${query.field}/${query.key}`, {
        headers: {
          authorization: accessToken
        }
      })
      .then((res) => {
        return responseFormatter(res)
      })
      .catch(function (error) {
        throwErrorFormatter(error)
      })
  },
  getItems: async (bodyRequest: RequestBodyType, accessToken: string): Promise<ResponseDataType | undefined> => {
    return await client
      .post(
        `${NAMESPACE}/find`,
        {
          ...bodyRequest
        },
        {
          headers: {
            authorization: accessToken
          }
        }
      )
      .then((res) => {
        return responseFormatter(res)
      })
      .catch(function (error) {
        throwErrorFormatter(error)
      })
  },
  updateItemByPk: async (id: number, item: HeroBanner, accessToken: string): Promise<ResponseDataType | undefined> => {
    return client
      .put(
        `${NAMESPACE}/${id}`,
        {
          ...item
        },
        {
          headers: {
            authorization: accessToken
          }
        }
      )
      .then((res) => {
        return responseFormatter(res)
      })
      .catch(function (error) {
        throwErrorFormatter(error)
      })
  },
  updateList: async (itemsToUpdate: HeroBanner[]): Promise<ResponseDataType | undefined> => {
    return client
      .post(`${NAMESPACE}/all`, itemsToUpdate)
      .then((res) => {
        return responseFormatter(res)
      })
      .catch(function (error) {
        throwErrorFormatter(error)
      })
  },
  updateItemBy: async (
    query: {
      field: string
      key: React.Key
    },
    item: HeroBanner,
    accessToken: string
  ): Promise<ResponseDataType | undefined> => {
    return client
      .put(
        `${NAMESPACE}/${query.field}/${query.key}`,
        {
          ...item
        },
        {
          headers: {
            authorization: accessToken
          }
        }
      )
      .then((res) => {
        return responseFormatter(res)
      })
      .catch(function (error) {
        throwErrorFormatter(error)
      })
  },
  deleteItemByPk: async (id: number, accessToken: string): Promise<ResponseDataType | undefined> => {
    return client
      .delete(`${NAMESPACE}/${id}`, {
        headers: {
          authorization: accessToken
        }
      })
      .then((res) => {
        return responseFormatter(res)
      })
      .catch(function (error) {
        throwErrorFormatter(error)
      })
  }
}
