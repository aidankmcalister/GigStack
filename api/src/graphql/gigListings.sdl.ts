export const schema = gql`
  type GigListing {
    id: String!
    title: String!
    date: DateTime!
    createdAt: DateTime!
    updatedAt: DateTime!
    instrumentsWanted: [String]!
    creator: User!
    attendees: [User]!
    userId: Int!
  }

  type Query {
    gigListings: [GigListing!]! @skipAuth
    gigListing(id: String!): GigListing @skipAuth
    gigListingsByUser: [GigListing!] @requireAuth
  }

  input CreateGigListingInput {
    title: String!
    date: DateTime!
    instrumentsWanted: [String]!
    userId: Int!
  }

  input UpdateGigListingInput {
    title: String
    date: DateTime
    instrumentsWanted: [String]!
    userId: Int
  }

  type Mutation {
    createGigListing(input: CreateGigListingInput!): GigListing! @requireAuth
    updateGigListing(id: String!, input: UpdateGigListingInput!): GigListing!
      @requireAuth
    deleteGigListing(id: String!): GigListing! @requireAuth
  }
`
