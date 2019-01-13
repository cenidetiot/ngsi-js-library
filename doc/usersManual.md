# Introduction
Welcome to the User & Programmers Manual of the NGSI Library. Any feedback about the implementation and usage of the library or contributions are welcome, including bug reports or proposals of functionalities that are not included in the library. You can send us these and another relevant comments through the repository of the library in Github, in form of issues or pull request.

# Import the NGSI library modules in a JavaScript project
You can import npm modules in a server-side JavaScript project in two ways, using the ECMAScript 5 or the ECMAScript 6. The next sections explain how to import the npm modules ngsi-parser and ocb-sender in a JavaScript project depending of the ECMAScript standard used.

## ES5 (ECMAScript 5)
The standard ECMAScript 5 provides the reserved words `var` and `require` for importing npm modules in JavaScript project. Using this standard, you can import the ngsi-parser and ocb-sender module typing the next lines of code:  
```js
	var ngsi = require('ngsi-parser')
```
```js
	var ocb = require('ocb-sender')
```

## ES6 (ECMAScript 6)
The standard ECMAScript 6 provides the reserved words `import`, `as` and `from` for importing npm modules in a JavaScript project. Using this standard, you can import the ngsi-parser or ocb-sender module through the next lines of code:
```js
	import NGSI as ngsi from 'ngsi-parser'
```
```js
    import OCB as cb from 'ocb-sender';
```
