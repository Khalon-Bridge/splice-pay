import { db } from 'src/lib/moralis-db'
const COLLECTION = 'Business'

export const businesses = async ({ skip, take }) => {
  const query = await db.fetch(COLLECTION, skip, take)
  const results = await query.find()
  return results.map((item) => ({ id: item.id, ...item.attributes }))
  //return (await query.find()).map((item) => item.attributes)
}

export const business = async ({ id }) => {
  const query = await db.fetch(COLLECTION)
  const result = await query.get(id)
  return { id: result.id, ...result.attributes }
}

export const createBusiness = async ({ input }) => {
  const _input = { status: 'ACTIVE', type: 'PRODUCT', ...input }
  return await db.create(COLLECTION, _input)
}

export const updateBusiness = async ({ id, input }) => {
  return await db.update(COLLECTION, id, input)
}

export const deleteBusiness = async ({ id }) => {
  //nothing implemented
  return id
}
