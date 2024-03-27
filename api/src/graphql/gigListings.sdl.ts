export const schema = gql`
  type GigListing {
    id: String!
    title: String!
    date: DateTime!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    gigListings: [GigListing!]! @skipAuth
    gigListing(id: String!): GigListing @skipAuth
  }

  input CreateGigListingInput {
    title: String!
    date: DateTime!
  }

  input UpdateGigListingInput {
    title: String
    date: DateTime
  }

  type Mutation {
    createGigListing(input: CreateGigListingInput!): GigListing! @requireAuth
    updateGigListing(id: String!, input: UpdateGigListingInput!): GigListing!
      @requireAuth
    deleteGigListing(id: String!): GigListing! @requireAuth
  }
`
