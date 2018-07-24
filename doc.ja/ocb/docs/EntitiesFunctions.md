
# Entities Functions
***
## インデックス・ナビゲーション

* [エンティティ関数 (Entities Functions)](#entities-functions)
    * [読み込み関数 (Read Functions)](#read-functions)
	    * [エンティティ属性値を取得 (Get Entity Attribute Value)](#get-entity-attribute-value)
	    * [エンティティ属性を取得 (Get Entity Attribute)](#get-entity-attribute)
	    * [エンティティ属性を取得 (Get Entity Attributes)](#get-entity-attributes)
	    * [エンティティを取得 (Get Entity)](#get-entity)
	    * [エンティティ・タイプのエンティティ・リストを取得 (Get entities list of an entity type)](#get-entities-list-of-an-entity-type)
	    * [すべてのエンティティを取得 (Get All Entities)](#get-all-entities)
    * [作成関数 (Create Functions)](#create-functions)
	    * [エンティティの作成 (Create Entity)](#create-entity)
    * [更新関数 (Update Functions)](#update-functions)
        * [エンティティ属性値を更新 (Update Entity Attribute Value)](#update-entity-attribute-value)
        * [属性データを更新 (Update Attribute Data)](#update-attribute-data)
        * [すべてのエンティティ属性を置き換え (Replace All Entity Attributes)](#eplace-all-entities-attributes)
        * [既存のエンティティ属性を更新 (Update Existing Entity Attributes)](#update-existing-entity-attributes)
        * [エンティティ属性の更新または追加 (Update Or Append Entity Attributes)](#update-or-append-entity-attributes)
    * [削除関数 (Delete Functions)](#dele-functions)
	    * [エンティティを削除 (Delete entity)](#delete-entity)
        * [エンティティ属性の削除 (Delete entity attribute)](#delete-entity-attribute)

<a name="read-functions"></a>
## 読み込み関数 (Read Functions)

<a name="get-entity-attribute-value"></a>
### エンティティ属性値を取得 (Get Entity Attribute Value)
> 例
```js
cb.getEntityAttributeValue("Room1", "temperature")
.then((result) => console.log(result))
.catch((err) => console.log(err))
```
<a name="get-entity-attribute"></a>
### エンティティ属性を取得 (Get Entity Attribute)
> 例
```js
cb.getEntityAttribute("Room1", "temperature")
.then((result) => console.log(result))
.catch((err) => console.log(err))
```
<a name="get-entity-attributes"></a>
### エンティティ属性を取得 (Get Entity Attributes)
> 例
```js
cb.getEntityAttrs("Room1")
.then((result) => console.log(result))
.catch((err) => console.log(err))
```
<a name="get-entity"></a>
### エンティティを取得 (Get Entity)
> 例
```js
cb.getEntity('Room1')
.then((result) => console.log(result))
.catch((err) => console.log(err))
```
<a name="get-entities-list-of-an-entity-type"></a>
### エンティティ・タイプのエンティティ・リストを取得 (Get entities list of an entity type)

> 例
```js
cb.getEntityListType('Room')
.then((entities) => {console.log(entities)})
.catch((err) => console.log(err))
```
<a name="get-all-entities"></a>
### すべてのエンティティを取得 (Get All Entities)

> 例
```js
cb.listEntities()
.then((entities) => {console.log(entities)})
.catch((err) => console.log(err))
```
<a name="create-functions"></a>
## 作成関数 (Create Functions)

<a name="create-entity"></a>
### エンティティの作成 (Create Entity)
> 例
```js
cb.createEntity({
    "id": "Room1",
    "temperature": {
        "metadata": {
            "accuracy": {
                "type": "Number",
                "value": 0.8
            }
        },
        "type": "Number",
        "value": 26.5
    },
    "type": "Room"
}).then((result) => console.log(result))
.catch((err) => console.log(err))
```
<a name="update-functions"></a>
##  更新関数 (Update Functions)

<a name="update-entity-attribute-value"></a>
### エンティティ属性値を更新 (Update Entity Attribute Value)
> 例
```js
cb.updateEntityAttributeValue('Room1', 'temperature', 16)
.then((result) => {console.log(result)})
.catch((err) => console.log(err))
```
<a name="update-attribute-data"></a>
### 属性データを更新 (Update Attribute Data)
> 例
```js
cb.updateJSONAttrEntity('Room1', 'temperature', {
    "type": "Number",
    "value": 34.982398
})
.then((result) => console.log(result))
.catch((err) => console.log(err))
```
<a name="eplace-all-entities-attributes"></a>
### すべてのエンティティ属性を置き換え (Replace All Entity Attributes)
> 例
```js
cb.replaceAllEntityAttributes("RoomTest", {
    "pressure": {
        "value": 720,
        "type": "Integer"
    }
})
.then((result) => console.log(result))
.catch((err) => console.log(err))
```
<a name="update-existing-entity-attributes"></a>
###  既存のエンティティ属性を更新 (Update Existing Entity Attributes)
> 例
```js
cb.updateEntityAttrs('Room1', {
    "temperature": {
        "value": 75.9345,
        "type": "Float"
    }
})
.then((result) => console.log(result))
.catch((err) => console.log(err))
```
<a name="update-or-append-entity-attributes"></a>
### エンティティ属性の更新または追加 (Update Or Append Entity Attributes)
> 例
```js
cb.addJSONAttributeToEntity("Room1",{
    "pressure":{
		      "value": 90,
		      "type": "Integer"
	    }
})
.then((result) => console.log(result))
.catch((err) => console.log(err))
```
<a name="dele-functions"></a>
## 削除関数 (Delete Functions)

<a name="delete-entity"></a>
### エンティティを削除 (Delete entity)
> 例
```js
cb.deleteEntity("Room1")
.then((result) => console.log(result))
.catch((err) => console.log(err))
```
<a name="delete-entity-attribute"></a>
### エンティティ属性の削除 (Delete entity attribute)
```js
cb.deleteEntityAttribute("RoomTest", "pressure")
.then((result) => console.log(result))
.catch((err) => console.log(err))
```
