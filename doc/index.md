# Welcome to NGSI Library JavaScript.

## Introduction
The NGSI library for JavaScript is a software tool with the aim of transforming JSON entities to NGSI data models, which can be manipulated or operated by the FIWARE Orion Context Broker. The library can be use in the development of mobile applications with frameworks that use JavaScript as a language to develop of Android or IOS native applications, such as React Native o Native Script. This library can be also implemented in web applications through RESTFul web services, with the NodeJS execution environment.

The NGSI library is a client of the Orion Context Broker that implement functionalities for the analysis of the JSON objects to determine the match with a data model, and also, functionalities to transform JSON objects to a NGSI v2 entities.

The NGSI Library is composed of two npm modules:

### NGSI-parser module

NGSI-parser module analyzes the syntax of non-structured JSON objects or attributes to transform them into FIWARE-NGSIv2 context entities.

[ngsi-parser](https://github.com/cenidetiot/ngsi-parser)

### OCB-sender module

OCB-sender module is an Orion ContextBroker's client. This client manipulates the context information of FIWARE-NGSIv2 context entities, with the aim of send the NGSI context entities updates to the Orion Context Broker and, in this way make operations with them.

[ocb-sender](https://github.com/cenidetiot/ocb-sender)

## Pre-requirements of Installation 

In order to use both npm modules of NGSI JS LIbrary its necessary cover the next requirements.

### Node.js and npm

The installation of Node.js is done through an executable installer or by downloading the source code, this depends directly on the operating system in which it is installed. On the official page of Node.js you can find the download files and the steps to follow for their installation, the official download link is the following:
[https://nodejs.org/en/download/](https://nodejs.org/en/download/)

The current version of Node.js is 8.10.0, this version includes npm in its version 5.6.0.

The installation of both modules of the NGSI Javascript library requires the previous installation of the following versions.

- Node.js> = v8.x.x (in version 8.10.0 or higher)
- npm> = 5.x.x (in version 5.0.0 or higher)

To verify the current version of Node and npm, execute the following commands in console:

- node -v
- npm -v
