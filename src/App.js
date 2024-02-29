
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import MyRoutes from './routes/Routes';


const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MyRoutes/>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
