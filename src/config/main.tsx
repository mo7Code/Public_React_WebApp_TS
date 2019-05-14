/*
 * @LastEditors: Mark
 * @Description: none
 * @Author: Mark
 * @Date: 2019-05-14 16:35:05
 * @LastEditTime: 2019-05-14 17:51:59
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import * as serviceWorker from '../serviceWorker';

ReactDOM.render( <App />, document.getElementById( 'root' ) );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();