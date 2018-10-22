# Introduction

Welcome to the quick start guide of NGSI JavaScript Library! In this brief chapter, you will find general information to help you understand the way that the library is composed and how it works.
The NGSI Library manipulates the context entities according to the FIWARE-NGSI v2 API. The specification intended to manage the entire lifecycle of context information, including updates, queries, registrations, and subscriptions. 
The NGSI Library is composed of two npm modules: ngsi-parser and ocb-sender, these are node packages that can be found in the [official site of npm](https://www.npmjs.com/).

### NGSI-parser module

The NGSI-parser module analyzes the syntax of non-structured JSON objects to transform them into FIWARE-NGSIv2 entities, through treatment of the context entity or data model given by a context producer and following the guidelines of the official specification of the NGSIv2. In addition, this module provides functionalities to verify the structure of the entities to check if this fulfills with the specification of an official data model of FIWARE.

- [ngsi-parser repository](https://github.com/cenidetiot/ngsi-parser)

### OCB-sender module

OCB-sender module is an Orion ContextBroker's client. This client manipulates the context information of FIWARE-NGSIv2 context entities, with the aim of send the updates of NGSI context entities to the Orion Context Broker.

- [ocb-sender repository](https://github.com/cenidetiot/ocb-sender)

## How it works the NGSI library

The architecture of the NGSI library is composed by two modules npm: ngsi-parser and ocb-sender. These modules can be imported in a unique project of JavaScript, and they could be used together or separately. The following figure shows the components of each of the modules that make up the architecture of the library.

![NGSI Library Architecture](images/architecture.png)
 
### ngsi-parser module

The ngsi-parser module has the aim to analyze the syntax of a non-structured JSON object or attribute, to convert it to an NGSI context entity. Moreover, this module verifies whether a context entity fulfills with the specification of a FIWARE data model.

The library verifies if the original JSON structure of an entity, matches with the corresponding FIWARE data model. These data models are located in the repository **dataModels** of the SmartSDK account in Github.
The ngsi-parser contains three basic elements to perform the analysis of the JSON objects: 


- **a) A JSON Parser**, that includes functions for analysis non-structured JSON objects and convert them to entities that fulfill with the NGSI standard.
- **b) A Queries Parser**, which is the responsible element to produce context queries through the interpretation of JSON objects, for to obtain specific data from the Orion Context Broker. 
- **c) A Data JSON Schema Analyzer**, which is the responsible for determining if a JSON entity fulfills  with the specification of a specific data model or not . The JSON entities are analyzed according to the rules specified in the data model JSON schema. If the JSON entity does not fulfill with the official specification of the data model, the Data JSON Schema Analyzer generates a list of the errors that exist in the JSON entity, according to the JSON schema of the official data model.

### ocb-sender module

The main aim of ocb-sender module is handling the context information of NGSI entities and/or FIWARE data models, in order to send this information to an instance of the Orion Context Broker. The ocb-sender module is composed by four blocks of code: an entities functions block, a block of queries functions, a block of subscriptions functions and the last one block, the HTTP client. 
The first three blocks encapsulate the client functionalities of the Orion Context Broker. The last block is the HTTP Client, this act as a communication channel between the functionalities of the first three blocks and the Orion Context Broker. The features of these four blocks are the following: 

- **a) Entities Functions block**, this implements the functions to manipulate the entities of the Orion Context Broker.
- **b) Queries Functions block**, this considers the functions for personalized queries to the Orion Context Broker.
- **c) Subscriptions Functions block**, this implements the functions to manipulate the subscriptions of the Orion Context Broker.
- **d) The HTTP-Client** is the responsible for the connection of the Orion Context Broker, this component is also used for the ngsi-parser to obtain the JSON schemas from a repository.

## More Information

This is a small introduction of the NGSI Library, if you want to learn more about the library consult the following sections:

- Refer to the [Installation & Administration Manual](adminManual.md) to learn more about installing the modules of the library and getting them running.
- Refer to the [User & Programmers Manual](usersManual.md) to learn more about the functionalities that offers each of the library modules and how make operations in conjunction with both modules.
- If exists doubts about how the context entities or data models are treated, please visit the reference of [FIWARE- NGSI v2 specification](http://fiware.github.io/context.Orion/api/v2/stable/).
