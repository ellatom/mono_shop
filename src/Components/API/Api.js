import axios from 'axios';

const instance =
    axios.create({ baseURL: `https://fedtest.monolith.co.il`});
async function getAllProducts() {
    const response = await (await instance.get(`/api/catalog/getAll`)).data;
    return response;
}
async function getProductByID(id) {
    const response = await (await instance.get(`/api/catalog/get?id=${id}`)).data;
    return response;
}
async function getProductImage(image, width, height, quality) {
    const productURL = `https://fedtest.monolith.co.il/api/imager.php?url=${image}&type=fit&width=${width}&height=${height}&quality=${quality}`;
    return productURL;
}
async function addToCart(variant_id, quantity){
    const response = await (await instance.get(`/api/cart/add?variant_id=${variant_id}&quantity=${quantity}`)).data;
    return response;
}


export default {
    getAllProducts,
    getProductByID,
    getProductImage,
    addToCart
};