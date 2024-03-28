export const schema = gql`
  type GigListing {
    id: String!
    title: String!
    date: DateTime!
    createdAt: DateTime!
    updatedAt: DateTime!
    creator: User!
    attendees: [User]!
    userId: Int!
  }

  type Query {
    gigListings: [GigListing!]! @requireAuth
    gigListing(id: String!): GigListing @requireAuth
  }

  input CreateGigListingInput {
    title: String!
    date: DateTime!
    userId: Int!
  }

  input UpdateGigListingInput {
    title: String
    date: DateTime
    userId: Int
  }

  type Mutation {
    createGigListing(input: CreateGigListingInput!): GigListing! @requireAuth
    updateGigListing(id: String!, input: UpdateGigListingInput!): GigListing!
      @requireAuth
    deleteGigListing(id: String!): GigListing! @requireAuth
  }
`
