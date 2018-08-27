# Queries Parser
ngsi-parser allows to generate context queries in order to consult specific context information to an Orion Context Broker instance. 

* [Generate Dinamic Query in String Format](#generate-dinamic-query-in-string-format)
* [Usage with OCB-sender](#usage-with-ocb-sender)

### Generate Dinamic Query in String Format
Through the createQuery() function, ngsi-parser module provides a simplified syntax to build a query string for retrieve entities that match with a set of conditions. The createQuery() function receives as  parameter a JSON with the conditions (in form of key-values) of the query, and return as output the query in string format. 
Example:
```js
	//Convert a Json to Query
	let query = ngsi.createQuery({
	"id":"Device.*",
	"type":"Device",
	"options":"keyValues",
	"dateObserved" : ">=2018-02-20T16:54:03.931-06:00"
	})
	console.log(query)
```
Output

```text
	?id=Device.*&Device&type=Device&options=keyValues&q=dateObserved>=2018-02-20T16:54:03.931-06:00
```
### Usage with OCB-sender
The query generated in the previously example it can be used with the function getWithQuery() of the ocb-sender module. The getWithQuery() function receive as unique parameter the query in string format for request the context information to an Orion ContextBroker instance It’s important to mention that, before of call to the function getWithQuery() is necessary import the ocb-sender module, and  configure the URL for the connection with the Orion ContextBroker instance. In this way is possible to use the getWithQuery() function to retrieve the context information specified in the query.
Example:
```js
	//Send requests to ContextBroker
	cb.getWithQuery(query)
    .then((result) => console.log(result))
	.catch((err) => console.log(err))
```
