import bankClient from '@common/bankClient';
import { BANKAPI } from 'config';
import { NextApiRequest, NextApiResponse } from 'next';
import nc, { RequestHandler } from 'next-connect';
import { FeedItem } from '@features/feed';

const handler = nc<NextApiRequest, NextApiResponse>();
// In a real word app I'd use a validation middleware to validate all data sent to backend
// Usage of a library such as Yup for validation and returnning a 422 Unprocessable Entity if
// param or body has invalid data
// All routes that need authentication will have an auth middleware before any validation.
// The date field would  be validated to make sure falls withing the specified range;

const getTransactionFeed: RequestHandler<NextApiRequest, NextApiResponse> = async (req, res, next) => {
  try {
    const { accountUid, categoryUid, minDate, maxDate } = req.query;
    const {
      data: { feedItems },
    } = await bankClient.get<{ feedItems: FeedItem[] }>(
      BANKAPI.FEED.items.replace('$accountUid', accountUid as string).replace('$categoryUid', categoryUid as string),
      {
        params: {
          minTransactionTimestamp: minDate,
          maxTransactionTimestamp: maxDate,
        },
      }
    );

    return res.status(200).json({ feed: feedItems });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

// validation middleware would have been placed before getransactionitem
handler.get(getTransactionFeed);

export default handler;
