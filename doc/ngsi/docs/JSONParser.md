# JSON Parser Functions
The component JSON parser analyzes the content of complete JSON entities, JSON entity attributes or attributes values, and converts them in objects with FIWARE-NSGIv2 format. The functions of this component are the following:

* [Parsing an Attribute Value](#parsing-an-attribute-value)
* [Parsing an Attribute](#parsing-an-attribute)
* [Parsing an Entity](#parsing-an-entity)
* [Types of errors with invalid inputs](#types-of-errors-with-invalid-inputs)

### Parsing an Attribute Value
When you want to parse an attribute value to the format NGSI, you can use the `parseValue()`
function. This function receives as a parameter the value of the attribute, the data type of this attribute value must be a data type supported by the ngsi-parser module described in this [section](../index.md#data-types-supported).
Example:
```js
	var value = ngsi.parseValue(50)
```
Output:
```json
	{
		"value": 50,
		"type": "Number",
		"metadata": {}
	}
```
### Parsing an Attribute
An attribute NGSI of a context entity can include metadata or not. These metadata describe additional characteristics of the attribute. Next sections present two situations for parsing and converting the JSON attributes to NGSI attributes.

#### Attribute without metadata 
When you want to convert an attribute without metadata to a NGSI attribute, you can use the `parseAttrs()` function. This function receives as parameter a JSON with the name and value of the attribute. For example in the next fragment of code, the `parseAttrs()` function receives as parameter a JSON with the attribute `temperature` with value of `50`.
``` js
    var attribute = ngsi.parseAttrs({
        temperature : 50
    })
```
The `parseAttrs()` function returns the attribute `temperature` with value of `50` converted in an attribute with NGSI format.
Output
``` json
{     
 "temperature":{
    "value":50,
    "type":"Number",
    }
}
```
#### Attribute with metadata 
When you want to convert an attribute with metadata to a NGSI attribute, you can use the `parseAttrs()` function as the example above, but in the definition of the attribute you must include the metadata. For example, in the next fragment of code, the `parseAttrs()` function receives as parameter a JSON with the following: the attribute `temperature` with value of `50`; and as metadata of this attribute, the attribute `frequency` with value of `50`, and the attribute `scale` with value `Fahrenheit`.
```js
	var attribute = ngsi.parseAttrs({
		temperature : {
			value : 50,
			metadata :{
				frequency : 50,
				scale: 'Fahrenheit'
			}
		}
	})
```
The `parseAttrs()` function returns the attribute `temperature` and its metadata converted to the NGSI format. 
Output
```json
	{
		"temperature":{
			"value":50,
			"type":"Number",
			"metadata":{
				"frecuency":{
					"value":50,
					"type":"Number"
				},
				"scale":{
					"value":"Fahrenheit",
					"type":"Text"
				}
			}
		}
	}

```
### Parsing an Entity
When you want to convert a complete JSON entity, you can use the `parseEntity()` function. The `parseEntity()` function receives as parameter the JSON object of a non-structured context entity, and returns this same JSON object but converted in a NGSI entity. In the next example, the `parseEntity()` function receives the JSON of the entity with `id`: `Room1`, and its attributes `temperature` and `dateCreated`. 

```js
	var entity = ngsi.parseEntity({
		id :'Room1',
		type:'Room',
		temperature : {
			value : 50 ,
			metadata : {
				frecuency: 40,
				scale: 'Celsious'
			}
		},
		dateCreated: new Date()
	})
```
The `parseEntity()` function retunrs the JSON entity with `id`: `Room1` converted in a NGSI entity.
Output
```json
	{
		"id":"Room1",
		"type":"Room",
		"temperature":{
			"value":50,
			"type":"Number",
			"metadata":{
				"frecuency":{
					"value":40,
					"type":"Number"
				},
				"scale":{
					"value":"Celsious",
					"type":"Text"
				}
			}
		},
		"dateCreated":{
			"value":"2017-10-08T04:01:19.560Z",
			"type":"DateTime",
			"metadata":{}
		}
	}

```
### Types of errors with invalid inputs

#### parseValue() function
The `parseValue()` function expects by default a valid NGSI data type. This function returns the following error to an invalid input:
**Data Type not supported, please check the Data Types Supported in https://ngsi-js-library.readthedocs.io/en/latest/ngsi/**

An example of invalid input is the following: 
```js
ngsi.parseValue(undefined)
```
An example of valid input is the following:
```js
ngsi.parseValue("ok")
```

#### parseAttrs() function
The `parseAttrs()` function expects by default a JSON as input. This function returns the followings errors to invalid inputs.

1. **ngsi.parseAttrs({ attrName: undefined})**. This is an invalid input where is not defined the valid NGSI data type for the attribute. In this case, the `parseAttrs()` function returns the error: ***Data Type not supported, please check the Data Types Supported in https://ngsi-js-library.readthedocs.io/en/latest/ngsi/***
2. **ngsi.parseAttrs(0)**. This is an invalid input where is not defined a JSON as parameter of the `parseAttrs()` function. In this case, the functions returns the error: ***Expected JSON***.

An example of valid input for the `parseAttrs()` function is the following:
```js
ngsi.parseAttrs({}) //OK
```

#### parseEntity() function
The `parseEntity()` function expects by default the definition of an entity through a JSON. The list of invalid inputs to this function is the following:

1. **ngsi.parseEntity(0)**. The `parseEntity()` expected a JSON as parameter. The error returned is: ***Expected JSON***
2. **ngsi.parseEntity({})**. The `parseEntity()` receives an empty input. This invalid input returns the error: ***Missing id**
3. **ngsi.parseEntity({id : "Room5"})**. The `parseEntity()` receives a JSON only with the id of the entity. This invalid input returns the error: ***Missing type***
4. **ngsi.parseEntity({id : "Room3", type : "Room", other : undefined})**. The `parseEntity()` receives an entity with an attribute `undefined`. This invalid input returns the error: ***Data Type not supported, please check the Data Types Supported in https://ngsi-js-library.readthedocs.io/en/latest/ngsi/***

An example of valid input for the `parseEntity()` function is the following:
```js
ngsi.parseEntity({id : "Room2", type : "Room"}) // OK
```