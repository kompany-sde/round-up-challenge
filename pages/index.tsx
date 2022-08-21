import { NextPage } from 'next';
import { Accounts, IAccount } from '@features/account';

const Home: NextPage = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <Accounts />
        <Accounts />
        <Accounts />
        <Accounts />
        <Accounts />
        <Accounts />
        <Accounts />
      </div>
    </div>
  );
};

export default Home;
