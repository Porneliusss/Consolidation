import { $authHost, $host } from ".";

export const getAllConsolidation = async () => {
    const {data} = await $host.get('api/consalidation')
    return data
}

export const createConsolidation = async (consolidation) => {
    const {data} = await $authHost.post('api/consalidation/create', consolidation)
    return data
}

export const changeStatus = async (id, status) => {
    const {data} = await $authHost.post('api/consalidation/updStatus/' + id, status)
    return data
}

export const getConsolidationByOrderId = async (id) => {
    const {data} = await $authHost.get('api/consalidation/orderStatus/' + id)
    return data
}

export const getAllAddreses = async () => {
    const {data} = await $authHost.get('api/consalidation/getAddresses')
    return data
}

export const delConsalidation = async (id) => {
    const {data} = await $host.get('api/consalidation/del' + id)
    return data
}

export const updateStatus = async (id, status) => {
    const {data} = await $host.post('api/consalidation/updStatus/' + id, status)
    return data
}

