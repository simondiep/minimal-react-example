class HelloWorld extends React.Component {
  render() {
    return (
    	<h1>Hello, World!</h1>
	);
  }
}

window.App.HelloWorld = HelloWorld;
// With ES6 modules, this would be:
// export default HelloWorld;