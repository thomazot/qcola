import axios from 'axios';
import { dispatchEvent } from 'Plugins';
import { CART_UPDATE } from 'Config/events';

const html = document.querySelector('html');
const store = html.getAttribute('data-store');

export const getStore = () => {
    return store;
}

export const getHash = async () => {    
    let hash;
    // if(html)    hash = await html.getAttribute('data-session');
    // if( typeof hash === 'null' || typeof hash === 'undefined' ) {
        const request = await axios.get(`/nocache/app.php?loja=${ store }`).then((result) => result.data);
        hash = request.hash;
    // }

    return hash;
}

export const getCart = async () => {
    try {
        const session = await getHash();
        let request = await axios.get(`/mvc/store/cart/count?loja=${ store }&hash=${ session }`).then((result) => result.data);

        if(parseInt(request.cart.amount)) {
            request = await axios.get(`/web_api/cart/${ session }`).then(result => result.data);
            return request.map((cart) => cart.Cart);
        }
        return [];
    } catch(e) {
        console.log('TRAY:CART - GET', e);
    }
}

export const deleteCart = async (productID, variantID) => {
    try {
        const session = await getHash();
        let url = `/web_api/carts/${ session }/${ productID }/${ variantID }/`;

        const request = await axios.delete(url);
        dispatchEvent(CART_UPDATE);

        return request;

    } catch (e) {
        console.log('TRAY:CART - DELETE', e);
    }
}

export const getProduct = async (productID) => {
    try {
        const result = await axios.get(`/web_api/products/${ productID }`).then((product) => product.data);
        return [result.Product];
    } catch(e) {
        console.log('TRAY:API - PRODUCT', e);
    }
}

export const getVariants = async(productID) => {
    try {
        const result = await axios.get(`/web_api/variants?product_id=${ productID }`).then((product) => product.data);
        return result.Variants.map((variant) => variant.Variant);
    } catch(e) {

    }
}