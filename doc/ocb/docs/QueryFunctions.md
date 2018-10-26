# Query Functions

* [Personalized Query Context](#personalized-query-context)
* [Query Entities on Area](#query-entities-on-area)

### Personalized query context
The `getWithQuery()` function is used for retrieving specific information of the Orion ContextBroker. This function receives as parameter the query string, and returns the response of the ContextBroker: the `body` with the set of entities that fulfill with the conditions of the query, and the headers returned by the ContextBroker. You must to access to the JSON attributes `.body` and `.headers._headers` of the result response, if you want to print them in console, as shown in the following example:
```js
let query = "?id=.*&type=Device&georel=coveredBy&q=owner==Idowner&geometry=polygon&coords=18.879751306118546,-99.22197723761204;18.87991373199594,-99.22199869528413;18.87996449005033,-99.22190750017762;18.879984793267777,-99.2218270339072;18.879939111025056,-99.22174656763676;18.879893428769883,-99.22165537253022;18.87973100287282,-99.22145152464509;18.8795888800837,-99.22130132094026;18.879390923140832,-99.221076015383;18.87928940666914,-99.22097945585847;18.87893917436966,-99.22117793932557;18.87856356210443,-99.22121012583375;18.878675230703656,-99.22134960070255;18.878776747547473,-99.22145152464509;18.87888841600463,-99.22154808416965;18.87903053938793,-99.22144079580903;18.879203117619838,-99.22140860930085;18.87936554402868,-99.22153199091554;18.87948228791276,-99.22165537253022;18.879614259162025,-99.22181630507114;18.879751306118546,-99.22197723761204&options=keyValues"
cb.getWithQuery(query, headers)
.then((result) => {
    if (result.body.length < 1){
        console.log("No entities found")
    }
    else{
        console.log(result.body)
        console.log(result.headers._headers)
    }
})
.catch((err) => console.log(err))
```
### Query Entities on Area
The `queryEntitiesOnArea()` function is used for retrieving the entities located within a specific area. This function receives the following four parameters:

1. The coordinates of the polygon of the area (longitude-latitude array)
2. The regular expression for filtering the entities using entity id patterns
3. The type of entity for filtering the entities by type.
4. The value: true or false, if you prefer visualize the response in format `keyValues`, the value of this parameter must be **true**. Of the contrary, if you prefer visualize the response in format `normalized`, the value of this parameter must be **false**.

The following function shows the syntaxes of the `queryEntitiesOnArea()` function and the order of the parameters that this function receives.
```js
cb.queryEntitiesOnArea(coordsPolygon, idEntity, entityType, optionskeyValues)
.then((result) => console.log(JSON.stringify(result)))
.catch((err) => console.log(err))
```
An example of the implementation of the `queryEntitiesOnArea()` function with real data in the parameters is the following:
```js
cb.queryEntitiesOnArea([
    [18.879751306118546,-99.22197723761204],
    [18.87991373199594,-99.22199869528413],
    [18.87996449005033,-99.22190750017762],
    [18.879984793267777,-99.2218270339072],
    [18.879939111025056,-99.22174656763676],
    [18.879893428769883,-99.22165537253022],
    [18.87973100287282,-99.22145152464509],
    [18.8795888800837,-99.22130132094026],
    [18.879390923140832,-99.221076015383],
    [18.87928940666914,-99.22097945585847],
    [18.87893917436966,-99.22117793932557],
    [18.87856356210443,-99.22121012583375],
    [18.878675230703656,-99.22134960070255],
    [18.878776747547473,-99.22145152464509],
    [18.87888841600463,-99.22154808416965],
    [18.87903053938793,-99.22144079580903],
    [18.879203117619838,-99.22140860930085],
    [18.87936554402868,-99.22153199091554],
    [18.87948228791276,-99.22165537253022],
    [18.879614259162025,-99.22181630507114],
    [18.879751306118546,-99.22197723761204]
],".*","Device",true)
.then((result) => console.log(JSON.stringify(result)))
.catch((err) => console.log(err))
```
**NOTE:** The use of headers in the `queryEntitiesOnArea()` function is not available, if you need execute a query with specific headers you can use the `getWithQuery()` function explained above.