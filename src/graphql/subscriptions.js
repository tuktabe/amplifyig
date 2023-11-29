/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateMatch = /* GraphQL */ `
  subscription OnCreateMatch($filter: ModelSubscriptionMatchFilterInput) {
    onCreateMatch(filter: $filter) {
      id
      User1 {
        id
        name
        image
        gender
        lookingFor
        bio
        createdAt
        updatedAt
        __typename
      }
      User2 {
        id
        name
        image
        gender
        lookingFor
        bio
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
export const onUpdateMatch = /* GraphQL */ `
  subscription OnUpdateMatch($filter: ModelSubscriptionMatchFilterInput) {
    onUpdateMatch(filter: $filter) {
      id
      User1 {
        id
        name
        image
        gender
        lookingFor
        bio
        createdAt
        updatedAt
        __typename
      }
      User2 {
        id
        name
        image
        gender
        lookingFor
        bio
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
export const onDeleteMatch = /* GraphQL */ `
  subscription OnDeleteMatch($filter: ModelSubscriptionMatchFilterInput) {
    onDeleteMatch(filter: $filter) {
      id
      User1 {
        id
        name
        image
        gender
        lookingFor
        bio
        createdAt
        updatedAt
        __typename
      }
      User2 {
        id
        name
        image
        gender
        lookingFor
        bio
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
      id
      name
      image
      gender
      lookingFor
      bio
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
      id
      name
      image
      gender
      lookingFor
      bio
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
      id
      name
      image
      gender
      lookingFor
      bio
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost($filter: ModelSubscriptionPostFilterInput) {
    onCreatePost(filter: $filter) {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost($filter: ModelSubscriptionPostFilterInput) {
    onUpdatePost(filter: $filter) {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost($filter: ModelSubscriptionPostFilterInput) {
    onDeletePost(filter: $filter) {
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
