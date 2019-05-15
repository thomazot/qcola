import { getProduct } from 'React:Actions';

const INIT_PRODUCT = [];

export const Load = () => {
    return (dispatch) => {
        const buttons = Array.from(document.querySelectorAll('[data-quickview]'));

        buttons.forEach(button => {
            button.addEventListener('click', async (evt) => {
                const id = evt.currentTarget.getAttribute('data-quickview');
                
                // Reset: product and Show
                dispatch(Product(INIT_PRODUCT));
                dispatch(Show(false));
                
                const product = await getProduct(id);
                
                // Set new values
                dispatch(Product(product));
                dispatch(Show(true));
            });
        })
    }
}

export const Product = (product) => {
    return {
        type: 'QUICKVIEW_PRODUCT',
        product
    }
}

export const Show = (show) => {
    return {
        type: 'QUICKVIEW_SHOW',
        show
    }
}