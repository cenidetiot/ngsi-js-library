# Welcome to NGSI JavaScript Library by CENIDET SmartSDK

## Introduction

The NGSI JavaScript library is a software tool that aims the treatment of JSON entities or models for its conversion to NGSI context data models, which can be manipulated and operated by the FIWARE Orion ContextBroker.
The NGSI JavaScript Library is composed of two npm modules:

### NGSI-parser modules.

NGSI-parser module analyzes the syntax of unstructured JSON objects to transform them into FIWARE-NGSIv2 objects.

[https://github.com/cenidetiot/NGSI.jsLibrary](https://github.com/cenidetiot/NGSI.jsLibrary)

### OCB-sender modules.
OCB-sender manipulates FIWARE-NGSIv2 objects with the aim of sending them to the FIWARE Orion Context Broker and, in this way make operations with them.

[https://github.com/cenidetiot/OCB.jsLibrary](https://github.com/cenidetiot/OCB.jsLibrary)

### Pre-requirements

In order to use both npm modules of NGSI JS LIbrary its necessary cover the next requirements.

#### Node.js and npm

The installation of Node.js is done through an executable installer or by downloading the source code, this depends directly on the operating system in which it is installed. On the official page of Node.js you can find the download files and the steps to follow for their installation, the official download link is the following:
[https://nodejs.org/en/download/](https://nodejs.org/en/download/)

The current version of Node.js is 8.10.0, this version includes npm in its version 5.6.0.

The installation of both modules of the NGSI Javascript library requires the previous installation of the following versions.

* Node.js> = v8.x.x (in version 8.10.0 or higher)
* npm> = 5.x.x (in version 5.0.0 or higher)

To verify the current version of Node and npm, execute the following commands in console:

* node -v
* npm -v
