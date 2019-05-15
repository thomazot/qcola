import React, { Component } from "react";
import { getCart, getHash, getStore } from 'React:Actions';
import { Container, Header, Main, Footer, List, Resume, Empty, Title, ButtonClose } from './styled';
import { CART_UPDATE } from 'Config/events';
import { currency, listenerEvent } from 'Plugins';
import Item from './item';

export default class Minicart extends Component {

    state = {
        amount: '0',
        price: '0.00',
        products: [],
        hidden: true,
        hash: '',
        store: ''
    }

    async componentDidMount() {
        const hash = await getHash();
        const store = await getStore();
        this.update();   
        listenerEvent(CART_UPDATE, () => this.update(), false); 
        this.setState({ hash, store });
    }

    async update() {
        const products = await getCart();
        const amount = products.map((product) => parseInt(product.quantity)).reduce((a, b) => a + b, 0);
        const price = products.reduce((a, b) => a + (parseInt(b.quantity) * parseFloat(b.price) ), 0.00);

        this.setState({ products, amount, price });
    }

    render() {
        const { amount, price, products, hidden, store, hash } = this.state;

        return <Container aria-hidden={ hidden }>
            <Header onClick={ () => this.setState({ hidden: !hidden }) }>
                <svg className="icon icon--cart" width="29" height="27">
                    <use xlinkHref="#cart"></use>
                </svg>
                <span>Menu Carrinho</span>
                <small>{ amount }</small>
            </Header>
            <Resume>
                { amount ? <React.Fragment>
                    <Title>
                        <h3>Meu Carrinho</h3>
                        <ButtonClose type="button" onClick={ () => this.setState({ hidden: !hidden }) }>
                            <i className="fas fa-times"></i>
                        </ButtonClose>
                    </Title>
                    <Main>  
                        <List>
                            { products.map((product) => <Item key={ `${product.product_id}${product.variant_id}` } product={ product } />) }
                        </List>
                    </Main>
                    <Footer>
                        Total: { currency(price) }
                        <button type="button" onClick={ () => window.href = `/checkout/cart?session_id=${ hash  }&store_id=${ store }#carrinho` }>Finalizar a Compra</button>
                    </Footer>
                </React.Fragment> : <React.Fragment> 
                    <Empty>
                        Ops! Seu carrinho está vazio.
                    </Empty>
                </React.Fragment>}
            </Resume>
        </Container>;
    }
}