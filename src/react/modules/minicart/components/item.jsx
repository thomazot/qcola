import React, { Component } from "react";
import { deleteCart } from 'React:Actions';
import { currency } from 'Plugins';
import { ItemContainer, ItemName, ItemQuantity, ItemPriceUni, ItemPrice, ItemRemove, ItemImage, ItemContent } from './styled';

export default class Item extends Component {

    delete = async () => {
        const { product } = this.props;
        let productID = product.product_id;
        const variantID = product.variant_id;

        await deleteCart(productID, variantID);
    }

    render() {
        const { product_name, product_image, product_url } = this.props.product;
        const price = parseFloat(this.props.product.price);
        const quantity = parseInt(this.props.product.quantity);

        let image;
        
        if(Object.keys(product_image).length){
            image = product_image.thumbs[180].http;

            if(document.location.protocol.indexOf('https') !== -1) 
                image = product_image.thumbs[180].https;
        }

        return <ItemContainer>
            <ItemImage>
                { typeof image !== 'undefined'
                    ? <img  src={ image } alt={ product_name } title={ product_name } /> 
                    : <img  src={ `${ tray.settings }img/no-image.svg` } alt={ product_name } title={ product_name } /> }
            </ItemImage>
            <ItemContent>
                <ItemName href={ product_url.http.replace('http:', '') } dangerouslySetInnerHTML={{__html: product_name}}></ItemName> 
                <ItemQuantity>{ quantity } <small>qtde.</small></ItemQuantity>
                <ItemPriceUni>{ currency(price) } <small>uni.</small></ItemPriceUni>
                <ItemPrice>{ currency(quantity * price) }</ItemPrice>
            </ItemContent>
            <ItemRemove type="button" onClick={ this.delete } > 
                <i className="fas fa-trash"></i>
                <span>Remover</span>
            </ItemRemove>
        </ItemContainer>;
    }
}