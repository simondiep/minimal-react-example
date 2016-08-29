const { HelloWorld } = window.App;
/* With ES6 Modules, it would be:
import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './components/hello-world';
*/

ReactDOM.render(<HelloWorld />, document.getElementById("app"));
