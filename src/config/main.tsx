/*
* @LastEditors: Mark
 * @Description: none
 * @Author: Mark
 * @Date: 2019-05-14 16:35:05
* @LastEditTime: 2019-05-17 13:42:27
 */
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { printVersion } from './baseUrl';
import 'react-app-polyfill/ie9';
import 'normalize.css';
import '@/assets/style/reset.less';
import BaseRouter from './BaseRouter';

printVersion();

ReactDOM.render(<BaseRouter />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
