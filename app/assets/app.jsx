import React from 'react';
import { render } from 'react-dom';

function main (props) {
  return (<h1>HELLO WORLD></h1>)
}

render(React.createElement(main), document.getElementById('app'))
