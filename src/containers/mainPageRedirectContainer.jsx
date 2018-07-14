import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class MainPageRedirect extends Component {
    constructor(params) {
        super(params);
    }

    render() {
        return <Redirect to="/main" push={true} />;
    }
}

export default MainPageRedirect;
