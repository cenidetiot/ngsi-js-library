# NGSI-parser

ngsi-parser は単純な JSON または値を解析して NSGI 準拠のオブジェクトに変換するための npm モジュールです。

----------

## インデックス・ナビゲーション

* [サポートされているデータ型](#usage)
* [インストール方法](#how-to-install)
* [npm モジュールをインポート](#import-npm-module)
* [モジュールの使用](#module-usage)
	* [エンティティ関数](docs/EntitiesFunctions.md)
	* [コンテキスト・クエリ](docs/ContextQueries.md)
	* [スキーマ・アナライザ](docs/SchemaAnalizer.md)
* [ライセンス](#license)

<a name="usage"></a>
## サポートされているデータ型

- 値が **string** の場合、**Text** 型が使用されます
- 値が **number** の場合は **Number** 型が使用されます
- 値が **boolean** の場合、**Boolean** 型が使用されます
- 値が **Date** の場合、**DateTime** が使用されます
- 値が **object** または **array** の場合、**StructuredValue** が使用されます
- 値が **null** の場合、**None** が使用されます

<a name="how-to-install"></a>
## インストール方法

    npm install ngsi-parser

   	または、

    yarn add ngsi-parser

<a name="import-npm-module"></a>
### npm モジュールをインポート

#### ES5
```js
	var ngsi = require('ngsi-parser')
```

#### ES6
```js
	import NGSI as ngsi from 'ngsi-parser'
```

<a name="license"></a>
#### ライセンス

MIT
