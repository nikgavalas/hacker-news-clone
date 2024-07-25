'use client';

import clsx from 'clsx';
import { Footer } from '@/components/footer';
import { NavBar } from '@/components/navbar/navbar';
import { useMenuOptionStarred } from '@/hooks/use-menu-option-starred';

interface MainProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * The main layout component. The reason for this component is to is to wrap the
 * children components with the NavBar and Footer components and make it a
 * client-side component. That is so we don't get a "pop" where the menu item is
 * set to latest when the page is refreshed even if "starred" is selected.
 *
 * This does make it so we don't get any server side rendering but our app is so
 * small and depends on client-side fetching for everything anyway that it's not
 * a huge deal. This could also be fixed and refactored later with more time.
 */
export function Main(props: MainProps) {
  const { children, className } = props;

  const { loading } = useMenuOptionStarred();

  if (loading) {
    return null;
  }

  return (
    <div className={clsx('relative flex flex-col h-screen', className)}>
      <NavBar />
      <main className="container mx-auto max-w-7xl pt-4 sm:pt-10 px-0 sm:px-6 flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}
