# NGSI-parser module.

ngsi-parser is an npm module for analyzing and converting simples JSON (objects or values) into an NSGI object, that represents a well-defined context entity or data model. 

* [Data type suported](#data-type-supported)
* [Import the module in a Javascript Project](#import-the-module-in-a-javascript-project)
* [Modules Usage](#modules-usage)

## Data types supported
The ngsi-parser module supports the attributes types described in the NGSI specification. For more information about the NGSI Attribute’s types please refer to the Specification section in the NGSI API documentation. 
The table below shows the relation between the attributes types commonly used for manipulating data and its corresponding equivalent in the NGSI attribute types; this relation depends of the value type used for the attribute.

Data Types Supported Table

|Common Data Types | NGSI Data Types | 
|------------ | -------------
|String |  Text  |
|Float  |  Number  |
|Integer  |  Number  |
|Boolean  |  Boolean  |
|Date  |  DateTime  |
|Object  |  StructuredValue  |
|Array  |  StructuredValue  |
|Null  |  None  |

For the special type attributes described in the NGSI specification, such as: geo:point, geo:line, geo:polygon and geo:box, each one of these must be specified as the value type  of the attribute in the entity  definition.

## Import the module in a Javascript Project
To import an npm module in an existing JavaScript project there are two ways. This choice depends on the ECMAScript standard that used in the project.

#### ES5 (ECMAScript 5)
For import the module in the JavaScript file that uses the ES5 standard, write the following line to call the module: 

```js
	var ngsi = require('ngsi-parser')
```
#### ES6 (ECMAScript 6)
By other side, if in the JavaScript file is used the ES6 standard can be directly used the common import sentence for call the module:

```js
	import NGSI as ngsi from 'ngsi-parser'
```

## Modules Usage
The implementation of the ngsi-parser module be composed by the elements described in the architecture of the library. These elements are the JSON parser, the Queries parser and the Data Models Schema Analyzer.

* [JSON Parser Functions](docs/EntitiesFunctions.md)
* [Queries Parser Functions](docs/ContextQueries.md)
* [Data Models Schema Analyzer](docs/SchemaAnalizer.md)


