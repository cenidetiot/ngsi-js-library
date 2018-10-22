# Queries Parser
ngsi-parser allows the generation of context queries in order to consult specific information to an Orion Context Broker instance. 

* [Generating a query string](#generating-a-query-string)
* [Using a query string with the ocb-sender module]()
	* [Consulting specific information with a query string](#consulting-specific-information-with-a-query-string)

### Generating a query string
The createQuery() function of the ngsi-parser module provides a simplified way of build a query string for retrieve a set of entities from the ContextBroker, entities that fulfill with certain conditions. To perform this, the createQuery() function receives as  parameter a JSON with the conditions (in form of key-value) of the query, and return as output the query in string format. The next example shows the createQuery function () that receives as parameter the JSON with conditions of the query. This JSON is converted into a query string by the function createQuery(). The line of code ***console.log(query)*** prints the query in console.
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
The query must to be stored in a variable for its later use. The following line shows the query converted to string format.
Output
```text
	?id=Device.*&Device&type=Device&options=keyValues&q=dateObserved>=2018-02-20T16:54:03.931-06:00
```
### Consulting specific information with a query string
The query string generated in the example of the section: ***Generating a query string***, can be used with the function getWithQuery() of the ocb-sender module. The getWithQuery() function receives as unique parameter the query string for request the context information to an Orion ContextBroker instance. It’s important to mention that, before of call to the function getWithQuery() is necessary import the ocb-sender module in the project (explained in detail in the section: ***Import the NGSI library modules in a JavaScript project***), and  configure the URL for the connection with an Orion ContextBroker instance (function described in the section: ***Connection configuration with an Orion ContextBroker instance***). Once the aforementioned instructions have been carried out, it is possible to use the getWithQuery() function to retrieve specific context information. An example of the implementation of getWithQuery() function is the following, where the parameter **query** makes reference to the query string.
Example:
```js
	//Send requests to ContextBroker
	cb.getWithQuery(query)
    .then((result) => console.log(result))
	.catch((err) => console.log(err))
```
