import { Container } from '@components/Containers';
import { useGetAccountsQuery } from '../api';
import { useAccount } from '../hooks/useAccount';
import { AccountList } from './AccountList';

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
