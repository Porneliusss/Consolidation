import { $authHost, $host } from ".";

export const getAllProvider = async () => {
    const {data} = await $host.get('api/provider')
    return data
}

export const createProvider = async (provider) => {
    const {data} = await $authHost.post('api/provider/create', provider)
    return data
}

export const deleteProvider = async (id) => {
    const {data} = await $host.get('api/provider/delete/' + id)
    return data
}