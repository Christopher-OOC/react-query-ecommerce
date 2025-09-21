import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProduct as createProductApi } from "../../services/apiProducts";
import toast from "react-hot-toast";

export function useCreateProduct() {
    const queryClient = useQueryClient();

    const { mutate: createProduct, isPending: isCreating } = useMutation({
        mutationFn: createProductApi,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["products"],
            });
            toast.success("Product created successfully!");
        },
        onError: (error) => {
            console.log("Error", error.message);
        },
    });

    return { isCreating, createProduct };
}
