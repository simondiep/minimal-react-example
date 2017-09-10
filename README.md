# Minimal React Example

No server, no build, just React on your browser.

# Try it locally

Start up an http server and navigate to index.html

With Node:
- `npm install http-server`
- `node node_modules/http-server/bin/http-server`
- Open a browser to `localhost:8080`

# Notes

As this is a basic React example, all dependencies (babel, react) are specified in the index.html
Module loading is not present for simplicity. React and defined components are shared on the window Object.
As of Sept 10 2017, there is not yet support for import/require for babel-standalone.  Use create-react-app if you will be using dependencies.
