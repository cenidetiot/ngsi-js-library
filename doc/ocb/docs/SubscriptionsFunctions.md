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

### Get Subscriptions
The listSubscriptions() function is used for retrieve the subscriptions list stored in the Orion ContexBroker. Remember that, the ContextBroker returns to a request like this, the latest 20 subscriptions stored. At the moment, this function does not support the pagination mechanism to retrieve large sets of resources. 
Example:
```js
cb.listSubscriptions(headers)
.then((result) => console.log(result))
.catch((err) => console.log(err))
```
### Get a Subscription
The getSubscription() function is used for retrieve a specific subscription. This function receive as parameter the id of the subscription. In the next example, the getSubscription function() receives as parameter the subscription id `5a83c5463fc4dec59e4ef8e2`.
```js
cb.getSubscription("5a83c5463fc4dec59e4ef8e2", headers)
.then((result) => console.log(result))
.catch((err) => console.log(err))
```
## Create Functions.

### Create Subscription.
The createSubscription() function is used for register a subscription in the Orion ContextBroker. This function receives as parameter the NGSI subscription. For example:
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
}, headers)
.then((result) => console.log(result))
.catch((err) => console.log(err))
```

## Update Functions.

### Update Subscription
The updateSubscription() function is used for update an existing subscription. This function receives two parameters: the id of the subscription and the body of the subscription. The requirement to use this function is the subscription is stored in ContextBroker so you can update it. The next example shows the update of the subscription with id: `5a93a9063fc4dec59e4ef8eb`.
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
The updateSubscriptionStatus() function is used for update the status of a subscription. A subscription can have three types of status: active, inactive and failed. The next function shows an example of the update of the status of a subscription, the subscription with id `5a81e50a3fc4dec59e4ef8dc` and status `active`.
```js
cb.updateSubscriptionStatus("5a81e50a3fc4dec59e4ef8dc", "active", headers)
.then((result) => console.log(result))
.catch((err) => console.log(err))
```

## Delete Functions.

##Delete Subscription.
The deleteSubscription() function is used for remove an subscription stored in the ContextBroker. This function receive as parameter the id of the subscription. For example: 
```js
cb.deleteSubscription("5a93a9103fc4dec59e4ef8ec")
.then((result) => console.log(result))
.catch((err) => console.log(err))
```