# エンティティ関数

## インデックス・ナビゲーション

* [エンティティ関数](#entities-functions)
	* [エンティティをパース](#parse-an-entity)
	* [属性をパース](#parse-an-attribute)
	* [値をパース](#parse-a-value)

<a name="entities-functions"></a>
### エンティティ関数

<a name="parse-an-entity"></a>
#### エンティティをパース

```js
	var entity = ngsi.parseEntity({
		id :'Room1',
		type:'Room',
		temperature : {
			value : 50 ,
			metadata : {
				frecuency: 40,
				scale: 'Celsious'
			}
		},
		dateStamp : new Date()
	})
```
出力

```json
	{
		"id":"Room1",
		"type":"Room",
		"temperature":{
			"value":50,
			"type":"Number",
			"metadata":{
				"frecuency":{
					"value":40,
					"type":"Number"
				},
				"scale":{
					"value":"Celsious",
					"type":"Text"
				}
			}
		},
		"dateStamp":{
			"value":"2017-10-08T04:01:19.560Z",
			"type":"DateTime",
			"metadata":{}
		}
	}

```

<a name="parse-an-attribute"></a>
#### 属性をパース

```js
	var attribute = ngsi.parseAttrs({
		temperature : {
			value : 50,
			metadata :{
				frecuency : 50,
				scale: 'Fahrenheit'
			}
		}
	})
```
出力

```json
	{
		"temperature":{
			"value":50,
			"type":"Number",
			"metadata":{
				"frecuency":{
					"value":50,
					"type":"Number"
				},
				"scale":{
					"value":"Fahrenheit",
					"type":"Text"
				}
			}
		}
	}

```
<a name="parse-a-value"></a>
#### 値をパース

```js
	var value = ngsi.parseValue(50)
```

出力

```json
	{
		 "value": 50,
		 "type": "Number",
		 "metadata": {}
	 }
```
