# Queries Parser
The component Queries Parser allows to context producers retrieve in ease way, information from the Orion ContextBroker.

* [Generating a query string](#generating-a-query-string)
* [Retrieving information with a query string](#retrieving-information-with-a-query-string)

### Generating a query string
When you want to generate a query string to retrieve information from the Orion ContextBroker you can use the `createQuery()` function. This function generates queries in string format, receives as parameter a JSON with the conditions (in form of `key-values`) of the query and returns the query in string format. The next fragment of code shows an example of this function. The line of code `console.log(query)` prints the query string in console.
Example:
```js
	//Convert JSON to Query string
	let query = ngsi.createQuery({
	"id":"Device.*",
	"type":"Device",
	"options":"keyValues",
	"dateObserved" : ">=2018-02-20T16:54:03.931-06:00"
	})
	console.log(query)
```
The query can be stored in a variable; in this example, the query generated is stored in the variable `query`. The following line shows the query converted to string format. 
```js
?id=Device.*&Device&type=Device&options=keyValues&q=dateObserved>=2018-02-20T16:54:03.931-06:00
```

### Retrieving information with a query string
The query string generated in the previous the [section](#generating-a-query-string), can be used with the function `getWithQuery()` of the ocb-sender module for retrieving information from the ContextBroker. 
The `getWithQuery()` function receives as unique parameter the query string. Before using this function, is necessary to import the ocb-sender module in the project, as explained [here](../../usersManual.md); also configure the URL for the connection with the Orion ContextBroker instance, function described in this [section](../../ocb/index.md#connection-configuration-with-an-orion-contextbroker-instance). The following fragment of code shows an example of the `getWithQuery()` function, the parameter `query` makes reference to the query string.

```js
	//Send requests to ContextBroker
	cb.getWithQuery(query)
    .then((result) => console.log(result))
	.catch((err) => console.log(err))
```
