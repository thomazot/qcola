import React, { Component } from "react";

export default class Image extends Component {
    state = {
        index: 0
    };

    render() {
        const { index } = this.state;
        const { images } = this.props;

        return <React.Fragment>
            { images.length ? <div>
                <img src={ images[index].http.replace('http:', '') } />  
            </div> : <div>
                
            </div> }

            <div>{ images.map((image, i) => <div onClick={ () => this.setState({ index: i }) } key={ i }><img src={ image.http.replace('http:', '') } /></div>) }</div>
        </React.Fragment>;
    }
}