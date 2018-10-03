# OCB - sender module
ocb - sender is a npm module that makes possible the sending of context information produced by the context producers, in easy way to the FIWARE Ecosystem. This module allows the manipulation of NGSIv2 entities for them transportation to the FIWARE Orion Context Broker, through CRUD operations, in order to send the updates of NGSI context entities to the Orion Context Broker.

* [Import the module in a JavaScript Project](#import-the-module)
* [Module Usage](#module-usage)
	* [General Functions](#general-functions)
		* [Connection configuration with an Orion ContextBroker Instance](#connection-configuration-with-an-orion-contextbroker-instance)
		* [Retrieve Orion ContextBroker API Resources](#retrieve-orion-contextbroker-api-resources)
		* [Get EntityType of ContextBroker](#get-entitytype-of-contextbroker)
		* [Get EntitytTypes of ContextBroker](#get-entitytypes-of-contextbroker)
	* [Specific Functionalities](#specific-functionalities)
		* [Headers support](#headers-support)
		* [Entities Functions](docs/EntitiesFunctions.md)
    	* [Subscriptions Functions](docs/SubscriptionsFunctions.md)
    	* [Query Functions](docs/QueryFunctions.md)
	* [Mobile Apps Implementation](docs/UsageInMobileApps.md)

## Import the module in a JavaScript Project
To import an npm module in an existing JavaScript project there are two ways. This choice depends on the ECMAScript standard that used in the project.

#### ES5 (ECMAScript 5)
For import the module in the JavaScript file that uses the ES5 standard, write the following line to call the module: 

```js
    var cb = require('ocb-sender');
```

#### ES6 (ECMAScript 6)
By other side, if in the JavaScript file is used the ES6 standard can be directly used the common import sentence for call the module:

```js
    import OCB as cb from  ocb-sender;
```

## Module Usage
The ocb-sender module is composed by the elements described in the architecture of the library section. These elements are: the entities functions block, the queries functions block, and the subscriptions functions block, which are explained in more detail in the following sections. In addition to the specific functionalities of each block, the ocb-sender module considers general functions for the connection with an Orion ContextBroker instance and retrieving of API resources, as well as the getting of groups of entities grouped by type and types of entities.

### Multi-tenancy / Headers Support
The entire requests sent to the Orion Context Broker has the option to send in the same request, specific headers in a JSON that is included as a parameter in each function arguments. An example of headers is the following:
```js
var headers = {
    'Fiware-Correlator': '3451e5c2-226d-11e6-aaf0-d48564c29d20'
}
```
You can use another header options if you need them, an empty JSON header, or if you prefer ignore this argument in the function, if the request does not need any special header.
An example of the headers usage in a function is the following:
```js
cb.getEntityAttributeValue("Alert_1d4f3g9s6k", "temperature", headers)
.then((result) => console.log(result))
.catch((err) => console.log(err))
```

### General Functions

#### Connection configuration with an Orion ContextBroker Instance.
The ocb-sender module provides a config function() to specify the url of the Orion ContextBroker instance that will be used in the project. The syntax of this function is the following:
```js
cb.config(urlContextBroker, headers)
 .then((result) => console.log(result))
 .catch((err) => console.log(err))
```
Example
```js
cb.config('http://207.249.127.149:1026/v2/', headers)
.then((result) => console.log(result))
.catch((err) => console.log(err))
```
#### Retrieve Orion ContextBroker API Resources.
To retrieve the general resources of the Orion ContextBroker API, you can use the following function:

Example
```js
cb.retrieveAPIResources()
.then((result) => console.log(result))
.catch((err) console.log(err))
```
#### Get EntityType of ContextBroker.
Example
```js
cb.getEntityType("Device")
.then((result) => console.log(result))
.catch((err) => console.log(err))
```
#### Get EntityTypes of ContextBroker.
Example
```js
cb.getEntityTypes(headers)
.then((result) => console.dir(result))
.catch((err) => console.log(err))
```


