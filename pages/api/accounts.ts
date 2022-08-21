import bankClient from '@common/bankClient';
import { BANKAPI } from 'config';
import { NextApiRequest, NextApiResponse } from 'next';
import { IAccount } from '@features/account';
import nc, { RequestHandler } from 'next-connect';

const handler = nc<NextApiRequest, NextApiResponse>();

const getAccounts: RequestHandler<NextApiRequest, NextApiResponse> = async (req, res, next) => {
  try {
    const {
      data: { accounts },
    } = await bankClient.get<{ accounts: IAccount[] }>(BANKAPI.ACCOUNTS.accounts);

    return res.status(200).json({ accounts });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

handler.get(getAccounts);

export default handler;
