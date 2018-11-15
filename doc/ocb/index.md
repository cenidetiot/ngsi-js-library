# OCB - sender module
ocb-sender is a npm module that eases the manipulation and update of NGSI entities in the Orion ContextBroker of FIWARE. The topics covered this guide are the following:

* [Module Usage](#module-usage)
	* [Multi-tenancy](#multi-tenancy)
	* [General Functions](#general-functions)
		* [Connection configuration with an Orion ContextBroker Instance](#connection-configuration-with-an-orion-contextbroker-instance)
		* [Retrieve Orion ContextBroker API Resources](#retrieve-orion-contextbroker-api-resources)
		* [Get EntityType of ContextBroker](#get-entitytype-of-contextbroker)
		* [Get EntitytTypes of ContextBroker](#get-entitytypes-of-contextbroker)
	* [Specific Functionalities](#specific-functionalities)
		* [Entities Functions](docs/EntitiesFunctions.md)
    	* [Subscriptions Functions](docs/SubscriptionsFunctions.md)
    	* [Query Functions](docs/QueryFunctions.md)
	* [Implementation in Mobile Apps](docs/ImplementationInMobileApps.md)

## Module Usage
The ocb-sender module is composed by the elements described in the architecture of the library section. These elements are the entities functions block, the queries functions block and the subscriptions functions block, which are explained in greater depth in the following sections. In addition to the specific functionalities of each block, the ocb-sender module considers general functions for the connection with an Orion ContextBroker instance and retrieving of API resources, as well as the getting of groups of entities grouped by type and types of entities. Before using the functionalities of ocb-sender module, remember to import it in your project, as explained in [here](./../usersManual.md).

### Multi-tenancy
NGSI JavaScript Library supports the use of different tenants as well as Orion ContextBroker does with the FIWARE headers. The use of tenancy headers (Fiware-Service and Fiware-ServicePath) is optional. The NGSI library functions that are of data insertion and retrieval will work by default without specify headers in the request. However, if your request use headers for the insertion or querying data, you need to specify them in the corresponding function.
The entire requests sent to the Orion Context Broker through the ocb-sender module functions, can send specific headers in the requests. These headers can be placed in a JSON object as shown in the following example.
```js
var headers = {
    'Fiware-Service': 't_02'
}
```
The headers should be included as parameter in a function of the ocb-sender module to perform the request with specific headers. An example of the use of headers in an ocb-sender function is the following:
```js
cb.getEntityAttributeValue("Alert_0d4f3h9s6e", "temperature", headers)
.then((result) => console.log(result))
.catch((err) => console.log(err))
```
You can use another header options if you need them, or ignore this parameter in the function, if the request you perform does not need any special header.

### General Functions

#### Connection configuration with an Orion ContextBroker Instance
The ocb-sender module provides the `config()` function to specify the URL of the Orion ContextBroker instances that will be used in the project. The syntax of this function is the following:
```js
cb.config(urlContextBroker, headers)
 .then((result) => console.log(result))
 .catch((err) => console.log(err))
```
Example:
```js
cb.config('http://207.249.127.149:1026/v2', headers)
.then((result) => console.log(result))
.catch((err) => console.log(err))
```
#### Retrieve Orion ContextBroker API Resources
The API Resources of the Orion ContextBroker can be retrieved through the following function:
```js
cb.retrieveAPIResources(headers)
.then((result) => console.log(result))
.catch((err) => console.log(err))
```
#### Get EntityType of ContextBroker
The `getEntityType()` function returns the list of entities that belong to a specific type. For example, the following function returns the set of entities of type `Device`.
```js
cb.getEntityType("Device", headers)
.then((result) => console.log(result))
.catch((err) => console.log(err))
```
#### Get EntityTypes of ContextBroker
The entity types stored in a Orion ContextBroker instance can be retrieved through the function `getEntityTypes()`, for example:
```js
cb.getEntityTypes(headers)
.then((result) => console.dir(result))
.catch((err) => console.log(err))
```