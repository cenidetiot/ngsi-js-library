# Data Models Schemas Analyzer.

ngsi-parser module helps you to manage Data Models like used in FIWARE. ngsi-parser analyzes if an context entity fulfills with the specification of a data model and, in case of not, identify its errors. To do this, the Schema Analyzer of ngsi-parser needs the JSON Schema of the Data Model with which will analyze the context entity,  to determinates if the context entity complies with the specification provided by JSON Schema. The official specification (JSON Schema) of each one data models are located in the repository “dataModels” of the SmartSDK  account in Github.
You can know about JSON Schemas in  [JSON Schema](http://json-schema.org/).

* [Importing JSON Schemas](#generate-dinamic-query-in-string-format)
	* [Importing a JSON Schema from a remote repository]()
	* [Importing a JSON Schema from an external JSON file]()
	* [Importing several schemas from different resources]()
* [Use the data model schemas for verify the structure of a data model](#usage-with-ocb-sender)
	* [Verifying a data model without storing the JSON Schema]()
* [Real Example Case]()

## Importing JSON Schemas.
In ngsi-parser there are two ways to import your JSON schema, from an external file or from a remote repository.

### Importing a JSON Schema from a remote repository.
To import a JSON schema from a remote repository this must be specified with the URL inside of setModel() function.
Example:
```javascript
	var ngsi = require('ngsi-parser');
	ngsi.setModel({
		myRemoteSchema : 'https://yourdatamodels.com/myRemote'
	});
```
### Importing a JSON Schema from an external JSON File.
To import a JSON Schema from a file, the name of JSON file must be specified in the JavaScript file with the method require and save it in a variable, and after that implement it  with the setModel() function.
Example:
```javascript
	var ngsi = require('ngsi-parser');
	var mySchema = require('mySchema.json');
	ngsi.setModel({
		mySchema : mySchema
	});
```
### Importing several schemas from different sources 
Of course it could be necessary import several schemas form a different resources (either a JSON file or from a remote repository), the setModel() function allows to manage the schemas saved in attributes of the JSON that receives as parameter the same function.
Example:
```javascript
	var ngsi = require('ngsi-parser');
	var mySchema = require('mySchema.json');
	ngsi.setModel({
		mySchema : mySchema,
		myRemoteSchema : 'https://yourdatamodels.com/myRemote',
		AlertModel : 'https://raw.githubusercontent.com/smartsdk/dataModels/master/Alert/schema.json',
		anotherModel : require('anotherSchema.json')
	});
```

### Using your Data Models Schemas 
To verify a data model with a JSON schemas imported from a JSON file, you need to specify the name with which was imported and include this name in the setModel() function as a JSON parameter. Then, the function verifyModel() will return one array with the errors found in the context entity, if was the case. To do this, the function verifyModel() receives as parameters the JSON schema and the context entity to compare. One example is the following:
```javascript
	var ngsi = require('ngsi-parser');
	var mySchema = require('mySchema.json');
	ngsi.setModel({
		mySchema : mySchema
	});
	var entity = { 
		id :'Room1',
		type:'Room',
		temperature : 50, 
		dateStamp :  new  Date()  
	};
	let errors  = ngsi.verifyModel('mySchema', entity);
	if (errors.length === 0 ){
		console.log("The entity it's OK")
	}else {
		errors.map(console.log)
	}
```
To verify a data model with a remote schema, is necessary specify the ocb-sender object as parameter of the verifyModel() function; in this case the method verifyModel() becomes to a promise.
```javascript
	var ngsi = require('ngsi-parser');
	var ocb = require('ocb-sender');
	ngsi.setModel({
		myRemoteSchema : 'https://yourdatamodels.com/myRemote',
	});
	var entity = { 
		id :'Room1',
		type:'Room',
		temperature : 50, 
		dateStamp :  new  Date()  
	};
	ngsi.verifyModel('myRemoteSchema', entity, ocb)
	.then((errors) => { 
		if (errors.length === 0 ){
			console.log("The entity it's OK")
		}else {
			errors.map(console.log)
		}
	})
```
#### Verifying a data model without storing the JSON schema. 
To verify a data model with a JSON schema extracted from remote repository, without storing it in a variable, the URL of this schema it can be included directly as a parameter of the verifyModel() function, including in this same function, the entity/data model to verify and the ocb-sender object.
Example:
```javascript
	var ngsi = require('ngsi-parser');
	var ocb = require('ocb-sender');
	ngsi.verifyModel('https://yourdatamodels.com/myRemote', entity ,cb)
	.then((errors) => { 
		if (errors.length === 0 ){
			console.log("The entity it's OK")
		}else {
			errors.map(console.log)
		}
	})
```
### Real Example Case 
This is the JSON Schema of the Alert data model, imported from [SmartSDK Data Models Repository]
(https://github.com/smartsdk/dataModels) in this [link](https://github.com/smartsdk/dataModels/blob/master/Alert/schema.json).
```json
{
	"$schema": "http://json-schema.org/schema#",
	"id": "https://fiware.github.io/dataModels/Alert/schema.json",
	"title": "Alert data model JSON Schema",
	"description": "An alert generated by a user or device in a givel location",
	"type": "object",
	"allOf": [
		{
			"$ref": "https://fiware.github.io/dataModels/common-schema.json#/definitions/GSMA-Commons"
		},
		{

			"$ref": "https://fiware.github.io/dataModels/common-schema.json#/definitions/Location-Commons"

		},
		{
			"properties": {
				"description": {
					"type": "string"
				},
				"dateObserved": {
					"type": "string",
					"format": "date-time"	
				},
				"validFrom": {
					"type": "string",
					"format": "date-time"
				},
				"validTo": {
					"type": "string",
					"format": "date-time"
				},
				"severity": {
					"type": "string",
						"enum": [
							"informational",
							"low",
							"medium",
							"high",
							"critical"
						]
				},
				"category": {
					"type": "string",
					"enum": [
						"traffic",
						"weather",
						"environment",
						"health",
						"security"
					]
				},
				"subCategory": {
					"type": "string",
					"enum": [
						"trafficJam",
						"carAccident",
						"carWrongDirection",
						"carStopped",
						"pothole",
						"roadClosed",
						"roadWorks",
						"hazardOnRoad",
						"injuredBiker",
						"rainfall",
						"highTemperature",
						"lowTemperature",
						"heatWave",
						"ice",
						"snow",
						"wind",
						"fog",
						"flood",
						"tsunami",
						"tornado",
						"tropicalCyclone",
						"hurricane",
						"asthmaAttack",
						"bumpedPatient",
						"fallenPatient",
						"heartAttack",
						"suspiciousAction",
						"robbery",
						"assault"
					]
			},
			"alertSource": {
				"oneOf": [
					{
						"type": "string",
						"format": "uri"
					},
					{
						"$ref": "https://fiware.github.io/dataModels/common-schema.json#/definitions/EntityIdentifierType"
					}
				]
			},
			"data": {
				"type": "object"
			},

				"type": {
					"type": "string",
					"enum": [
						"Alert"
					],
					"description": "NGSI Entity type"
				}
			}
		}
	],
	"oneOf": [
		{
			"required": [
				"id",
				"type",
				"location",
				"alertSource",
				"category",
				"dateObserved"
			]
		},
		{
			"required": [
				"id",
				"type",
				"address",
				"alertSource",
				"category",
				"dateObserved"
			]
		}
	]
}
```
Initially in a JavaScript project they are imported both modules of the NGSI library. In the setModel() function is specified the JSON schema from a remote repository,  in this case the schema of the Alert data model. After this, in a variable is stored the entity/data model given by the user/device (context producer) and in the verifyModel() they are defined: the Alert schema, the alert entity to verify and the ocb-sender object (used for download the schema provided with the URL of the schema).
Example:
```javascript 
var ngsi = require('ngsi-parser');
var ocb = require('ocb-sender');

ngsi.setModel({
	Alert : 'https://raw.githubusercontent.com/smartsdk/dataModels/master/Alert/schema.json'
})

var  alertEntity  = {
	id: "Alert:Device_Smartphone_7a85d9df7209b8bc:1519086635021",
	type: "Alert",
	alertSource: "Device_Smartphone_7a85d9df7209b8bc",
	category: "traffic",
	dateObserved: new  Date(),
	description: "Car Accident on Cenidet",
	location: {
	type : "geo:point",
		value : "18.81186166666667 ,-98.96342000000001"
	},
	severity: "medium",
	subCategory: "carAccident",
	validFrom: new  Date(),
	validTo: new  Date(),
	dateCreated : new  Date()
}

ngsi.verifyModel('Alert', alertEntity, ocb)
.then((errors) => {
	if (errors.length === 0 ){
		console.log("The entity it's OK");
		var ngsiEntity = ngsi.parseEntity(alertEntity);
		ocb.createEntity(ngsiEntity)
		.then((result) => console.log(result))
		.catch((err) => console.log(err))
	}else {
		errors.map(console.log)
		//another action if it does not comply with the model
	}
})
```