import bankClient from '@common/bankClient';
import { BANKAPI } from 'config';
import { NextApiRequest, NextApiResponse } from 'next';
import nc, { RequestHandler } from 'next-connect';
import axios from 'axios';

const handler = nc<NextApiRequest, NextApiResponse>();

const getUsser: RequestHandler<NextApiRequest, NextApiResponse> = async (req, res, next) => {
  try {
    const requests = [bankClient.get(BANKAPI.USER.name), bankClient.get(BANKAPI.USER.accountHolderInfo)];

    const [name, accountHolderInfo] = await axios.all(requests);

    return res.status(200).json({
      name: name.data,
      accountHolderInfo: accountHolderInfo.data,
    });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

handler.get(getUsser);

export default handler;
