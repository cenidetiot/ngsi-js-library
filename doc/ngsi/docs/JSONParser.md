# JSON Parser Functions
The component JSON parser analyzes the content of complete JSON entities, JSON entity attributes or attributes values, and converts them in objects with FIWARE-NSGIv2 format. The functions of this component are the following:

* [Parsing an Attribute Value](#parse-a-value)
* [Parsing an Attribute](#parse-an-attribute)
* [Parsing an Entity](#parse-an-entity)

### Parsing an Attribute Value
When you want to parse an attribute value to the format NGSI, you can use the parseValue() function. This function receives as a parameter the value of the attribute, the data type of this attribute value must be a data type supported by the ngsi-parser module (described in the [Data types supported](../index.md#data-types-supported)).

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
When you want to convert an attribute without metadata to a NGSI attribute, you can use the parseAttrs() function. This function receives as parameter a JSON with the name and value of the attribute. For example in the next fragment of code, the parseAttrs() function receives as parameter a JSON with the attribute `temperature` with value of `50`.
``` js
    var attribute = ngsi.parseAttrs({
        temperature : 50
    })
```
The parseAttrs() function produces as output the attribute `temperature` with value of `50` converted in an attribute with NGSI format.
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
When you want to convert an attribute with metadata to a NGSI attribute, you can use the parseAttrs() function as the example above. For example, in the next fragment of code, the parseAttrs() function receives as parameter a JSON with the following data: the attribute `temperature` with value of `50` and as metadata of this attribute, the attributes `frequency` with value of `50`, and the attribute `scale` with value `'Fahrenheit'`.
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
The parseAttrs() function produces as output the attribute `temperature` and its metadata converted to the NGSI format. 
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
When you want to convert a complete JSON entity, you can use the parseEntity() function. The parseEntity() function receives as a parameter the JSON object of a non-structured context entity, and produces as output this same JSON object, but converted in a NGSI entity. In the next example, the parseEntity() function receives the JSON of the entity with id `Room1`, and its attributes `temperature` and `dateCreated`. 
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
The parseEntity() function produces as output the JSON entity `Room1` converted in a NGSI entity.
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


