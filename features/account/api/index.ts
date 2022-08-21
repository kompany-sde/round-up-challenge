import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { NEXTAPI } from 'config';
import { IAccount } from '../types';

// Define a service using a base URL and expected endpoints
export const accountsApi = createApi({
  reducerPath: 'accountsApi',
  baseQuery: fetchBaseQuery({ baseUrl: NEXTAPI.BASE_URL }),
  endpoints: (builder) => ({
    getAccounts: builder.query<IAccount[], void>({
      query: () => NEXTAPI.ACCOUNTS.accounts,
      transformResponse: (response: { accounts: IAccount[] }, meta, arg) => response.accounts,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAccountsQuery } = accountsApi;
