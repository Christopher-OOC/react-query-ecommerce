import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CreateProductPage from "./pages/CreateProductPage";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateUser from "./features/admins/CreateUser";

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
            <BrowserRouter>
                <Routes>
                    <Route index element={<CreateProductPage />} />
                    <Route path="/users" element={<CreateUser />} />
                </Routes>
            </BrowserRouter>
            <Toaster
                position="top-right"
                gutter={12}
                containerStyle={{ margin: "8px" }}
                toastOptions={{
                    success: {
                        duration: 3000,
                    },
                    error: {
                        duration: 5000,
                    },
                    style: {
                        fontSize: "16px",
                        maxWidth: "500px",
                        padding: "16px 24px",
                        backgroundColor: "black",
                        color: "green",
                    },
                }}
            />
        </QueryClientProvider>
    );
}

export default App;
