import styled from 'styled-components';

export const Header = styled.header`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 45px;
    height: 45px;
    cursor: pointer;

    i {
        font-size: 24px;
        color: #4c989f;
    }
    span {
        display: none;
    }
    small {
        position: absolute;
        top: 0;
        right: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 17px;
        height: 17px;
        border-radius: 50%;
        font-size: 9px;
        font-weight: regular;
        background: #000;
        box-shadow: 0 0 0 2px #fff;
        color: #fff;
    }

    
`;
export const Main = styled.div``;
export const List = styled.div`
    margin: -10px;
    max-height: 300px;
    overflow-y: auto;
`;

export const ItemImage = styled.div`
    flex: 0 0 50px;
    margin-right: 10px;
`;
export const ItemContent = styled.div`
    flex: 1;
    min-width: 0;
    position: relative;
    display: flex;
    flex-flow: row wrap;
    color: #A6AAB5;
`;
export const ItemName = styled.a`
    flex: 0 0 100%;
    min-width: 0;
    max-width: calc(100% - 30px);
    font-size: 12px;
    color: #A6AAB5;
    text-decoration: none;
    &:hover {
        text-decoration: none;
    }
`;
export const ItemQuantity = styled.div`
    flex: 0 0 30px;
    font-size: 10px;
`;
export const ItemPriceUni = styled.div`
    flex: 0 0 50%;
    min-width: 0;
    font-size: 12px;
    font-weight: 400;
`;
export const ItemPrice = styled.div`
    flex: 0 0 50%;
    min-width: 0;
    text-align: right;
    font-size: 12px;
    font-weight: 700;
    color: #50A7B0;
`;
export const ItemRemove = styled.button`
    position: absolute;
    left: -10px;
    top: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    padding: 0;
    border-radius: 3px;
    visibility: hidden;
    background: #fff;
    box-shadow: 0 0 10px rgba(0,0,0,.1);
    transform: translateY(-50%) translate3d(-100%, 0, 0);
    transition: all .2s ease-in-out;

    i {
        font-size: 18px;
        color: #f00;
        margin-right: -4px;
    }

    span {
        display: none;
    }

    &:hover {
        background: #fff;
    }
`;
export const Footer = styled.footer`
    font-size: 14px;
    font-weight: bold;
    padding: 15px 0;
    margin-top: 15px;
    text-align: center;
    border-top: solid 1px rgba(0,0,0,.05);
    color: #50A7B0;

    button {
        width: 100%;
        text-align: center;
        text-transform: uppercase;
        background: #51B177;
        color: #fff;
        border-radius: 3px;
        margin-top: 15px;
    }
`;
export const Resume = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    padding: 20px;
    background: #fff;
    box-shadow: 0 0 20px rgba(0,0,0,.1);
    opacity: 0;
    visibility: hidden;
    overflow: hidden;

    transition: all .2s ease-in-out;

    @media (max-width: 991px) {
        [aria-hidden=false] & {
            opacity: 1;
            visibility: visible;
        }
    }

    @media (min-width: 992px) {
        position: absolute;
        top: 100%;
        width: 300px;
        height: auto;
        border-radius: 10px;
    }
`;

export const ItemContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-bottom: solid 1px rgba(0,0,0,.05);

    &:last-child {
        border-bottom: 0;
    }

    &:hover ${ ItemRemove } {
        opacity: 1;
        visibility: visible;
        transform: translateY(-50%) translate3d(0, 0, 0);
    }
`;

export const Container = styled.section`
    @media (min-width: 992px) {
        position: relative;

        &:hover ${ Resume } {
            opacity: 1;
            visibility: visible;
        }
        @media (min-width: 992px) {
            &:hover:after {
                content: '';
                position: absolute;
                top: 100%;
                left: 50%;
                width: 15px;
                height: 15px;
                background: #fff;
                margin-top: -5px;
                transform: translateX(-50%) rotate(45deg);
                border-radius: 3px;
            }
        }
    }
`;

export const Empty = styled.div`
    font-size: 14px;
    font-weight: 700;
    padding: 20px 0;
    text-align: center;
`;

export const ButtonClose = styled.button`

`;

export const Title = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;

    h3 {
        font-size: 16px;
        font-weight: 700;
        color: #50A7B0;
    }

    @media (min-width: 992px) {
        ${ ButtonClose } {
            display: none;
        }
    }
`;