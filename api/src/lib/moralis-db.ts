/* eslint-disable @typescript-eslint/no-explicit-any */
import Moralis from 'moralis/node'
import { initMoralis } from './utils'

const DEFAULT_PAGE_SIZE = 30

export type filterOptions = {
  match?: any
  lookup?: any
  project?: any
  group?: any
  sort?: any
}

export type mutationOptions = {
  cascadeSave?: boolean
}

const fetch = async (
  collection: string,
  skip = 0,
  limit: number = DEFAULT_PAGE_SIZE
) => {
  await initMoralis()
  const query = new Moralis.Query(collection)
  query.skip(skip)
  query.limit(limit)
  return query
}

const create = async (
  collection: string,
  payload: any,
  options?: mutationOptions
) => {
  await initMoralis()
  const instance = new Moralis.Object(collection)
  const saved = await instance.save(
    JSON.parse(JSON.stringify(payload)),
    options
  )
  return { id: saved.id, ...saved.attributes }
}

const update = async (
  collection: string,
  id: string,
  payload: any,
  options?: mutationOptions
) => {
  const query = await db.fetch(collection)
  const instance = await query.get(id)
  if (instance.id) {
    const updated = await instance.save(
      JSON.parse(JSON.stringify(payload)),
      options
    )
    return { id: updated.id, ...updated.attributes }
  }
  throw new Error('Item does not exist!')
}

export const db = { fetch, create, update }
