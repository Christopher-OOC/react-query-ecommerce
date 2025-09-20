import { supabase } from "./supabase";

export async function getProducts() {
    const { data, error } = await supabase.from("products").select("*");

    if (error) {
        throw new Error("Error occurs while fetching products!");
    }

    return data;
}

export async function createProduct(requestBody) {
    const { data, error } = await supabase
        .from("products")
        .insert([requestBody])
        .select();

    if (error) {
        throw new Error("Error occurs while creating products!");
    }

    return data;
}
