# OCB - sender  

## What is ocb-sender?

ocb - sender is a npm module that handle a NGSI Object for them transportation to FIWARE Orion Context Broker. It makes possible send context information in easy way to the FIWARE Ecosystem.
***
## Index navigation

* [How to Install](#how-to-install)
* [Import npm module](#import-npm-module)
* [Module Usage](#module-usage)
	* [General Functions](#general-functions)
		* [Connection configuration with Orion ContextBroker](#connection-configuration-with-orion-contextbroker)
		* [Retrieve Orion ContextBroker API Resources](#retrieve-orion-contextbroker-api-resources)
		* [Get EntityType of ContextBroker](#get-entitytype-of-contextbroker)
		* [Get EntitytTypes of ContextBroker](#get-entitytypes-of-contextbroker)
	* [Specific Functions](#specific-functions)
		* [Entities Functions](docs/EntitiesFunctions.md)
    	* [Subscriptions Functions](docs/SubscriptionsFunctions.md)
    	* [Query Functions](docs/QueryFunctions.md)
* [License](#license)

## How to install

```
npm install ocb-sender
```
or
```
yarn add ocb-sender
```

## Import npm module.

#### ES5 

```js
    var cb = require('ocb-sender');
```
#### ES6 
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
MIT © [Haidée Onofre & Daniel Torres]



