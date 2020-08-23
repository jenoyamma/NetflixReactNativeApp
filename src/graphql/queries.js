/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getRecmovie = /* GraphQL */ `
  query GetRecmovie($id: ID!) {
    getRecmovie(id: $id) {
      id
      movieUri
      movieTitle
      movieReleaseYear
      movieDescription
      user
      type
      createdAt
      updatedAt
    }
  }
`;
export const listRecmovies = /* GraphQL */ `
  query ListRecmovies(
    $filter: ModelrecmovieFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRecmovies(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        movieUri
        movieTitle
        movieReleaseYear
        movieDescription
        user
        type
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
