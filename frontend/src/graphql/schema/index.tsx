import { gql } from '@apollo/client';


export const  QUERY_SUPPLIERS = gql`
query getSuppliers($consumMonth: Int!) {
  getSuppliers(consumMonth: $consumMonth) {
    name
    state
    costPerKwh
    minLimitKwh
    numCustomers
    averageRating
    logo
  }
}

`;