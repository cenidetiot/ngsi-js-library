#Implementation of OCB-sender module in Mobile Apps

The implementation of ocb-sender npm module in the development of mobile apps involve a little change in the code of the module. Once you have downloaded the ocb-sender npm module inside in your project, you should to redirect to the node_modules folder and then, inside of this folder, search the folder of the ocb-sender package. When you have located the folder of ocb-sender package, search inside of this one the lib folder. In the lib folder of ocb-sender package is the file OCB.js, open this file and comment the following line:

```js
    var fetch = require('node-fetch');
```

## Example

![OCB-sender usage in Mobile Apps](../../images/ocb-senderUsageMA.png)

In the Future, this issue in ocb-sender npm package could have support so that the user does not have to modify the OCB.js file.










