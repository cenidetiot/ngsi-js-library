# NGSI JavaScript Library.

## Introduction

The NGSI library for JavaScript is a software tool with the aim of transforming JSON entities to NGSI data models, which can be manipulated or operated by the FIWARE Orion Context Broker. This library can be implemented in  applications through RESTFul web services or backend, with the NodeJS execution environment.
The NGSI JavaScript Library is composed of two npm modules:

### NGSI-parser module

NGSI-parser module analyzes the syntax of non-structured JSON objects to transform them into FIWARE-NGSIv context entities.

[ngsi-parser repository](https://github.com/cenidetiot/ngsi-parser)

### OCB-sender module

OCB-sender manipulates FIWARE-NGSIv2 objects with the aim of sending them to the FIWARE Orion Context Broker and, in this way make operations with them.

[ocb-sender repository](https://github.com/cenidetiot/ocb-sender)

## Installation pre-requirements and requirements

- For the pre-requirements of installation, refer to the [Pre-requirements](doc/index.md#pre-requirements-of-installation) section.
- For the installation of ngsi-parser npm module, refer to the documentation of this module in the [How to Install](doc/ngsi/index.md#how-to-install) section. 
- For the installation of ocb-sender npm module, refer to the documentation of this module in the [How to Install](doc/ocb/index.md#how-to-install) section.

## Modules usage 

### ngsi-parser module
- Refer to the [ngsi-parser](doc/ngsi/index.md) section for the more information about functionalities of this module and how to implement them.

### ocb-sender module
- Refer to the [ocb-sender](doc/ocb/index.md) section for the more information about functionalities of this module and how to implement them.

### Examples
- In the [Examples of both modules usage](doc/modulesUsage/index.md) section refer information about how to use functionalities of both module together.

## Important reminder about clone this GIT repository

In order to clone this repository its necessary execute **git clone --recursive command**, to download the code and resources of submodules ngsi-parser and ocb-sender.
    
    git clone --recursive https://github.com/cenidetiot/ngsi-js-library.git

