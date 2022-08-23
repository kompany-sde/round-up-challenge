import { FC, PropsWithChildren } from 'react';
import { useGetCurrentUserQuery } from '../api';

export const ProtectedRoute: FC<PropsWithChildren<{ children?: any }>> = ({ children }) => {
  const { data, error, isError, isLoading, isUninitialized } = useGetCurrentUserQuery();

  if (isUninitialized) {
    return null;
  }
  if (isError) {
    if ('status' in error && error.status === 403) {
      return <div>{JSON.stringify(error.data)}</div>;
    }
    return <div>Oops...Looks like an error occurred. Please Contact admin if issue persists</div>;
  }
  if (data) {
    return children;
  }

  return <div>Loading...</div>;
};
