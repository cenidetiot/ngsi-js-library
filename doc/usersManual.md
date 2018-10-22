# Introduction
Welcome to the User & Programmers Manual of the NGSI Library. Any feedback about the implementation and usage of the library or contributions are welcome, including bug reports or proposals of functionalities that are not included in the library. You can send us these and another relevant comments through the repository of the library in Github, in form of issues or pull request.

# Import the NGSI library modules in a JavaScript project
Currently, existing two ways of import a npm module in a JavaScript project. The way the npm module is imported will depend of the ECMAScript standard used in the project. The next sections explain how to import the modules ngsi-parser and ocb-sender in a JavaScript project depending of the ECMAScript standard used.

## ES5 (ECMAScript 5)
Using ES5 standard in a JavaScript project, you can import the ngsi-parser or ocb-sender module into a JavaScript file by writing the following line of code, where **require** refers to the module name, and **var** defines the reference variable to call the module. For example:
```js
	var ngsi = require('ngsi-parser')
```
```js
	var ngsi = require('ocb-sender')
```

## ES6 (ECMAScript 6)
On the other hand, using the ES6 standard in a JavaScript project, you can import the ngsi-parser or ocb-sender module in a JavaScript file through the import sentence. For example:
```js
	import NGSI as ngsi from 'ngsi-parser'
```
```js
    import OCB as cb from  ocb-sender;
```