import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CreateProductPage from "./pages/CreateProductPage";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 0,
        },
    },
});

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <div className="">
                <CreateProductPage />
            </div>
        </QueryClientProvider>
    );
}

export default App;
