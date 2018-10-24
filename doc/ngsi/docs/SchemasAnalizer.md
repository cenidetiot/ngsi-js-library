# Data Models Schemas Analyzer.

The component Data Models Schemas Analyzer of the ngsi-parser module analyses whether a context entity complies with the specification of an official data model. This Analyzer uses the JSON Schema of the official data model for analyzing the context entity. Afterwards, the analyzer determines if the context entity fulfills with the specification provided through JSON Schema. If a context entity does not fulfill with the official specification of a data model, then the Data Models Schemas Analyzer identify the errors in the structure of the entity.
The official specification (JSON Schema) of each one data model are located in the repository **dataModels** of the SmartSDK account in Github.
You can learn more about JSON Schemas in [JSON Schema](http://json-schema.org/).

* [Importing JSON Schemas](#importing-json-schemas)
	* [Importing a JSON Schema from a remote repository](#importing-a-json-schema-from-a-remote-repository)
	* [Importing a JSON Schema from an external JSON file](#importing-a-json-schema-from-an-external-json-file)
	* [Importing several schemas from different resources](#importing-several-schemas-from-different-reources)
* [Using the Data Models Schemas for verifying the structure of a data model](#using-the-data-models-schemas-for-verifying-the-structure-of-a-data-model)
	* [Verifying an entity with a JSON Schema file]()
	* [Verifying an entity with a JSON Schema remote]()
	* [Verifying an entity with a JSON Schema remote (simplified mode)]()
* [Real Example Case]()

## Importing JSON Schemas.
There are two ways to import a JSON schema with the ngsi-parser module, from an external file or from a remote repository.

### Importing a JSON Schema from a remote repository.
When you want to import a JSON schema from a remote repository, you can use the setModel() function. This function receives as parameter a JSON object with the URL of the JSON Schema. The next example shows the setModel() function which receives as parameter the JSON with URL of the JSON schema.
Example:
```javascript
	var ngsi = require('ngsi-parser');
	ngsi.setModel({
		myRemoteSchema : 'https://yourdatamodels.com/myRemote'
	});
```
### Importing a JSON Schema from an external JSON File.
When you want to import a JSON schema from an external JSON schema file, you must import the external JSON schema file in the main file of the project, and store the schema in a variable. The variable of the JSON schema imported is used in the setModel() function. You must specify as parameter of the setModel() function , the JSON object that contains the variable of the JSON schema imported. The next example shows the JSON Schema imported in the project, called `mySchema.json`. This schema is stored in a variable called `mySchemaImported` and used in the setModel() function.
Example:
```javascript
	var ngsi = require('ngsi-parser');
	var mySchemaImported = require('mySchema.json');
	ngsi.setModel({
		mySchema : mySchemaImported
	});
```
### Importing several schemas from different sources 
The setModel() function manages several JSON schemas from a different  data sources. The example below shows the setModel() function, which receives the JSON schemas grouped in a JSON object. These JSON schemas can be imported from a JSON file or from a remote repository.
Example:
```javascript
	var ngsi = require('ngsi-parser');
	var mySchemaImported = require('mySchema.json');
	ngsi.setModel({
		mySchema: mySchemaImported,
		myRemoteSchema : 'https://yourdatamodels.com/myRemote',
		AlertModel : 'https://raw.githubusercontent.com/smartsdk/dataModels/master/Alert/schema.json',
		anotherModel : require('anotherSchema.json')
	});
```

## Using the Data Models Schemas for verifying the structure of an entity

### Verifying an entity with a JSON Schema file
One of the functionalities of ngsi-parser module is the ability to verify that a context entity or data model fulfills with the specification of a FIWARE data model. The verifyModel() function of ngsi-parser module verify the data structure of data model and to determine if the data model fulfills with the official specification of the corresponding FIWARE data model. 
The next fragment of code shows one example of the verification of an entity. The first step is import the JSON schema (in the example this JSON schema is imported from a JSON file called `mySchema.json`), the JSON schema imported have to be defined as JSON parameter in the setModel() function.  The second step is define the entity (in the example the entity is `Room1`). Finally, the third step is to verify the entity, the verifyModel() function receives as parameters the JSON schema and the context entity defined. The function verifyModel() performs a check of the entity for sure that fulfills with the structure defined in the JSON Schema imported. If exist errors, the verifyModel() function return one array with the errors found in the context entity.
```javascript
	var ngsi = require('ngsi-parser');
	var mySchemaImported = require('mySchema.json');
	ngsi.setModel({
		mySchema : mySchemaImported
	});
	var entity = { 
		id :'Room1',
		type:'Room',
		temperature : 50, 
		dateCreated :  new  Date()  
	};
	let errors  = ngsi.verifyModel('mySchema', entity);
	if (errors.length === 0 ){
		console.log("The entity it's OK")
	}else {
		errors.map(console.log)
	}
```
### Verifying an entity with a remote JSON Schema 
An entity can be verified through a JSON schema imported from a remote repository. The verifyModel() function receives as parameter the ocb-sender object for using the   remote JSON schema, in this case the verifyModel() function becomes to a promise. For example, the next fragment of code shows the following: the modules ngsi-parser y ocb-sender are imported in the JavaScript file and also the JSON schema is imported from a remote repository, through the URL typed in the setModel() function. Afterwards, the verifyModel() function receives as parameters: the remote JSON schema, the entity to verify (in this example, the entity `Room1`),  and the object ocb-sender.
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
		dateCreated :  new  Date()  
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
#### Verifying an entity with a JSON Schema remote (simplified mode)
You can verify an entity just using a remote JSON schema and the VerifyModel () function, without define the URL of the schema through the setModel() function.
The VerifyModel () function receives as parameters: the URL of the schema of the data model, the entity to verify and the ocb-sender object. 
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
The next JSON Schema define the official specification for the Alert data model, this JSON schema is in the [dataModels](https://github.com/smartsdk/dataModels) repository of the SmartSDK account in Github), in this [link](https://github.com/smartsdk/dataModels/blob/master/Alert/schema.json).
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
The next fragment of code uses the JSON Schema of the Alert data model defined above. The setModel() function receives this schema through the URL of the repository. Afterwards, the alert entity to verify (in this example the alertEntity) is stored in a variable. Finally, the verifyModel() function receives as parameters: the Alert schema, the alert entity and the ocb-sender object.
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