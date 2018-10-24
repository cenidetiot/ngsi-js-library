# Pre-requirements of Installation

The pre-requirements for installing and using the modules of NGSI JavaScript Library are the following:

##Node.js and npm

The installation of Node.js can carried out through an executable installer or by downloading the source code; this choice depends directly on the operating system where it will be installing. You can find the download files and the steps for the installation in the official download link, which is the following: https://nodejs.org/en/download/
The current version of Node.js is 8.10.0, this version includes npm in its version 5.6.0.
The installation of both modules of the NGSI JavaScript library requires the previous installation of the following versions of node.js and npm.

- node.js >= 8.x.x (in version 8.10.0 or higher)
- npm >= 5.x.x (in version 5.0.0 or higher)

You can execute the following commands in console for verify the version of Node.js and npm that you have installed in your operating system.

- node -v
- npm -v

## Yarn (optional)
Yarn is a package manager for node packages. You can use this manager instead of npm, if you prefer to install the NSGI Library modules with this package manager. The instructions for installing Yarn are described in the official site of Yarn, in the following [link](https://yarnpkg.com/lang/en/docs/install)

# NGSI JavaScript Library Installation

## NGSI - parser module installation

You can install the ngsi-parser module through one of the following lines of code:

    npm install ngsi-parser 
    
   or
   
    yarn add ngsi-parser

## OCB - sender module installation

You can install the ocb-sender module through one of the following lines of code:

    npm install ocb-sender
    
   or
   
    yarn add ocb-sender