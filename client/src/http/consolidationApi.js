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

export const createCar = async (car) => {
    const {data} = await $host.post('api/car/create/', car)
    return data
}


export const getInitPacks = async () => {
    const {data} = await $authHost.get('api/package/getInit')
    return data
}

export const getAllCars = async () => {
    const {data} = await $authHost.get('api/car/getAll')
    return data
}

export const getCarsNonZero = async () => {
    const {data} = await $host.get('api/car/nonzero-status/')
    return data
}

export const connectCarPack = async (data) => {
    const {res} = await $authHost.post('api/package/carPack', data)
    return res 
}

export const delPackage = async (id) => {
    const {res} = await $authHost.get('api/package/del/' + id)
    return res
}

export const getCarPackage = async (id) => {
    const {data} = await $authHost.get('api/package/carPack/' + id)
    return data 
}

export const createWayBill = async (data) => {
    const {res} = await $authHost.post('api/package/wayBill/create', data)
    return res 
}

export const getAllBills = async () => {
    const {data} = await $authHost.get('api/consalidation/wayBills/all')
    return data 
}

export const updStatus = async (id, status) => {
    const {data} = await $authHost.post('api/package/updStatus/' + id, status)
    return data 
}