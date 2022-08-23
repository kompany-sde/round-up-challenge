import { Container } from '@components/Containers';
import { useAccount } from '@features/account/hooks/useAccount';
import { FC } from 'react';
import { useGetFeedItemsQuery } from '../api';
import { useFeed } from '../hooks/useFeed';
import { TransactionFeedList } from './FeedList';

export const TransactionFeed: FC = () => {
  const { selectedAccount } = useAccount();
  const {
    feedState: { minDate, maxDate },
  } = useFeed();
  const { data, isError, isLoading, isFetching } = useGetFeedItemsQuery(
    {
      accountUid: selectedAccount?.accountUid,
      categoryUid: selectedAccount?.defaultCategory,
      minDate,
      maxDate,
    },
    {
      refetchOnMountOrArgChange: true,
      skip: !(selectedAccount?.accountUid && selectedAccount?.defaultCategory && minDate && maxDate),
    }
  );

  const displayMessage = (): string | undefined => {
    if (isError) {
      return 'Looks Like an Error occurred.';
    }
    if (!selectedAccount?.accountUid) {
      return 'Select an account.';
    }
    if (!minDate || !maxDate) {
      return 'Select a date';
    }
    return undefined;
  };

  if (!selectedAccount) {
    return <div>Select a user account</div>;
  }

  return (
    <Container>
      <div className="mt-8 flex justify-between items-center mb-4">
        <h2 className="text-lg leading-6 font-medium text-gray-900">Recent Activity</h2>
      </div>
      <TransactionFeedList displayMessage={displayMessage()} isLoading={isLoading || isFetching} feed={data} />
    </Container>
  );
};
