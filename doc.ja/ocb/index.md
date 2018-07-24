# OCB - sender

ocb - sender は、FIWARE Orion Context Broker への転送のための NGSI オブジェクトを処理する npm モジュールです。コンテキストの情報を簡単に FIWARE プラットフォームに送ることができます。

## <a name="license"></a>

* [インストール方法](#how-to-install)
* [npm モジュールをインポート](#import-npm-module)
* [モジュールの使用](#module-usage)
	* [一般的な関数](#general-functions)
		* [Orion Context Broker との接続設定](#connection-configuration-with-orion-contextbroker)
		* [Orion Context Broker との接続設定](#retrieve-orion-contextbroker-api-resources)
		* [Context Broker の EntityType を取得](#get-entitytype-of-contextbroker)
		* [Context Broker の EntitytTypes を取得](#get-entitytypes-of-contextbroker)
	* [特定機能](#specific-functions)
		* [エンティティ関数](docs/EntitiesFunctions.md)
    	* [サブスクリプション機能](docs/SubscriptionsFunctions.md)
    	* [クエリ関数](docs/QueryFunctions.md)
	* [モバイル・アプリケーションの開発における実装](docs/UsageInMobileApps.md)
* [ライセンス](#license)

<a name="how-to-install"></a>
## インストール方法

```
npm install ocb-sender
```
または
```
yarn add ocb-sender
```

<a name="import-npm-module"></a>
## npm モジュールをインポート

#### ES5

```js
    var cb = require('ocb-sender');
```
#### ES6
```js
    import OCB as cb from  ocb-sender;
```
<a name="module-usage"></a>
## モジュールの使用

<a name="connection-configuration-with-orion-contextbroker"></a>
### Orion Context Broker との接続設定

```js
 cb.config(urlContextBroker, port, version)
 .then((result) => console.log(result))
 .catch((err) => console.log(err))
```
> 例
```js
cb.config('http://207.249.127.149',1026,'v2')
.then((result) => console.log(result))
.catch((err) => console.log(err))
```
<a name="retrieve-orion-contextbroker-api-resources"></a>
### Orion Context Broker API リソースを取得
> 例
```js
cb.retrieveAPIResources()
.then((result) => console.log(result))
.catch((err) console.log(err))
```
<a name="get-entitytype-of-contextbroker"></a>
### Context Broker の EntityType を取得
> 例
```js
cb.getEntityType("Device")
.then((result) => console.log(result))
.catch((err) => console.log(err))
```

<a name="get-entitytypes-of-contextbroker"></a>
### Context Broker の EntitytTypes を取得
> 例
```js
cb.getEntityTypes()
.then((result) => console.dir(result))
.catch((err) => console.log(err))
```

<a name="license"></a>
## ライセンス

MIT
