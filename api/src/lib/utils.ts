import Moralis from 'moralis/node'

export const initMoralis = async () => {
  return await Moralis.start({
    serverUrl: process.env.MORALIS_SERVER_URL,
    appId: process.env.MORALIS_API_ID,
    masterKey: process.env.MORALIS_MASTER_KEY,
  })
}
