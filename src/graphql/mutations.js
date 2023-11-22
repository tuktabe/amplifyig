/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createMatch = /* GraphQL */ `
  mutation CreateMatch(
    $input: CreateMatchInput!
    $condition: ModelMatchConditionInput
  ) {
    createMatch(input: $input, condition: $condition) {
      id
      User1 {
        id
        name
        image
        bio
        gender
        lookingFor
        createdAt
        updatedAt
        __typename
      }
      User2 {
        id
        name
        image
        bio
        gender
        lookingFor
        createdAt
        updatedAt
        __typename
      }
      Userid1
      Userid2
      createdAt
      updatedAt
      matchUser1Id
      matchUser2Id
      __typename
    }
  }
`;
export const updateMatch = /* GraphQL */ `
  mutation UpdateMatch(
    $input: UpdateMatchInput!
    $condition: ModelMatchConditionInput
  ) {
    updateMatch(input: $input, condition: $condition) {
      id
      User1 {
        id
        name
        image
        bio
        gender
        lookingFor
        createdAt
        updatedAt
        __typename
      }
      User2 {
        id
        name
        image
        bio
        gender
        lookingFor
        createdAt
        updatedAt
        __typename
      }
      Userid1
      Userid2
      createdAt
      updatedAt
      matchUser1Id
      matchUser2Id
      __typename
    }
  }
`;
export const deleteMatch = /* GraphQL */ `
  mutation DeleteMatch(
    $input: DeleteMatchInput!
    $condition: ModelMatchConditionInput
  ) {
    deleteMatch(input: $input, condition: $condition) {
      id
      User1 {
        id
        name
        image
        bio
        gender
        lookingFor
        createdAt
        updatedAt
        __typename
      }
      User2 {
        id
        name
        image
        bio
        gender
        lookingFor
        createdAt
        updatedAt
        __typename
      }
      Userid1
      Userid2
      createdAt
      updatedAt
      matchUser1Id
      matchUser2Id
      __typename
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      name
      image
      bio
      gender
      lookingFor
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      name
      image
      bio
      gender
      lookingFor
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      name
      image
      bio
      gender
      lookingFor
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
      id
      tiltle
      content
      image
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
      id
      tiltle
      content
      image
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
      id
      tiltle
      content
      image
      createdAt
      updatedAt
      __typename
    }
  }
`;
