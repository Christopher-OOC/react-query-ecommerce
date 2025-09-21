import React, { useState } from "react";
import { useProducts } from "./useProducts";
import { useCreateProduct } from "./useCreateProduct";
import { FaTrash } from "react-icons/fa";
import { useDeleteProduct } from "./useDeleteProduct";

const ProductManagement = () => {
    const { isCreating: creating, createProduct } = useCreateProduct();
    const { deleteProduct } = useDeleteProduct();
    const { products, isLoading, error } = useProducts();

    const [formData, setFormData] = useState({
        name: "",
        description: "",
        price: "",
        quantity: "",
    });

    const [isCreating, setIsCreating] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    function handleCreateProduct(e) {
        e.preventDefault();
        createProduct(formData);
    }

    function handleDeleteProduct(id) {
        deleteProduct(id);
    }

    if (isLoading && !error) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error!</div>;
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 px-4 py-8">
            <div className="mx-auto max-w-6xl">
                <div className="mb-10 text-center">
                    <h1 className="mb-3 text-4xl font-bold text-gray-800">
                        Product Management Dashboard
                    </h1>
                    <p className="mx-auto max-w-2xl text-gray-600">
                        Manage your product inventory with this intuitive
                        dashboard. Create new products and view all existing
                        products in one place.
                    </p>
                </div>

                <div className="mb-6 flex gap-6">
                    <button
                        onClick={() => setIsCreating(true)}
                        className={`rounded-lg px-6 py-3 font-medium transition-all ${isCreating ? "bg-blue-500 text-white shadow-md" : "bg-white text-gray-700 hover:bg-gray-50"}`}
                    >
                        <i className="fas fa-plus-circle mr-2"></i>Create
                        Product
                    </button>
                    <button
                        onClick={() => setIsCreating(false)}
                        className={`rounded-lg px-6 py-3 font-medium transition-all ${!isCreating ? "bg-blue-500 text-white shadow-md" : "bg-white text-gray-700 hover:bg-gray-50"}`}
                    >
                        <i className="fas fa-list mr-2"></i>View Products
                    </button>
                </div>

                {isCreating ? (
                    <div className="mb-8 rounded-2xl bg-white p-6 shadow-xl">
                        <div className="mb-6">
                            <h2 className="text-2xl font-bold text-gray-800">
                                Create New Product
                            </h2>
                            <p className="text-gray-600">
                                Fill in the details to add a new product to your
                                catalog
                            </p>
                        </div>

                        <form className="space-y-6">
                            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                <div className="space-y-2">
                                    <label className="block text-sm font-medium text-gray-700">
                                        Product Name{" "}
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className="w-full rounded-lg border border-gray-300 px-4 py-3 transition-all duration-200 outline-none hover:border-gray-400 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                                        placeholder="Enter product name"
                                        required
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="block text-sm font-medium text-gray-700">
                                        Price ($){" "}
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <span className="absolute top-1/2 left-3 -translate-y-1/2 transform text-gray-400">
                                            $
                                        </span>
                                        <input
                                            type="number"
                                            name="price"
                                            value={formData.price}
                                            onChange={handleInputChange}
                                            step="0.01"
                                            min="0"
                                            className="w-full rounded-lg border border-gray-300 py-3 pr-4 pl-8 transition-all duration-200 outline-none hover:border-gray-400 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                                            placeholder="0.00"
                                            required
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700">
                                    Description{" "}
                                    <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    name="description"
                                    value={formData.description}
                                    onChange={handleInputChange}
                                    rows={3}
                                    className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 transition-all duration-200 outline-none hover:border-gray-400 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                                    placeholder="Describe your product in detail..."
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700">
                                    Quantity{" "}
                                    <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="number"
                                    name="quantity"
                                    value={formData.quantity}
                                    onChange={handleInputChange}
                                    min="0"
                                    className="w-full rounded-lg border border-gray-300 px-4 py-3 transition-all duration-200 outline-none hover:border-gray-400 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                                    placeholder="Enter quantity"
                                    required
                                />
                            </div>

                            <div className="flex gap-4 pt-4">
                                <button
                                    type="button"
                                    onClick={() =>
                                        setFormData({
                                            name: "",
                                            description: "",
                                            price: "",
                                            quantity: "",
                                        })
                                    }
                                    className="rounded-lg border border-gray-300 px-6 py-3 font-medium text-gray-700 transition-all duration-200 hover:bg-gray-50 active:scale-95"
                                >
                                    Clear Form
                                </button>
                                <button
                                    onClick={handleCreateProduct}
                                    type="submit"
                                    className="transform rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 px-6 py-3 font-medium text-white shadow-md transition-all duration-200 hover:scale-105 hover:from-blue-600 hover:to-indigo-700 active:scale-95"
                                >
                                    Create Product
                                </button>
                            </div>
                        </form>
                    </div>
                ) : (
                    <div className="rounded-2xl bg-white p-6 shadow-xl">
                        <div className="mb-6">
                            <h2 className="text-2xl font-bold text-gray-800">
                                Product List
                            </h2>
                            <p className="text-gray-600">
                                All products in your inventory
                            </p>
                        </div>

                        {products.length === 0 ? (
                            <div className="py-12 text-center">
                                <i className="fas fa-box-open mb-4 text-4xl text-gray-300"></i>
                                <h3 className="text-xl font-medium text-gray-500">
                                    No products yet
                                </h3>
                                <p className="mt-2 text-gray-400">
                                    Create your first product to get started
                                </p>
                                <button
                                    onClick={() => setIsCreating(true)}
                                    className="mt-4 rounded-lg bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-600"
                                >
                                    Create Product
                                </button>
                            </div>
                        ) : (
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead>
                                        <tr className="bg-gray-50 text-left font-medium text-gray-500">
                                            <th className="px-4 py-3">
                                                Product Name
                                            </th>
                                            <th className="px-4 py-3">
                                                Description
                                            </th>
                                            <th className="px-4 py-3">Price</th>
                                            <th className="px-4 py-3">
                                                Quantity
                                            </th>
                                            <th className="px-4 py-3">
                                                Actions
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200">
                                        {products.map((product) => (
                                            <tr
                                                key={product.id}
                                                className="transition-colors hover:bg-gray-50"
                                            >
                                                <td className="px-4 py-3 font-medium text-gray-900">
                                                    {product.name}
                                                </td>
                                                <td className="px-4 py-3 text-gray-700">
                                                    {product.description}
                                                </td>
                                                <td className="px-4 py-3">
                                                    <span className="rounded-full bg-blue-100 px-2 py-1 text-sm font-medium text-blue-800">
                                                        $
                                                        {product.price.toFixed(
                                                            2
                                                        )}
                                                    </span>
                                                </td>
                                                <td className="px-4 py-3">
                                                    <span
                                                        className={`rounded-full px-2 py-1 text-sm font-medium ${product.quantity > 10 ? "bg-green-100 text-green-800" : product.quantity > 0 ? "bg-yellow-100 text-yellow-800" : "bg-red-100 text-red-800"}`}
                                                    >
                                                        {product.quantity} in
                                                        stock
                                                    </span>
                                                </td>
                                                <td className="px-4 py-3">
                                                    <button
                                                        onClick={() =>
                                                            handleDeleteProduct(
                                                                product.id
                                                            )
                                                        }
                                                        className="text-red-500 transition-colors hover:text-red-700"
                                                    >
                                                        <FaTrash fill="blue" />
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductManagement;
