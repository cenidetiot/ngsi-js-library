
# コンテキスト・クエリ

## インデックス・ナビゲーション

* [コンテキスト・クエリ](#context-queries)
	* [文字列形式で動的クエリを生成](#generate-dinamic-query-in-string-format)

<a name="context-queries"></a>
## コンテキスト・クエリ

<a name="generate-dinamic-query-in-string-format"></a>
### 文字列形式で動的クエリを生成
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
出力

```text
	?id=Device.*&Device&type=Device&options=keyValues&q=dateObserved>=2018-02-20T16:54:03.931-06:00
```
OCB-sender での使用

```js
	//Send requests to ContextBroker
	cb.getWithQuery(query)
    .then((result) => console.log(result))
	.catch((err) => console.log(err))
```
