export const schema = gql`
  type GigListing {
    id: String!
    title: String!
    date: DateTime!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    gigListings: [GigListing!]! @requireAuth
    gigListing(id: String!): GigListing @requireAuth
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
