import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import { QueryClientProvider, QueryClient } from 'react-query';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const queryClient = new QueryClient();
export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
