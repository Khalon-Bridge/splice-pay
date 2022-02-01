import { AuthenticationError, context } from '@redwoodjs/graphql-server'
import Moralis from 'moralis/node'
import { initMoralis } from './utils'

/**
 * Once you are ready to add authentication to your application
 * you'll build out requireAuth() with real functionality. For
 * now we just return `true` so that the calls in services
 * have something to check against, simulating a logged
 * in user that is allowed to access that service.
 *
 * See https://redwoodjs.com/docs/authentication for more info.
 */
export const isAuthenticated = () => {
  //console.log(context)
  return !!context.currentUser
}

export const hasRole = ({ roles }) => {
  return roles !== undefined
}

export const getCurrentUser = async (_decoded, { token }) => {
  // try {
  await initMoralis()
  const query = new Moralis.Query(Moralis.Session)
  query.equalTo('sessionToken', token)
  query.include('user')
  const session = await query.first({ useMasterKey: true })
  //console.log(await session.get('user'))
  return await session.get('user')
  //return { id: 'e45669950', userName: 'rollypolly', roles: [] }
  /*   } catch (e) {
    throw new AuthenticationError(e)
  } */
}

// This is used by the redwood directive
// in ./api/src/directives/requireAuth

// Roles are passed in by the requireAuth directive if you have auth setup
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const requireAuth = ({ roles }) => {
  if (!isAuthenticated())
    throw new AuthenticationError("You don't have permission to do that.")
}
