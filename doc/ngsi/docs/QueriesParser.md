# Queries Parser
The component Queries Parser allows to context producers retrieve in ease way specific context information the Orion ContextBroker.

* [Generating a query string](#generating-a-query-string)
* [Using a query string with the ocb-sender module]()
	* [Consulting specific information with a query string](#consulting-specific-information-with-a-query-string)

### Generating a query string
When you want to generate a query string, you can use the createQuery() function. The createQuery()function generates queries in string format for retrieving from the Orion ContextBroker entities which fulfills with a set of conditions. This function receives as parameter a JSON with the conditions (in form of key-value) of the query, and return as output the query in string format. The next example shows the implementation of createQuery() function. This function receives as parameter a JSON with conditions of the query, and this JSON is converted in a query string. The line of code `console.log(query)` prints the query string in console.
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

### Consulting specific information with a query string
The query string generated in the example of the section: [Generating a query string](#generating-a-query-string), can be used with the function getWithQuery() of the ocb-sender module. The getWithQuery() function receives as unique parameter the query string for request the context information to an Orion ContextBroker instance. It’s important to mention that, before of call to the function getWithQuery() is necessary import the ocb-sender module in the project (explained in deep in the section: [Import the NGSI library modules in a JavaScript project](../../usersManual.md)), and  configure the URL for the connection with an Orion ContextBroker instance (function described in the section [Connection configuration with an Orion ContextBroker instance](../../ocb/index.md#connection-configuration-with-an-orion-contextbroker-instance)). Once the aforementioned instructions have been carried out, it is possible to use the getWithQuery() function to retrieve specific context information. 
The following fragment of code shows an example implementation of the getWithQuery() function, the parameter `query` makes reference to the query string.
```js
	//Send requests to ContextBroker
	cb.getWithQuery(query)
    .then((result) => console.log(result))
	.catch((err) => console.log(err))
```
