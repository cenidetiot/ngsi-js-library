
# Context Queries
***
## Indéx navigation

* [Context Queries](#context-queries)
	* [Generate Dinamic Query in String Format](#generate-dinamic-query-in-string-format)

## Context Queries

### Generate Dinamic Query in String Format
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
Usage with OCB-sender

```js
	//Send requests to ContextBroker
	cb.getWithQuery(query)
    .then((result) => console.log(result))
	.catch((err) => console.log(err))
```