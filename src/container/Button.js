import React from 'react';
import {connect} from 'redux';

import {getProduct} from '../action';

let Button = ({getProduct})=> (
    <div>
    <center>
    <button onClick={getProduct} className="btn btn-danger">
        Press the Button to display the Product List
        </button>
        </center>
        </div>
)
const mapDispatchToProps = {
        getProduct: getProduct,
};

Button = connect(null,mapDispatchToProps)(Button);
//connect(mapping of the state to props, mapping the dispatch to props, combining all the props,
//options)

// It is function we use to make a connection with the component(Button) and your store.

export default Button;
