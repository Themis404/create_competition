import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as queryString from 'query-string';

class BaseComponent extends React.Component {
    constructor(params) {
        super(params);
    }

    get redirect() {
        return this._redirect;
    }

    set redirect(redirect) {
        this._redirect = redirect;
        this.reload = true;
        this.forceUpdate();
    }

    /**
     * Перейти в стэйт
     * @param {String} stateName
     */
    goToState(stateName, params = null) {
        if (!stateName) {
            return;
        }
        let stateQueryString = queryString.stringify(params);
        window.scrollTo(0, 0);
        this.redirect = {
            pathname: stateName,
            search: stateQueryString ? '?' + stateQueryString : null
        };
    }

    render() {
        return (
          <div></div>
        );
    }
}

export default BaseComponent;
