const { HelloWorld } = window.App
/* With ES6 modules, this would be:
 * import react from 'react';
 * import react-dom from 'react-dom';
 * import HelloWorld from 'components/hello-world';
 */

ReactDOM.render(<HelloWorld />, document.getElementById("app"));
