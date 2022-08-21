import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { NEXTAPI } from 'config';
import { IUser } from '../types';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: NEXTAPI.BASE_URL }),
  endpoints: (builder) => ({
    getCurrentUser: builder.query<IUser, void>({
      query: () => NEXTAPI.USER.user,
      transformResponse: (response: { user: IUser }, meta, arg) => response.user,
    }),
  }),
});

export const { useGetCurrentUserQuery } = userApi;
