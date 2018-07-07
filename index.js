import React from 'react';
import ReactDOM from 'react-dom';
import App from '/src/App.js';
ReactDOM.render(App, document.getElementById('root'));

const render = (Component) => {
    ReactDOM.render(<Component />, document.getElementById('root'));
};

render(App);
