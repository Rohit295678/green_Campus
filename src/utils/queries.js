import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      homeData {
        _id
        waterEmissions
        electricityEmissions
        heatEmissions
        createdAt
        updatedAt
      }
      travelData {
        _id
        vehicleEmissions
        publicTransitEmissions
        planeEmissions
        createdAt
        updatedAt
      }
      pledgeData {
        _id
        action
        description
        icon
        link
      }
    }
  }
`;

export const QUERY_PLEDGES = gql`
  {
    pledges {
      _id
      action
      description
      icon
      link
    }
  }
`;
