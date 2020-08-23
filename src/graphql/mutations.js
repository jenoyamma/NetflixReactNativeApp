/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createRecmovie = /* GraphQL */ `
  mutation CreateRecmovie(
    $input: CreateRecmovieInput!
    $condition: ModelrecmovieConditionInput
  ) {
    createRecmovie(input: $input, condition: $condition) {
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
export const updateRecmovie = /* GraphQL */ `
  mutation UpdateRecmovie(
    $input: UpdateRecmovieInput!
    $condition: ModelrecmovieConditionInput
  ) {
    updateRecmovie(input: $input, condition: $condition) {
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
export const deleteRecmovie = /* GraphQL */ `
  mutation DeleteRecmovie(
    $input: DeleteRecmovieInput!
    $condition: ModelrecmovieConditionInput
  ) {
    deleteRecmovie(input: $input, condition: $condition) {
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
