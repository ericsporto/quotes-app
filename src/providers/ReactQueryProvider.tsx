import { PropsWithChildren, useState } from 'react';
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

export type QueryMeta =
  | {
      omitError?: boolean;
      message?: string;
    }
  | undefined;

const ReactQueryProvider = ({ children }: PropsWithChildren) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: { refetchOnWindowFocus: false, retry: false },
        },
        queryCache: new QueryCache({
          onError: (error, query) => {
            const meta = query.meta as QueryMeta;
            if (error instanceof Error) {
              if (meta?.omitError) return;
            }
          },
        }),
      })
  );

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default ReactQueryProvider;
