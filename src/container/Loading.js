import React from 'react';
import {connect} from 'redux';

import img from '../'

let Loading = ({loading})=> (
    loading ?
    <div style= {{ textAlign: 'center'}}>
        <img src={img} alt='loading'/>        
    </div>
    :
    null
);
const mapStateToProps = (state) => ({
        loading: state.loading
})

Loading = connect(mapStateToProps,null)(Loading);
export default Loading;