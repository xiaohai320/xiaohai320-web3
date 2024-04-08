const path = require('path');

export default function nuxtjsWeb3 (moduleOptions) {
  this.addPlugin(path.resolve(__dirname, 'plugin.js'), moduleOptions);
}
