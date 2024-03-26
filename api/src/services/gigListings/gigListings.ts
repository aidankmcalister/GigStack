import type { QueryResolvers, MutationResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

export const gigListings: QueryResolvers['gigListings'] = () => {
  return db.gigListing.findMany()
}

export const gigListing: QueryResolvers['gigListing'] = ({ id }) => {
  return db.gigListing.findUnique({
    where: { id },
  })
}

export const createGigListing: MutationResolvers['createGigListing'] = ({
  input,
}) => {
  return db.gigListing.create({
    data: input,
  })
}

export const updateGigListing: MutationResolvers['updateGigListing'] = ({
  id,
  input,
}) => {
  return db.gigListing.update({
    data: input,
    where: { id },
  })
}

export const deleteGigListing: MutationResolvers['deleteGigListing'] = ({
  id,
}) => {
  return db.gigListing.delete({
    where: { id },
  })
}
