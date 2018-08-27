# OCB - sender  
ocb - sender is a npm module that makes possible the sending of context information produced by the context producers, in easy way to the FIWARE Ecosystem. This module allows the manipulation of NGSIv2 entities for them transportation to the FIWARE Orion Context Broker, through CRUD operations, in order to send the updates of NGSI context entities to the Orion Context Broker.

* [Import the module in a JavaScript Project](#import-npm-module)
* [Module Usage](#module-usage)
	* [General Functionalities](#general-functions)
		* [Connection configuration with Orion ContextBroker](#connection-configuration-with-orion-contextbroker)
		* [Retrieve Orion ContextBroker API Resources](#retrieve-orion-contextbroker-api-resources)
		* [Get EntityType of ContextBroker](#get-entitytype-of-contextbroker)
		* [Get EntitytTypes of ContextBroker](#get-entitytypes-of-contextbroker)
	* [Specific Functionalities](#specific-functions)
		* [Entities Functions](docs/EntitiesFunctions.md)
    	* [Subscriptions Functions](docs/SubscriptionsFunctions.md)
    	* [Query Functions](docs/QueryFunctions.md)
	* [Mobile Apps Implementation](docs/UsageInMobileApps.md)
* [License](#license)

## Import the module in JavaScript Project
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

### Connection configuration with Orion ContextBroker.

```js
 cb.config(urlContextBroker, port, version)
 .then((result) => console.log(result))
 .catch((err) => console.log(err))
```
> Example
```js
cb.config('http://207.249.127.149',1026,'v2')
.then((result) => console.log(result))
.catch((err) => console.log(err))
```
### Retrieve Orion ContextBroker API Resources.
> Example
```js
cb.retrieveAPIResources()
.then((result) => console.log(result))
.catch((err) console.log(err))
```
### Get EntityType of ContextBroker.
> Example
```js
cb.getEntityType("Device")
.then((result) => console.log(result))
.catch((err) => console.log(err))
```

### Get EntityTypes of ContextBroker.

> Example
```js
cb.getEntityTypes()
.then((result) => console.dir(result))
.catch((err) => console.log(err))
```

## License

MIT 



