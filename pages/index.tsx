import { NextPage } from 'next';
import { Accounts } from '@features/account';
import { DashboardLayout, Profile } from '@features/auth';
import { TransactionFeed } from '@features/feed';
import { Savings } from '@features/savings';

const Home: NextPage = () => {
  return (
    <DashboardLayout>
      <Profile />
      <div className="mt-8 space-y-6">
        <Accounts />
        <Savings />
        <TransactionFeed />
      </div>
    </DashboardLayout>
  );
};

export default Home;
