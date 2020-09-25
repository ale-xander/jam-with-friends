/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createSite = /* GraphQL */ `
  mutation CreateSite(
    $input: CreateSiteInput!
    $condition: ModelSiteConditionInput
  ) {
    createSite(input: $input, condition: $condition) {
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
export const updateSite = /* GraphQL */ `
  mutation UpdateSite(
    $input: UpdateSiteInput!
    $condition: ModelSiteConditionInput
  ) {
    updateSite(input: $input, condition: $condition) {
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
export const deleteSite = /* GraphQL */ `
  mutation DeleteSite(
    $input: DeleteSiteInput!
    $condition: ModelSiteConditionInput
  ) {
    deleteSite(input: $input, condition: $condition) {
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
export const createProfile = /* GraphQL */ `
  mutation CreateProfile(
    $input: CreateProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    createProfile(input: $input, condition: $condition) {
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
export const updateProfile = /* GraphQL */ `
  mutation UpdateProfile(
    $input: UpdateProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    updateProfile(input: $input, condition: $condition) {
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
export const deleteProfile = /* GraphQL */ `
  mutation DeleteProfile(
    $input: DeleteProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    deleteProfile(input: $input, condition: $condition) {
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
