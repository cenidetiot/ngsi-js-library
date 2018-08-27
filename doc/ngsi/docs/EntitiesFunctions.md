# JSON Parser Functions

* [Parse a Value](#parse-a-value)
* [Parse an Attribute ](#parse-an-attribute)
* [Parse an Entity](#parse-an-entity)

### Parse an Attribute

To parse an attribute of an context entity it must be implemented the parseAttrs() function, which receives as parameter the JSON object corresponding to the attribute that wants to convert in a NGSI attribute.
For parse and convert a JSON attribute two cases are presented:
#### Case 1: JSON attribute without metadata 
This case occurs when you want to convert a JSON attribute to a NGSI attribute, but this attribute has not metadata included inside of it. In this case must be specified the name of the attribute followed by its value.  
Example:
``` js
    var attribute = ngsi.parseAttrs({
        temperature : 50
    })
```
Output
``` json
{     
 "temperature":{
    "value":50,
    "type":"Number",
    }
}
```
#### Case 2: JSON attribute with metadata included
In the case of JSON attributes with metadata attributes included, the metadata attributes must be written with its named following by its value. In addition, the father attribute must be written with its value, specified in this same attribute name.
Example

```js
	var attribute = ngsi.parseAttrs({
		temperature : {
			value : 50,
			metadata :{
				frecuency : 50,
				scale: 'Fahrenheit'
			}
		}
	})
```
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
### Parse a Value
To parse a value of a NGSI JSON attribute is used the parseValue() function. This function receives as a parameter the corresponding value to the attribute, the data type of the value should be one of the data type supported by the ngsi-parser.
Example:

```js
	var value = ngsi.parseValue(50)
```
Output

```json
	{
		"value": 50,
		"type": "Number",
		"metadata": {}
	}
```
### Parse an Entity
To parse an complete entity is used the parseEntity() function, which one receives as a parameter the JSON object non-structured, and produces as output the JSON object converted into a NGSI object.
Example:
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
		dateStamp : new Date()
	})
```
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
		"dateStamp":{
			"value":"2017-10-08T04:01:19.560Z",
			"type":"DateTime",
			"metadata":{}
		}
	}

```


