
## Basic examples using both npm modules

#### Create an Entity in the ContextBroker
```js
	//Convert a JSON into NGSI entity
	var entity = ngsi.parseEntity({
		id :'Room1',
		type:'Room',
		temperature : {
			value : 50 ,
			metadata : {
				frequency: 40,
				scale: 'Celsious'
			}
		},
		dateCreated: new Date()
	})
	// Send entity to ContextBroker 
	cb.createEntity(entity)
	.then((result) => console.log(result))
	.catch((err) => console.log(err))
```

#### Update attribute of an entity
```js
	//Convert a JSON Attribute into NGSI Attribute 
	var attribute = ngsi.parseAttrs({
		temperature : {
			value : 50
		}
	})
	// Update attribute in the entity stored in the ContextBroker 
	cb.updateEntityAttrs('Room1', attribute)
	.then((result) => console.log(result))
	.catch((err) => console.log(err))
```

#### Add an attribute to a NGSI entity.
```js
	//Convert a JSON Attribute into NGSI Attribute
	var attribute = ngsi.parseAttrs({
		temperature : {
			value : 50
		}
	})
	// Update the entity Room1 adding it the new attributte 
	cb.addJSONAttributeToEntity('Room1', attribute)
	.then((result) => console.log(result))
	.catch((err) => console.log(err))
```


#### Update the data of an entity attribute
```js
	//Convert a attribute value into NGSI Attribute Value 
	var value = ngsi.parseValue(50)
	
	// Update the attribute of the entity with a new value 
	cb.updateJSONAttrEntity('idEntity', 'nameAttribute', value)
	.then((result) => console.log(result))
	.catch((err) => console.log(err))
```