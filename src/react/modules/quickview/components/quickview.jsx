import React, { Component } from "react";
import { connect } from 'react-redux';
import { Load, Show } from '../actions';
import Product from './product';

import { Container, ButtonClose, Inner, ButtonContainer } from './styled';

class Quickview extends Component {
    componentDidMount() {
        this.props.Load();
    }
    handle = () => {
        this.props.Show(false);
    }
    render() {
        const { product, show } = this.props;
        return <Container show={ show }>
            <Inner>
                <ButtonClose onClick={ this.handle } type="button">Close</ButtonClose>
                {product.map((prod) => <Product key={ prod.id } product={ prod } ></Product>)}
            </Inner>
            <ButtonContainer onClick={ this.handle } type="button"></ButtonContainer>
        </Container>;
    }
}

const mapStateToProps = state => ({
    show: state.show,
    product: state.product
});

const mapDispatchToProps = (dispatch) => {
    return {
        Load: () => dispatch(Load()),
        Show: (show) => dispatch(Show(show))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Quickview);