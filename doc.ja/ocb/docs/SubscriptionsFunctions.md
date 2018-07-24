# サブスクリプション機能
***
## インデックス・ナビゲーション
* [サブスクリプション機能](#subscriptions-functions)
    * [読み込み関数](#read-functions)
        * [すべてのサブスクリプションを取得](#get-all-subscriptions)
        * [サブスクリプションを取得](#get-subscription)
    * [作成関数](#create-functions)
        * [サブスクリプションの作成](#create-subscription)
    * [更新関数](#update-functions)
        * [サブスクリプションの更新](#update-subscription)
        * [サブスクリプションのステータスを更新](#update-subscription-status)
    * [削除関数](#dele-functions)
        * [サブスクリプションを削除](#delete-subscription)

<a name="read-functions"></a>
## 読み込み関数

<a name="get-all-subscriptions"></a>
### すべてのサブスクリプションを取得
> 例
```js
cb.listSubscriptions()
.then((result) => console.log(result))
.catch((err) => console.log(err))
```
<a name="get-subscription"></a>
### サブスクリプションを取得
> 例
```js
cb.getSubscription("5a83c5463fc4dec59e4ef8e2")
.then((result) => console.log(result))
.catch((err) => console.log(err))
```

<a name="create-functions"></a>
## 作成関数

<a name="create-subscription"></a>
### サブスクリプションの作成
> 例
```js
cb.createSubscription({
    "description": "Alert subscription TEST",
    "subject": {
    "entities": [
          {
            "idPattern": ".*",
            "type": "Alert"
        }
    ],
    "condition": {
        "attrs": [
            "id",
            "type",
            "category",
            "subCategory",
            "location",
            "address",
            "dateObserved",
            "validFrom",
            "validTo",
            "description",
            "alertSource",
            "data",
            "severity"
        ]
        }
    },
    "notification": {
        "attrs": [
            "id",
            "type",
            "category",
            "subCategory",
            "location",
            "address",
            "dateObserved",
            "validFrom",
            "validTo",
            "description",
            "alertSource",
            "data",
            "severity"
        ],
        "attrsFormat": "normalized",
        "http": {
            "url": "http://service.mx"
        }
    },
    "throttling": 5
})
.then((result) => console.log(result))
.catch((err) => console.log(err))
```

<a name="update-functions"></a>
## 更新関数

<a name="update-subscription"></a>
### サブスクリプションの更新
> 例
```js
cb.updateSubscription("5a93a9063fc4dec59e4ef8eb", {
    "description": "Alert subscription TEST",
    "subject": {
    "entities": [
          {
            "idPattern": ".*",
            "type": "Alert"
        }
    ],
    "condition": {
        "attrs": [
            "id",
            "type",
            "location",
            "address",
            "dateObserved",
            "validFrom",
            "validTo",
            "description",
        ]
        }
    },
    "notification": {
        "attrs": [
            "id",
            "type",
            "category",
            "subCategory",
            "location",
            "address",
            "dateObserved",
            "validFrom",
            "validTo",
            "description",
            "alertSource",
            "data",
            "severity"
        ],
        "attrsFormat": "normalized",
        "http": {
            "url": "http://crateservice.com"
        }
    },
    "throttling": 5
})
.then((result) => console.log(result))
.catch((err) => console.log(err))
```
<a name="update-subscription-status"></a>
### サブスクリプションのステータスを更新
> 例
```js
cb.updateSubscriptionStatus("5a81e50a3fc4dec59e4ef8dc", "active")
.then((result) => console.log(result))
.catch((err) => console.log(err))
```

<a name="dele-functions"></a>
## 削除関数

<a name="delete-subscription"></a>
## サブスクリプションを削除
> 例
```js
cb.deleteSubscription("5a93a9103fc4dec59e4ef8ec")
.then((result) => console.log(result))
.catch((err) => console.log(err))
```
