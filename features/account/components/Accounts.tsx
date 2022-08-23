import { Container } from '@components/Containers';
import { useGetAccountsQuery } from '../api';
import { useAccount } from '../hooks/useAccount';
import { AccountList } from './AccountList';

const data = [
  {
    accountUid: 'bd595ecb-5b67-4f4d-8b62-d9ac5505cf9c',
    accountType: 'PRIMARY',
    defaultCategory: 'ac94fd6a-cf00-4428-b34a-aa8d7383cf27',
    currency: 'GBP',
    createdAt: '2022-08-20T05:55:38.393Z',
    name: 'Personal',
  },
  {
    accountUid: '82fa3d90-7d59-4ec6-a61a-32a1da846ea8',
    accountType: 'ADDITIONAL',
    defaultCategory: '89fbb704-5f61-48f9-922f-aa066b01ea3c',
    currency: 'EUR',
    createdAt: '2022-08-20T06:03:18.227Z',
    name: 'Euro',
  },
];

export const Accounts = () => {
  const { data, isError, isLoading, isUninitialized } = useGetAccountsQuery();
  const { selectedAccount, setSelectedAccount } = useAccount();

  if (isLoading) {
    return <div>Accounts Loading...</div>;
  }

  return (
    <Container>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg leading-6 font-medium text-gray-900">Accounts</h2>
      </div>
      {data && (
        <AccountList
          onAccountSelect={setSelectedAccount}
          selectedAccountId={selectedAccount?.accountUid}
          accounts={data}
        />
      )}
    </Container>
  );
};
