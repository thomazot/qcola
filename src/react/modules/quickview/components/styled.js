import styled, { css } from 'styled-components';

export const ButtonClose = styled.button`
    position: absolute;
    top: -50px;
    right: 0;
    width: 45px;
    height: 45px;
`;

export const Inner = styled.div`
    position: relative;
    z-index: 20;
    margin: 50px;
`;

export const ButtonContainer = styled.button`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
    background: rgba(0,0,0,.5);  

    &:hover {
        background: rgba(0,0,0,.5);
    }
`;

export const openContainer = css`
    opacity: 1;
    visibility: visible;
`;

export const closeContainer = css`
    opacity: 0;
    visibility: hidden;
`;

export const Container = styled.section`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 400;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    visibility: hidden;
    opacity: 0;
    ${ (props) => props.show ? openContainer : closeContainer };
`;

export const ProductContainer = styled.div`
    padding: 20px;
    background: #fff;
    box-shadow: 0 0 10px rgba(0,0,0,.1);
    max-height: 80vh;
    overflow: auto;
`;

export const ProductImage = styled.div`
`;