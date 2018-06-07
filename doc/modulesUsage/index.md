
## Examples of both npm module usage.

#### Create an Entity in the ContextBroker
```js
	//Convert a JSON into NGSI Format
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
	// Send to ContextBroker 
	cb.createEntity(entity)
	.then((result) => console.log(result))
	.catch((err) => console.log(err))
```

#### Update all the attributes of an entity
```js
	//Convert a JSON Attribute to NGSI Attribute Format
	var attribute = ngsi.parseAttrs({
		temperature : {
			value : 50
		}
	})
	// Send to ContextBroker 
	cb.updateEntityAttrs('Room1', attribute)
	.then((result) => console.log(result))
	.catch((err) => console.log(err))
```

#### Add a JSON Attribute to a NGSI entity.
```js
	//Convert a JSON Attribute to NGSI Attribute Format
	var attribute = ngsi.parseAttrs({
		temperature : {
			value : 50
		}
	})
	// Send to ContextBroker 
	cb.addJSONAttributeToEntity('Room1', attribute)
	.then((result) => console.log(result))
	.catch((err) => console.log(err))
```


#### Update the JSON Object of an atttribute of the entity
```js
	//Convert a attribute value to NGSI Attribute Value Format
	var value = ngsi.parseValue(50)
	
	// Send to ContextBroker 
	cb.updateJSONAttrEntity(
		'idEntity', 'nameAttribute', value
	)
	.then((result) => console.log(result))
	.catch((err) => console.log(err))
```