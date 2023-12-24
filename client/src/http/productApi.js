import { $authHost, $host } from ".";

export const getAllProduct = async () => {
    const {data} = await $host.get('api/product/all')
    return data
}

export const createProduct = async (product) => {
    const {data} = await $authHost.post('api/product/create', product)
    return data
}

export const getOneProduct = async (id) => {
    const {data} = await $host.get('api/product/' + id)
    return data
}