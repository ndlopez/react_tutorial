import React, {Component} from 'react';
import { createRoot } from 'react-dom/client';
//import ReactDOM from 'react-dom'; No longer supported
import App from './App';//employees table
//import App from './Api'; //fetched data from API

import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App/>);