import { BrowserRouter } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import MainRouter from "./router/MainRouter";
import "./App.css";

 const queryClient = new QueryClient();

 const App = () => {
   return (
     <BrowserRouter>
       <QueryClientProvider client={queryClient}>
         <MainRouter />
         <ReactQueryDevtools initialIsOpen={false} />
       </QueryClientProvider>
     </BrowserRouter>
   );
 };

export default App;
