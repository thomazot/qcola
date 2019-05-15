/**
 * Currency
 * @param {string} currency 
 */
export const currency = (coin) => {
    return coin.toLocaleString("pt-BR", { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' });
}

/**
 * Dispatch Event
 * @param {string} NAME 
 */
export const dispatchEvent = (NAME) => {
    const evt = new Event(NAME);
    return document.dispatchEvent(evt);
}

/**
 * Listener Event
 * @param {string} NAME 
 * @param {function} CB 
 */
export const listenerEvent = (NAME, CB) => {
    return document.addEventListener(NAME, CB, false); 
}