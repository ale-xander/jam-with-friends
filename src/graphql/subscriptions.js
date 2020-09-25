/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateSite = /* GraphQL */ `
  subscription OnCreateSite {
    onCreateSite {
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
export const onUpdateSite = /* GraphQL */ `
  subscription OnUpdateSite {
    onUpdateSite {
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
export const onDeleteSite = /* GraphQL */ `
  subscription OnDeleteSite {
    onDeleteSite {
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
export const onCreateProfile = /* GraphQL */ `
  subscription OnCreateProfile {
    onCreateProfile {
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
export const onUpdateProfile = /* GraphQL */ `
  subscription OnUpdateProfile {
    onUpdateProfile {
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
export const onDeleteProfile = /* GraphQL */ `
  subscription OnDeleteProfile {
    onDeleteProfile {
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
