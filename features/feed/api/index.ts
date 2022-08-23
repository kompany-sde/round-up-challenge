import { NEXTAPI } from 'config';
import { baseApi } from 'redux/baseApi';
import { FeedItem } from '../types';

type QueryParams = {
  accountUid?: string;
  categoryUid?: string;
  maxDate?: string | null;
  minDate?: string | null;
};
export const feedApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getFeedItems: builder.query<FeedItem[], QueryParams>({
      query: ({ accountUid, categoryUid, maxDate, minDate }) => ({
        url: NEXTAPI.FEED.items,
        params: {
          accountUid,
          categoryUid,
          maxDate,
          minDate,
        },
      }),
      transformResponse: (response: { feed: FeedItem[] }, meta, arg) => response.feed,
      providesTags: ['GetFeedItems'],
    }),
  }),
});

export const { useGetFeedItemsQuery } = feedApi;
