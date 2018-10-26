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

### Get Entity Attribute Value
The `getEntityAttributeValue()` function is used for retrieving a specific value of an entity attribute. In the next example, the `getEntityAttributeValue()` function returns the value of the attribute `temperature` of the entity with `id`: `Room1`.
```js
cb.getEntityAttributeValue("Room1", "temperature", headers)
.then((result) => console.log(result))
.catch((err) => console.log(err))
```
### Get Entity Attribute
The `getEntityAttribute()` function is used for retrieving the JSON value of a specific attribute of an entity. For example, the following function returns the attribute `temperature` of the entity with `id`: `Room1`.
```js
cb.getEntityAttribute("Room1", "temperature", headers)
.then((result) => console.log(result))
.catch((err) => console.log(err))
```
### Get Entity Attributes
The `getEntityAttrs()` function is used for retrieving all the attributes that contains an NGSI entity. In the next example, the `getEntityAttrs()` function returns the NGSI attributes of the entity with `id`: `Room1`.
```js
cb.getEntityAttrs("Room1", headers)
.then((result) => console.log(result))
.catch((err) => console.log(err))
```
### Get Entity
The `getEntity()` function is used for retrieving the attributes and the type of a specific NSGI entity. For example, the next function returned the entity type and attributes of the entity with `id`: `Room1`.
```js
cb.getEntity("Room1", headers)
.then((result) => console.log(result))
.catch((err) => console.log(err))
```
### Get entities list of an entity type
The `getEntityListType()` function is used for retrieving the NGSI entities with specific type. In the next example, this function returns the NGSI entities of `type`: `Room`.
```js
cb.getEntityListType("Room", headers)
.then((entities) => {console.log(entities)})
.catch((err) => console.log(err))
```
### Get All Entities
The `listEntities()` function is used for retrieving the entities list stored in the Orion ContextBroker. Remember that, the ContextBroker respond to this request with the latest 20 entities stored; for the moment, this function does not support the pagination mechanism to retrieve large sets of resources. 
Example:
```js
cb.listEntities(headers)
.then((entities) => {console.log(entities)})
.catch((err) => console.log(err))
```
## Create Functions

### Create Entity
The function for registering an entity in a Orion ContextBroker instance is the `createEntity()` function. This function receives as parameter the NGSI entity. For example:
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
##  Update Functions

### Update Entity Attribute Value
The function to update a specific value of an attribute is the `updateEntityAttributeValue()`
function. This function receives as parameters: the entity id, the attribute and the value of the attribute. For example, the next function modifies the attribute the entity with  `id`: `Room1` change the value of the attribute `temperature`, with a value of `16`.
```js
cb.updateEntityAttributeValue("Room1", "temperature", 16, headers)
.then((result) => console.log(result))
.catch((err) => console.log(err))
```
### Update Attribute Data
The function to update the data of an attribute is the `updateJSONAttrEntity()` function. This function receives as parameters: the id of the entity, the attribute to modify and the JSON object with the data of the attribute. For example, the next function modifies the attribute `temperature` (entity `id`: `Room1`) with the data of the JSON object specified as third parameter of the `updateJSONAttrEntity()` function.
```js
cb.updateJSONAttrEntity("Room1", "temperature", {
    "type": "Number",
    "value": 34.982398
}, headers)
.then((result) => console.log(result))
.catch((err) => console.log(err))
```
### Replace All Entity Attributes
The `replaceAllEntityAttributes()` function can be used when you require remove all the attributes of an entity, and set new attributes to this same entity. The next example removes all the attributes of the entity with `id`: `Room1`, and set new attribute: the `pressure` attribute.
```js
cb.replaceAllEntityAttributes("RoomTest", {
    "pressure": {
        "value": 720,
        "type": "Integer"
    }
}, headers)
.then((result) => console.log(result))
.catch((err) => console.log(err))
```
###  Update Existing Entity Attributes
The `updateEntityAttrs()` function is used to update an existing attribute of an entity. This means that the attribute specified in the parameter of this function necessarily have to exist in the entity. For example, the next function updates the attribute `temperature` of entity with `id`: `Room1`.
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
### Update Or Append Entity Attributes
The `addJSONAttributeToEntity()` function is used for adding a new attribute of an existing entity. The requirement to use this function is that the entity has been created previously. In the next example, the function updates the entity with `id`: `Room1` adding it the `pressure` attribute.
```js
cb.addJSONAttributeToEntity("Room1",{
    "pressure":{
		      "value": 90,
		      "type": "Integer"
	    }
},headers)
.then((result) => console.log(result))
.catch((err) => console.log(err))
```
## Delete Functions

### Delete Entity
The `deleteEntity()` function is used for removing an entity from the Orion ContextBroker. This function receives as parameter the `id` of the entity. For example, the next function removes the entity with `id`: `Room1` from the ContextBroker.
```js
cb.deleteEntity("Room1")
.then((result) => console.log(result))
.catch((err) => console.log(err))
```
### Delete Entity Attribute
The `deleteEntityAttribute()` function is used for removing a specific attribute of an entity. In the next example, the function removes the attribute `pressure` of the entity with `id`: `Room1`.
```js
cb.deleteEntityAttribute("Room1", "pressure")
.then((result) => console.log(result))
.catch((err) => console.log(err))
```