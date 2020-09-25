/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSite = /* GraphQL */ `
  query GetSite($id: ID!) {
    getSite(id: $id) {
      id
      name
      profiles {
        items {
          id
          title
          username
          description
          interests
          siteID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listSites = /* GraphQL */ `
  query ListSites(
    $filter: ModelSiteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSites(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        profiles {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getProfile = /* GraphQL */ `
  query GetProfile($id: ID!) {
    getProfile(id: $id) {
      id
      title
      username
      description
      interests
      siteID
      site {
        id
        name
        profiles {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listProfiles = /* GraphQL */ `
  query ListProfiles(
    $filter: ModelProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        username
        description
        interests
        siteID
        site {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
