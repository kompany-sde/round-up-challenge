import { FC, PropsWithChildren } from 'react';
import { useGetCurrentUserQuery } from '../api';

const ProtectedRoute: FC<PropsWithChildren<{ children?: any }>> = ({ children }) => {
  const { data, isError, isFetching, isLoading, isUninitialized } = useGetCurrentUserQuery();

  if (isUninitialized) {
    return null;
  }
  if (isError) {
    return <div>Oops...Looks like an error occurred</div>;
  }
  if (data) {
    return children;
  }

  return <div>Loading...</div>;
};

export default ProtectedRoute;
