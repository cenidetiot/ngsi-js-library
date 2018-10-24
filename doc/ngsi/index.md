# NGSI-parser module

ngsi-parser is a npm module that analyzes the syntax of simple JSONs (entities, attributes or attribute values) and converts them into NSGI objects that represent a well-defined context entity or data model.

* [Data type suported](#data-type-supported)
* [Modules Usage](#modules-usage)

## Data types supported
The ngsi-parser module supports the attributes types described in the NGSI specification. For more information about the NGSI Attribute’s types please refer to the Specification section in the NGSI API documentation. 
The next table shows the relation between the data types commonly used for manipulating variables in several programming languages and its corresponding equivalent in the NGSI data types; this relation depends of the value type used for the NGSI attribute.

**Data Types Supported Table.**

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

The special attributes described in the NGSI specification, such as: geo:point, geo:line, geo:polygon and geo:box, will must be specified as data type of the attribute in the definition of an entity.

## Module Usage
The ngsi-parser module is composed by the elements described in the architecture of the library section. These elements are the JSON parser, the Queries parser and the Data Models Schema Analyzer, which are explained in greater depth in the following sections.
It is important to mention that, before to implement the functionalities of ngsi-parser module you must import this module in your JavaScript project, as explained the section [Import the NGSI library modules in a JavaScript project](../usersManual.md).

* [JSON Parser Functions](docs/JSONParser.md)
* [Queries Parser Functions](docs/QueriesParser.md)
* [Data Models Schema Analyzer](docs/SchemasAnalizer.md)


