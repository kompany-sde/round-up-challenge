import { Container } from '@components/Containers';
import Image from 'next/image';
import Link from 'next/link';
import { ReactFCWithChildren } from 'types/react';
import { useAuth } from '../hooks/useAuth';
import { ProtectedRoute } from './ProtectedRoute';

const Logo = () => {
  return (
    <Link className="flex items-center text-white" href="/">
      <a>
        <Image width="250px" height="64px" src="/Starling_Bank_logo.png" alt="Starling Bank" />
      </a>
    </Link>
  );
};

export const DashboardLayout: ReactFCWithChildren = ({ children }) => {
  const { user } = useAuth();

  return (
    <ProtectedRoute>
      <div className="min-h-full bg-gray-100">
        <div className="flex flex-col flex-1">
          <div className="sticky top-0 z-10 flex-shrink-0 flex h-16 bg-white border-b border-gray-200 lg:border-none">
            <Container className="flex-1 flex justify-between ">
              <div className="flex-1 flex">
                <Logo />
              </div>
              <div className="ml-4 flex items-center md:ml-6">
                <span className="hidden ml-3 text-gray-700 text-sm font-medium lg:block">{`${user?.email}`}</span>
              </div>
            </Container>
          </div>
          <main className="flex-1 pb-8">{children}</main>
        </div>
      </div>
    </ProtectedRoute>
  );
};
