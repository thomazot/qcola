import React, { Component } from "react";
import Image from './image';
import { ProductContainer, ProductImage } from './styled';
import Variants from 'React:Modules/variants';

export default class Product extends Component {

    componentDidMount() {
        // console.log(this.props);
    }

    render() {
        const { product } = this.props;

        return <ProductContainer>
            <ProductImage>
                <Image images={ product.ProductImage } />
            </ProductImage>
            <Variants id={ product.id } />
        </ProductContainer>;
    }
}