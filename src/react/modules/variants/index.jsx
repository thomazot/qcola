import React, { Component } from "react";
import { getVariants } from "React:Actions";

export default class Variants extends Component {
    state = {
        variants: []
    }

    async componentDidMount() {
        const variants = await getVariants(this.props.id);
        this.setState({ variants });
        // console.log(variants);
    }

    render() {
        const { variants } = this.state;
        // const skus = variants.map((variant) => variant.Sku);
        // console.log(skus);

        return <React.Fragment></React.Fragment>;
    }
}