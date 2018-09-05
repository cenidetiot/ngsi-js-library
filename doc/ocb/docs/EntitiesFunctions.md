# Entities Functions

* [Read Functions](#read-functions)
    * [Get Entity Attribute Value](#get-entity-attribute-value)
    * [Get Entity Attribute](#get-entity-attribute)
    * [Get Entity Attributes](#get-entity-attributes)
    * [Get Entity](#get-entity)
    * [Get entities list of an entity type](#get-entities-list-of-an-entity-type)
    * [Get All Entities](#get-all-entities)
* [Create Functions](#create-functions)
    * [Create Entity](#create-entity)
* [Update Functions](#update-functions)
    * [Update Entity Attribute Value](#update-entity-attribute-value)
    * [Update Attribute Data](#update-attribute-data)
    * [Replace All Entity Attributes](#eplace-all-entities-attributes)
    * [Update Existing Entity Attributes](#update-existing-entity-attributes)
    * [Update Or Append Entity Attributes](#update-or-append-entity-attributes)
* [Delete Functions](#dele-functions)
    * [Delete entity](#delete-entity)
    * [Delete entity attribute](#delete-entity-attribute)

## Read Functions

### Headers support

### Get Entity Attribute Value.
Example
```js
cb.getEntityAttributeValue("Room1", "temperature")
.then((result) => console.log(result))
.catch((err) => console.log(err))
```
### Get Entity Attribute.
Example
```js
cb.getEntityAttribute("Room1", "temperature")
.then((result) => console.log(result))
.catch((err) => console.log(err))
```
### Get Entity Attributes.
Example
```js
cb.getEntityAttrs("Room1")
.then((result) => console.log(result))
.catch((err) => console.log(err))
```
### Get Entity.
Example
```js
cb.getEntity('Room1')
.then((result) => console.log(result))
.catch((err) => console.log(err))
```
### Get entities list of an entity type.

Example
```js
cb.getEntityListType('Room')
.then((entities) => {console.log(entities)})
.catch((err) => console.log(err))
```
### Get All Entities.

Example
```js
cb.listEntities()
.then((entities) => {console.log(entities)})
.catch((err) => console.log(err))
```
## Create Functions.

### Create Entity.
Example
```js
cb.createEntity({
    "id": "Room1",
    "temperature": {
        "metadata": {
            "accuracy": {
                "type": "Number",
                "value": 0.8
            }
        },
        "type": "Number",
        "value": 26.5
    },
    "type": "Room"
}).then((result) => console.log(result))
.catch((err) => console.log(err))
```
##  Update Functions.

### Update Entity Attribute Value.
Example
```js
cb.updateEntityAttributeValue('Room1', 'temperature', 16)
.then((result) => {console.log(result)})
.catch((err) => console.log(err))
```
### Update Attribute Data.
Example
```js
cb.updateJSONAttrEntity('Room1', 'temperature', {
    "type": "Number",
    "value": 34.982398
})
.then((result) => console.log(result))
.catch((err) => console.log(err))
```
### Replace All Entity Attributes.
Example
```js
cb.replaceAllEntityAttributes("RoomTest", {
    "pressure": {
        "value": 720,
        "type": "Integer"
    }
})
.then((result) => console.log(result))
.catch((err) => console.log(err))
```
###  Update Existing Entity Attributes.
Example 
```js
cb.updateEntityAttrs('Room1', { 
    "temperature": {
        "value": 75.9345,
        "type": "Float"
    }
})
.then((result) => console.log(result))
.catch((err) => console.log(err))
```
### Update Or Append Entity Attributes.
Example
```js
cb.addJSONAttributeToEntity("Room1",{
    "pressure":{
		      "value": 90,
		      "type": "Integer"
	    }
})
.then((result) => console.log(result))
.catch((err) => console.log(err))
```
## Delete Functions.

### Delete Entity.
Example 
```js
cb.deleteEntity("Room1")
.then((result) => console.log(result))
.catch((err) => console.log(err))
```
### Delete Entity Attribute.
```js
cb.deleteEntityAttribute("RoomTest", "pressure")
.then((result) => console.log(result))
.catch((err) => console.log(err))
```