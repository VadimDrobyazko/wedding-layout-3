import { AxiosResponse } from 'axios'
import { axiosInstance } from 'services/axiosInstance'
import { ISessionData } from 'services/sessionService/sessionService.dto'

export const sessionService = {
  getSession: (): Promise<AxiosResponse<ISessionData>> => {
    return axiosInstance.post('/auth/session')
  },
}
