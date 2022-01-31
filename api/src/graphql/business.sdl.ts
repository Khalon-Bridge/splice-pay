export const schema = gql`
  type Business {
    id: String!
    wallet: String!
    name: String!
    type: BusinessType!
    information: JSON
    settings: JSON
    status: Status!
  }

  enum Status {
    ACTIVE
    DISABLED
  }

  enum BusinessType {
    PRODUCT
    SERVICE
  }

  type Query {
    businesses(skip: Int, take: Int): [Business!]! @skipAuth
    business(id: String!): Business @requireAuth
  }

  input CreateBusinessInput {
    name: String!
    type: BusinessType!
    status: Status!
    wallet: String!
    information: JSON
    settings: JSON
  }

  input UpdateBusinessInput {
    name: String
    type: BusinessType
    status: Status
    wallet: String
    information: JSON
    settings: JSON
  }

  type Mutation {
    createBusiness(input: CreateBusinessInput!): Business! @skipAuth
    updateBusiness(id: String!, input: UpdateBusinessInput!): Business!
      @skipAuth
    deleteBusiness(id: String!): Business! @requireAuth
  }
`
