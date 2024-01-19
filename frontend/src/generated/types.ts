import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Query = {
  __typename?: 'Query';
  getSuppliers?: Maybe<Array<Maybe<Supplier>>>;
};


export type QueryGetSuppliersArgs = {
  consumMonth: Scalars['Int']['input'];
};

export type Supplier = {
  __typename?: 'Supplier';
  averageRating?: Maybe<Scalars['Float']['output']>;
  costPerKwh?: Maybe<Scalars['Float']['output']>;
  logo?: Maybe<Scalars['String']['output']>;
  minLimitKwh?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  numCustomers?: Maybe<Scalars['Int']['output']>;
  state?: Maybe<Scalars['String']['output']>;
};

export type GetSuppliersQueryVariables = Exact<{
  consumMonth: Scalars['Int']['input'];
}>;


export type GetSuppliersQuery = { __typename?: 'Query', getSuppliers?: Array<{ __typename?: 'Supplier', name?: string | null, state?: string | null, costPerKwh?: number | null, minLimitKwh?: number | null, numCustomers?: number | null, averageRating?: number | null, logo?: string | null } | null> | null };


export const GetSuppliersDocument = gql`
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

/**
 * __useGetSuppliersQuery__
 *
 * To run a query within a React component, call `useGetSuppliersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSuppliersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSuppliersQuery({
 *   variables: {
 *      consumMonth: // value for 'consumMonth'
 *   },
 * });
 */
export function useGetSuppliersQuery(baseOptions: Apollo.QueryHookOptions<GetSuppliersQuery, GetSuppliersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSuppliersQuery, GetSuppliersQueryVariables>(GetSuppliersDocument, options);
      }
export function useGetSuppliersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSuppliersQuery, GetSuppliersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSuppliersQuery, GetSuppliersQueryVariables>(GetSuppliersDocument, options);
        }
export function useGetSuppliersSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetSuppliersQuery, GetSuppliersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetSuppliersQuery, GetSuppliersQueryVariables>(GetSuppliersDocument, options);
        }
export type GetSuppliersQueryHookResult = ReturnType<typeof useGetSuppliersQuery>;
export type GetSuppliersLazyQueryHookResult = ReturnType<typeof useGetSuppliersLazyQuery>;
export type GetSuppliersSuspenseQueryHookResult = ReturnType<typeof useGetSuppliersSuspenseQuery>;
export type GetSuppliersQueryResult = Apollo.QueryResult<GetSuppliersQuery, GetSuppliersQueryVariables>;