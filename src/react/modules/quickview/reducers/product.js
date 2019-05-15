const INIT_PRODUCT = [];

export const product = (state = INIT_PRODUCT, action) => {
    switch(action.type) {
        case 'QUICKVIEW_PRODUCT':
            return action.product;
        default: 
            return state;
    }
}