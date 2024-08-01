'use client';

import { createContext, useEffect, useState } from 'react';
import useStore from '@/store';
import useAppStore from '@/store/useAppStore';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { config } from '@/web3/config';
import { createWeb3Modal } from '@web3modal/wagmi/react';
import { State, WagmiProvider, cookieToInitialState } from 'wagmi';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '@/style/theme';

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID as string;
// Create modal
createWeb3Modal({
  wagmiConfig: config,
  projectId,
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
});
type ThemeMode = 'dark' | 'light';

interface IContext {
  themeMode: ThemeMode;
  setThemeMode: React.Dispatch<React.SetStateAction<ThemeMode>>;
}
const queryClient = new QueryClient();
export const ProvidersContext = createContext<IContext | null>(null);

const Providers = ({ children }: { children: React.ReactNode }) => {
  const appData = useStore(useAppStore, (state) => state);
  const [themeMode, setThemeMode] = useState<ThemeMode>('dark');
  const [initialState, setInitialState] = useState<State | undefined>();

  useEffect(() => {
    document.documentElement.classList.toggle('dark', appData?.dark);
    setThemeMode(appData?.dark ? 'dark' : 'light');
  }, [appData?.dark]);

  useEffect(() => {
    const cookie = document.cookie;
    const state = cookieToInitialState(config, cookie);
    setInitialState(state);
  }, []);

  const value = {
    themeMode,
    setThemeMode,
  };

  return (
    <ProvidersContext.Provider value={value}>
      <ChakraProvider theme={theme}>
        <WagmiProvider config={config} initialState={initialState}>
          <QueryClientProvider client={queryClient}>
            {children}
          </QueryClientProvider>
        </WagmiProvider>
      </ChakraProvider>
    </ProvidersContext.Provider>
  );
};

export default Providers;
