# Data Models Schemas Analyzer.

The component Data Models Schemas Analyzer of the ngsi-parser module analyses whether a context entity fulfills with the specification of an official data model. T. This Analyzer uses the official JSON Schema of data model for analyzing the context entity. If a context entity does not fulfill with the official specification of data model, then the Data Models Schemas Analyzer identify the errors in the structure of the entity.
The official specification (JSON Schema) of each one data model are located in the repository [dataModels](https://github.com/smartsdk/dataModels) of the SmartSDK account in Github.
You can learn more about JSON Schemas in [JSON Schema](http://json-schema.org/).

* [Importing JSON Schemas](#importing-json-schemas)
	* [Importing a JSON Schema from a remote repository](#importing-a-json-schema-from-a-remote-repository)
	* [Importing a JSON Schema from a JSON file](#importing-a-json-schema-from-an-external-json-file)
	* [Importing several schemas from different resources](#importing-several-schemas-from-different-reources)
* [Using the Data Models Schemas for verifying the structure of a data model](#using-the-data-models-schemas-for-verifying-the-structure-of-a-data-model)
	* [Verifying an entity with a JSON Schema file](#verifying-an-entity-with-a-JSON-Schema-file)
	* [Verifying an entity with a remote JSON Schema](#verifying-and-entity-with-a-remote-JSON-Schema)
	* [Verifying an entity with a remote JSON Schema (simplified mode)](#verifying-an-entity-with-a-remote-JSON-Schema-(simplified-mode))
* [Real Example Case]()
* [Types of errors in the Analysis of entities](#types-of-errors-in-the-analysis-of-entities)

## Importing JSON Schemas.
There are two ways to import a JSON schema with the ngsi-parser module, from an external file or from a remote repository.

### Importing a JSON Schema from a remote repository.
When you want to import a JSON schema from a remote repository, you can use the `setModel()` function. This function receives as parameter a JSON object with the URL of the JSON Schema. The next fragment of code shows an example of the `setModel()` function.

```javascript
	var ngsi = require('ngsi-parser');
	ngsi.setModel({
		myRemoteSchema : 'https://yourdatamodels.com/myRemote'
	});
```
### Importing a JSON Schema from an external JSON File.
When you want to import a JSON schema from a JSON file, you must import this file in the main file of the project, and store the schema in a variable. The variable of the JSON schema imported is used in the `setModel()` function. For example, in the next fragment of code is imported the file `mySchema.json and save it in the variable `mySchemaImported, then, this variable is used in the `setModel()`function. 

```javascript
	var ngsi = require('ngsi-parser');
	var mySchemaImported = require('mySchema.json');
	ngsi.setModel({
		mySchema : mySchemaImported
	});
```
### Importing several schemas from different sources 
The `setModel()` function manages several JSON schemas from a different  data sources. The following example shows the `setModel()` function, which receives the JSON schemas grouped in a JSON object. These JSON schemas can be imported from a JSON file or from a remote repository.
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
One of the functionalities of ngsi-parser module is the ability to verify that a context entity fulfills with the specification of a FIWARE data model. The `verifyModel()` function of ngsi-parser module verifies the structure of data model and determines if the data model fulfills with the official specification of the corresponding FIWARE data model. 
The next fragment of code shows one example of the verification of an entity. The first step is to import the JSON schema, in this example the JSON schema is imported from a JSON file called `mySchema.json`. This JSON schema imported have to be defined as JSON parameter in the `setModel()` function.  
function. The second step is to define the entity to verify, in the example this entity is `Room1`. Finally, the third step is to verify the entity, the `verifyModel()` function receives as parameters the JSON schema and the context entity defined.
The function `verifyModel()` performs a check of the entity for sure that it fulfills with the structure defined in the JSON Schema imported. If there are errors, the `verifyModel()` function returns an array with the errors found in the context entity.

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
An entity can be verified through a JSON schema imported from a remote repository. In this case, the `verifyModel()` function must receive as parameter the ocb-sender object for using a remote JSON schema. For example, in the following fragment of code the modules ngsi-parser and ocb-sender are imported in the JavaScript file. The JSON schema is imported from a remote repository, through the URL defined in the setModel() function. Afterwards, the `verifyModel()` function receives as parameters: the remote JSON schema, the entity to verify (in this example the entity `Room1`),  and the object ocb-sender.

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
#### Verifying an entity with a remote JSON Schema (simplified mode)
You can verify an entity just using a remote JSON schema and the `verifyModel()` function, without define the URL of the schema in the `setModel()` function. The `verifyModel()` function receives as parameters: the schema URL of the data model, the entity to verify and the ocb-sender object. 
Example:
```javascript
	var ngsi = require('ngsi-parser');
	var ocb = require('ocb-sender');
	ngsi.verifyModel('https://yourdatamodels.com/myRemote', entity, ocb)
	.then((errors) => { 
		if (errors.length === 0 ){
			console.log("The entity it's OK")
		}else {
			errors.map(console.log)
		}
	})
```
### Real Example Case 
The next JSON Schema defines the official specification for the Alert data model, this JSON schema is in the [dataModels](https://github.com/smartsdk/dataModels) repository of the SmartSDK account in Github, in this [link](https://github.com/smartsdk/dataModels/blob/master/Alert/schema.json).
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
The next fragment of code uses the JSON Schema of the Alert data model defined above. The schema URL is defined in the `setModel()` function and the alert entity is stored in the variable `alertEntity`. For check this entity, the `verifyModel()` function receives as parameters: the schema of Alert Data Model, the alert entity and the ocb-sender object.

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
		//another action if the entity does not fulfill with the model Alert
	}
})
```
### Types of errors of the Data Models Schemas Analyzer
The types of errors produced by the Analyzer are clasified in two groups of errors: errors in the schema, i.e. errors in the JSON Schema that you provided for the analysis of entities; and,errors in the entities denifition, i.e errors in your entity definition according to selected data model.

#### Errors in the JSON Schema provided

1. The schema is not well-defined, needs the property `allOf` or `definition`
2. The `allOf` property should be an array
3. The `definition` property should be a JSON 
4. The schema is not well-defined, needs the property `oneOf` or `required`
5. The `oneOf` property should be an array
6. The schema does not fulfill with the required attribute: `options`
7. Currently, the analyzer only supports the common refs of GSMA, Location and PhysicalObject

#### Errors in your entity definition

1. The attribute X is not an official attribute of the data model 
2. The attribute X is required in the model definition 
3. Error in the type of X attribute
4. Error in the format date of X attribute

For attributes `type`: text:

1. Error: the minLength of X attribute must be X
2. Error: the maxLength of X attribute must be X

For attributes `type`: number:

1. Error: the maximum value of X attribute must be X
2. Error: the minimum value of X attribute must be X

For attributes `type`: array:

1. Error: the minItems of X attribute must be X
2. Error: the attribute X is not in the list of allowed values

