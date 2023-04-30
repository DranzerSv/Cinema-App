import * as React from 'react';
import type { AppProps } from 'next/app';
import { useState, useEffect } from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Container from '@/components/Container/Container';
import Session from '@/components/Context';
import '@/styles/globals.scss';

const queryClient = new QueryClient();
export default function App({ Component, pageProps }: AppProps) {
  const [sessionValue, setSessionValue] = useState<string>('');

  useEffect(() => {
    const persistContext = localStorage.getItem('sessionId');
    if (persistContext) {
      setSessionValue(persistContext);
    }
  }, [sessionValue]);

  return (
    <QueryClientProvider client={queryClient}>
      <Session.Provider value={{ sessionValue, setSessionValue }}>
        <Container>
          <Component {...pageProps} />
        </Container>
      </Session.Provider>
    </QueryClientProvider>
  );
}
