const INIT_SHOW = false;

export const show = (state = INIT_SHOW, action) => {
    switch(action.type) {
        case 'QUICKVIEW_SHOW':
            return action.show;
        default: 
            return state;
    }
}