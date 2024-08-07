import client, { RequestBodyType, ResponseDataType } from '~/api/client'
import { RecruitmentPost } from '~/typing'
import { responseFormatter, throwErrorFormatter } from '~/utils/response-formatter'

const NAMESPACE = 'recruitments'

export default {
  createItem: async (newItem: RecruitmentPost, accessToken: string): Promise<ResponseDataType> => {
    return await client
      .post(`${NAMESPACE}`, newItem, {
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
  getItemByPk: async (key: string | number, accessToken: string): Promise<ResponseDataType> => {
    return client
      .get(`${NAMESPACE}/${key}`, {
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
  getItemBy: async (query: { field: string; key: string | number }, accessToken: string): Promise<ResponseDataType> => {
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
  getItems: async (bodyRequest: RequestBodyType, accessToken: string): Promise<ResponseDataType> => {
    return await client
      .post(`${NAMESPACE}/find`, bodyRequest, {
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
  updateItemByPk: async (
    key: string | number,
    itemToUpdate: RecruitmentPost,
    accessToken: string
  ): Promise<ResponseDataType> => {
    return client
      .patch(`${NAMESPACE}/${key}`, itemToUpdate, {
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
  updateItems: async (itemsToUpdate: RecruitmentPost[], accessToken: string): Promise<ResponseDataType> => {
    return client
      .put(`${NAMESPACE}`, itemsToUpdate, {
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
  deleteItemByPk: async (key: string | number, accessToken: string): Promise<ResponseDataType> => {
    return client
      .delete(`${NAMESPACE}/${key}`, {
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
