'use client';

import * as React from 'react';
import { NextUIProvider } from '@nextui-org/system';
import { useRouter } from 'next/navigation';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { ThemeProviderProps } from 'next-themes/dist/types';
import { RecoilRoot } from 'recoil';

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

/**
 * Providers to wrap the entire application.
 */
export function Providers({ children, themeProps }: ProvidersProps) {
  const router = useRouter();

  return (
    <RecoilRoot>
      <NextUIProvider navigate={router.push}>
        <NextThemesProvider {...themeProps}>{children}</NextThemesProvider>
      </NextUIProvider>
    </RecoilRoot>
  );
}
