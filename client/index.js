/*
	This is the entry point for webpack
*/

import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import reducer from './reducers';
import SharedRoot from './containers/container';

let store = createStore(reducer);

const root = React.createFactory(SharedRoot);

render(root({
  store
}), document.getElementById('root')
)
