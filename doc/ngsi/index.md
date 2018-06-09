# NGSI-parser

ngsi-parser is a npm module for parsing and converting a simple JSON or value to a NSGI-compliant object

----------

## Index navigation

* [Data type suported](#usage)
* [How to Install](#how-to-install)
* [Import npm module](#import-npm-module)
* [Module Usage](#module-usage)
	* [Entities Functions](docs/EntitiesFunctions.md)
	* [Context Queries](docs/ContextQueries.md)
	* [Schema Analizer](docs/SchemaAnalizer.md)
* [License](#license)

## Data types suported

If value is a **string**, then type **Text** is used.
If value is a **number**, then type **Number** is used.
If value is a **boolean**, then type **Boolean** is used.
If value is **Date**, then **DateTime** is used.
If value is an **object** or **array**, then **StructuredValue** is used.
If value is **null**, then **None** is used.

## How to Install

    npm install ngsi-parser 
    
   	or
   
	yarn add ngsi-parser

### Import npm module

#### ES5 
```js
	var ngsi = require('ngsi-parser')
```

#### ES6 
```js
	import NGSI as ngsi from 'ngsi-parser'
```

#### License 

MIT 
