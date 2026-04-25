export type TUser = {
  id: string
  externalId: string
  username: string
}

export interface ISessionData {
  user: TUser
}
