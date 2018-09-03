# Subscriptions Functions

* [Read Functions](#read-functions)
	* [Get All Subscriptions](#get-all-subscriptions)
	* [Get Subscription](#get-subscription)
* [Create Functions](#create-functions)
	* [Create Subscription](#create-subscription)
* [Update Functions](#update-functions)
    * [Update Subscription](#update-subscription)
    * [Update Subscription Status](#update-subscription-status)
* [Delete Functions](#dele-functions)
	* [Delete Subscription](#delete-subscription)

## Read Functions.

### Get Subscriptions.
Example
```js
cb.listSubscriptions()
.then((result) => console.log(result))
.catch((err) => console.log(err))
```
### Get Subscription.
Example
```js
cb.getSubscription("5a83c5463fc4dec59e4ef8e2")
.then((result) => console.log(result))
.catch((err) => console.log(err))
```
## Create Functions.

### Create Subscription.
Example
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

## Update Functions.

### Update Subscription
Example
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
### Update Subscription Status.
Example
```js
cb.updateSubscriptionStatus("5a81e50a3fc4dec59e4ef8dc", "active")
.then((result) => console.log(result))
.catch((err) => console.log(err))
```

## Delete Functions.

##Delete Subscription.
Example
```js
cb.deleteSubscription("5a93a9103fc4dec59e4ef8ec")
.then((result) => console.log(result))
.catch((err) => console.log(err))
```