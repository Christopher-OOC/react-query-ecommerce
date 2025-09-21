import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteProduct as deleteProductApi } from "../../services/apiProducts";
import toast from "react-hot-toast";

export function useDeleteProduct() {
    const queryClient = useQueryClient();

    const { mutate: deleteProduct, isPending: isDeleting } = useMutation({
        mutationFn: deleteProductApi,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["products"],
            });
            toast.success("Product deleted successfully");
        },
        onError: (error) => {
            toast.error(error.message);
        },
    });

    return { isDeleting, deleteProduct };
}
