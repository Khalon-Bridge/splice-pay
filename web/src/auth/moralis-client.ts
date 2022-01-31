import { Moralis } from 'moralis'
import { AuthenticateOptions } from 'react-moralis/lib/hooks/core/useMoralis/_useMoralisAuth'

const login = async (options?: AuthenticateOptions) => {
  return await Moralis.authenticate(options)
}

const logout = async () => {
  return await Moralis.User.logOut()
}

const getToken = async () => {
  return Moralis.User.current().getSessionToken()
}

const getUserMetadata = async () => {
  return Moralis.User.current()
}

export const init = (serverUrl: string, appId: string) => {
  Moralis.start({ serverUrl, appId })
  return { login, logout, getToken, getUserMetadata }
}
