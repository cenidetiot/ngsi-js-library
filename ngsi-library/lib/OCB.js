"use strict";
var fetch = require('node-fetch');
class OCB { 
    constructor(){
        this._host  = null;
        this._port = null;
        this._version = null;
        this._connect = null;
    }


    downloadModel(url) {
        let t = this
        const promise = new Promise(function (resolve, reject) {
            const options = {
                method: 'GET',
                headers: {
                    'Access-Control-Allow-Methods':'GET, POST, OPTIONS, PUT, PATCH, DELETE'
                },
            };
            fetch(url, options)
            .then(function(res) {              
                if(res.status >= 200 && res.status <= 208){
                    resolve(res.json());
                }else{
                    reject({status : res.status , message : res.statusText});
                }
                
            })
            .catch((err) => {
                reject(new Error(`Ha ocurrido un error en la búsqueda de la entidad: ${err}`))
            });
        })
        return promise

    }

    getWithQuery(query){
        let t = this
        const promise = new Promise(function (resolve, reject) {
            const options = {
                method: 'GET',
                headers: {
                    'Access-Control-Allow-Methods':'GET, POST, OPTIONS, PUT, PATCH, DELETE'
                },
            };
            fetch(t._URLContext+`/entities${query}`, options)
                .then(function(res) {              
                    if(res.status >= 200 && res.status <= 208){
                        resolve(res.json());
                    }else{
                        reject({status : res.status , message : res.statusText});
                    }
                    
                })
                .catch((err) => {
                    reject(new Error(`Ha ocurrido un error en la búsqueda de la entidad: ${err}`))
                });
        })
        return promise
    }

    queryEntitiesOnArea() {
        let polygon = arguments[0]
        let query = "?"
        if (arguments[1] !== undefined && arguments[2] === undefined){
            if (typeof arguments[1] === 'boolean'){
                if(arguments[1]){
                    query+="options=keyValues&"
                }
            }else {
                return new Error('Se esperaba valor boleano')
            }
        }else if (arguments[1] !== undefined && arguments[2] !== undefined ) {
                if (arguments[3] !== undefined && arguments[3]) 
                    query+="options=keyValues&"
                query+= `id=${arguments[1]}`
                query+= `&type=${arguments[2]}&`
            }else if(
                (arguments[1] === undefined && arguments[2] !== undefined) || 
                (arguments[1] !== undefined && arguments[2] === undefined)
            )
                 return new Error('Error numero de parametros')
            query+='georel=coveredBy&geometry=polygon&coords='
            query+=polygon.join(';')
        //return query;
        //console.log(query)
        let t = this 
        const promise = new Promise(function (resolve, reject) {

            const options = {
                method: 'GET',
                headers: {
                    'Access-Control-Allow-Methods':'GET, POST, OPTIONS, PUT, PATCH, DELETE'
                },
            };
            fetch(t._URLContext+`/entities${query}`, options)
                .then(function(res) {              
                    if(res.status === 200){
                        resolve(res.json());
                    }
                    if (res.status === 404){
                        reject(new Error("Las entidades no ha sido encontradas"));
                    }
                })
                .catch((err) => {
                    reject(new Error(`Ha ocurrido un error en la búsqueda de la entidades: ${err}`))
                });
        })
        return promise

    }  
    config(host, port, version ){
        this._host = host;
        this._port = port.toString();
        this._version = version;
        this._URLContext= this._host+':'+this._port+'/'+this._version;
        return this.testConnect();
    }
    testConnect(){
        let t = this 
        const promise = new Promise(function (resolve, reject) {
            fetch(t._URLContext)
            .then((res) => {
                if(res.status === 200){
                    resolve({statusCode : res.status, message: "Se estableció conexión con el ContextBroker"})
                }
                if (res.status === 404){
                    reject(new Error("Solicitud Fallida. URL no encontrada"))
                }
            })
            .catch((err)=>{
                reject(new Error(`Ha ocurrido un error en la conexión: ${err}`))
            })
        })
        return promise
    }    
    retrieveAPIResources(){
        let t = this 
        const promise = new Promise(function (resolve, reject) {
            fetch(t._URLContext)
            .then((res) => {
                if(res.status === 200){
                    resolve(res.json())
                }
                if (res.status === 404){
                    reject(new Error("Bad Request. Resources NOT Found"))
                }
            })
            .catch((err)=>{
                reject(new Error(`Ha ocurrido un error en la conexión: ${err}`))
            })
        })
        return promise
    }
    addTimeStampEntity(entity){
        let timeStamp = 
            {
                "value": new Date().toISOString(),
                "type" : "DateTime"
            };
        entity['timestamp'] = timeStamp;
        return entity;
    }
    createEntity(entity){
        //Add timestamp attribute to all entity that will be created
        //this.addTimeStampEntity(entity);
        let t = this
        const promise = new Promise(function (resolve, reject) {
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(entity)
            };
            fetch(t._URLContext+'/entities', options)
                .then(function(res) {                    
                    if(res.status === 201){
                        resolve({statusCode : res.status, message:"Entidad creada con éxito"})
                    }
                    if (res.status === 422){
                        reject(new Error("Entidad con ID existente"))
                    }
                })
                .catch(function(err){
                    reject(new Error(`Ha ocurrido un error en el ingreso de la entidad: ${err}`))
                });

        })
        return promise            
    }
    getEntity(idEntity){
        let t = this
        const promise = new Promise(function (resolve, reject) {
            const options = {
                method: 'GET',
                headers: {
                    'Access-Control-Allow-Methods':'GET, POST, OPTIONS, PUT, PATCH, DELETE'
                },
            };
            fetch(t._URLContext+'/entities/'+idEntity, options)
                .then(function(res) {              
                    if(res.status === 200){
                        resolve(res.json());
                    }
                    if (res.status === 404){
                        reject(new Error("La entidad con 'id': "+idEntity+ " no ha sido encontrada"));
                    }
                })
                .catch((err) => {
                    reject(new Error(`Ha ocurrido un error en la búsqueda de la entidad: ${err}`))
                });
        })
        return promise

    }
    getEntityAttrs(idEntity){
        let t = this
        const promise = new Promise(function (resolve, reject) {
            const options = {
                method: 'GET',
                headers: {
                    'Access-Control-Allow-Methods':'GET, POST, OPTIONS, PUT, PATCH, DELETE'
                },
            };
            fetch(t._URLContext+'/entities/'+idEntity+'/attrs', options)
                .then(function(res) {              
                    if(res.status === 200){
                        resolve(res.json());
                    }
                    if (res.status === 404){
                        reject(new Error("La entidad con 'id': "+idEntity+ " no ha sido encontrada"));
                    }
                })
                .catch((err) => {
                    reject(new Error(`Ha ocurrido un error en la búsqueda de la entidad: ${err}`))
                });
        })
        return promise

    }
    getEntityAttribute(idEntity,attribute){
        let t = this
        const promise = new Promise(function (resolve, reject) {
            const options = {
                method: 'GET',
                headers: {
                    'Access-Control-Allow-Methods':'GET, POST, OPTIONS, PUT, PATCH, DELETE'
                },
            };
            fetch(t._URLContext+'/entities/'+idEntity+'/attrs/'+attribute, options)
                .then(function(res) {              
                    if(res.status === 200){
                        resolve(res.json());
                    }
                    if (res.status === 404){
                        reject(new Error("La entidad con 'id': "+idEntity+ " no ha sido encontrada"));
                    }
                })
                .catch((err) => {
                    reject(new Error(`Ha ocurrido un error en la búsqueda de la entidad: ${err}`))
                });
        })
        return promise
    }
    getEntityAttributeValue(idEntity, attribute){
        let t = this
        const promise = new Promise(function (resolve, reject) {
            const options = {
                method: 'GET',
                headers: {
                    'Access-Control-Allow-Methods':'GET, POST, OPTIONS, PUT, PATCH, DELETE'
                },
            };
            fetch(t._URLContext+'/entities/'+idEntity+'/attrs/'+attribute+'/value', options)
                .then( function(res) {  
                    if(res.status === 200){
                        return res.json();  
                    }
                    if (res.status === 404){
                        reject(new Error("La entidad o el atributo especificado no han sido encontrados"));
                    }
                })
                .then( function (value){
                    resolve({value: value, attribute: attribute});
                })
                .catch((err) => {
                    reject(new Error(`Ha ocurrido un error en la búsqueda de la entidad ${idEntity} Error: ${err}`))
                });
        })
        return promise
    }
    deleteEntityAttribute(idEntity, attribute){
        let t = this
        const promise = new Promise(function (resolve, reject) {
            const options = {
                method: 'DELETE',
                headers: {
                    'Access-Control-Allow-Methods':'GET, POST, OPTIONS, PUT, PATCH, DELETE'
                },
            };
            fetch(t._URLContext+'/entities/'+idEntity+'/attrs/'+attribute, options)
                .then(function(res) {
                    if(res.status === 204){
                        resolve({statusCode : res.status, message: `Ha sido eliminado el atributo ${attribute} de la entidad ${idEntity}`})
                    }
                    if (res.status === 404){
                        reject(new Error("El atributo o la entidad no han sido encontrados"));
                    }
                })
                .catch(function(err){
                    reject(new Error(`Ha ocurrido un error en la eliminación del atibuto ${attribute} de la entidad ${idEntity} Error: ${err}`));
                });
        })
        return promise
    }
    //Get EntityTypes
    getEntityTypes(){
        let t = this
        const promise = new Promise(function (resolve, reject) {
            const options = {
                method: 'GET',
                headers: {
                    'Accept-Type': 'application/json',
                    'Access-Control-Allow-Methods':'GET, POST, OPTIONS, PUT, PATCH, DELETE'
                },
            };
            fetch(t._URLContext+'/types', options)
                .then(function(res) {              
                    if(res.status === 200){
                        resolve(res.text())
                    }
                })
                .catch((err) => {
                    reject(new Error(`Ha ocurrido un error la busqueda de los tipos de entidades: ${err}`))
                });
        })
        return promise
    }
    //Get EntityType
    getEntityType(entityType){
        let t = this
        const promise = new Promise(function (resolve, reject) {
            const options = {
                method: 'GET',
                headers: {
                    'Accept-Type': 'application/json',
                    'Access-Control-Allow-Methods':'GET, POST, OPTIONS, PUT, PATCH, DELETE'
                },
            };
            fetch(t._URLContext+'/types/'+entityType, options)
                .then(function(res) {              
                    if(res.status === 200){
                        resolve(res.text())
                    }
                })
                .catch((err) => {
                    reject(new Error(`Ha ocurrido un error la búsqueda de los tipos de la entidad: ${entityType} Error: ${err}`))
                });
        })
        return promise
    }
    //Get entities list of an entity type
    getEntityListType(typeEntity){
        let t = this
        const promise = new Promise(function (resolve, reject) {
            const options = {
                method: 'GET',
                headers: {
                    'Accept-Type': 'application/json',
                    'Access-Control-Allow-Methods':'GET, POST, OPTIONS, PUT, PATCH, DELETE'
                },
            };
            fetch(t._URLContext+'/entities?type='+typeEntity, options)
                .then(function(res) {              
                    if(res.status === 200){
                        resolve(res.json());
                    }
                    if (res.status === 404){
                        reject(new Error("Las entidades con 'type': "+typeEntity+ " no han sido encontradas"));
                    }
                })
                .catch((err) => {
                    reject(new Error(`Ha ocurrido un error en la búsqueda de la entidad: ${err}`))
                });
        })
        return promise

    }
    deleteEntity(idEntity){
        let t = this
        const promise = new Promise(function (resolve, reject) {
            const options = {
                method: 'DELETE',
                headers: {
                    'Access-Control-Allow-Methods':'GET, POST, OPTIONS, PUT, PATCH, DELETE'
                },
            };
            fetch(t._URLContext+'/entities/'+idEntity, options)
                .then(function(res) {
                    if(res.status === 204){
                        resolve({statusCode : res.status, message: "Ha sido eliminado la entidad: "+idEntity})
                    }
                    if (res.status === 404){
                        reject(new Error("La entidad con 'id': "+idEntity+ " no ha sido encontrada"));
                    }
                })
                .catch(function(err){
                    reject(new Error(`Ha ocurrido un error en la eliminación de la entidad: ${err}`));
                });
        })
        return promise
    }
    //updateOrAppendEntityAttributes - POST /entities/{entityId}/attrs
    addJSONAttributeToEntity(idEntity, JSONAttribute){
        let t = this
        const promise = new Promise(function (resolve, reject) {
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(JSONAttribute)
            };
            fetch(t._URLContext+'/entities/'+idEntity+'/attrs', options)
                .then(function(res) {                    
                    if(res.status === 204){
                        console.log("El objeto JSON fue agregado a la entidad con 'id':"+idEntity);
                        resolve({statusCode : res.status})
                    }
                    if (res.status === 404){
                        reject(new Error("La entidad con el 'id':"+idEntity+" no se encuentra registrada"))
                    }
                })
                .catch(function(err){
                    reject(new Error(`Ha ocurrido un error en el ingreso de la entidad: ${err}`))
                });

        })
        return promise
    }
    //updateAttributeData - PUT /entities/{entityId}/attrs/{attrName}	
    updateJSONAttrEntity(idEntity, nameAttribute,jsonAttr){
        let t = this
        const promise = new Promise(function (resolve, reject) {
            const options = {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Methods':'GET, POST, OPTIONS, PUT, PATCH, DELETE'
                },
                body: JSON.stringify(jsonAttr)
            };
            fetch(t._URLContext+'/entities/'+idEntity+'/attrs/'+nameAttribute, options)
                .then(function(res) {             
                    if(res.status === 204){
                        //console.log("El JSON del atributo '"+nameAttribute+"'"+" ha sido actualizado con éxito dentro de la entidad: '"+idEntity+"'");
                        resolve({statusCode : res.status, message: "El JSON del atributo '"+nameAttribute+"'"+" ha sido actualizado con éxito dentro de la entidad: '"+idEntity+"'"})
                    }
                    if (res.status === 404){
                        reject(new Error("Solicitud fallida. Entidad no encontrada o atributo "));
                        
                    }
                })                
                .catch(function(err){
                    reject(new Error(`Ha ocurrido un error al obtener la entidad actualizada: ${err}`));
                });
        })
        return promise
    }
    //updateExistingEntityAttributes - 	PATCH /entities/{entityId}/attrs
    updateEntityAttrs(idEntity,jsonObjectAttrs){
        let t = this
        const promise = new Promise(function (resolve, reject) {
            const options = { 
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Methods':'GET, POST, OPTIONS, PUT, PATCH, DELETE'
                },
                body: JSON.stringify(jsonObjectAttrs)
            };
            fetch(t._URLContext+'/entities/'+idEntity+'/attrs/', options)
                .then(function(res) {             
                    if(res.status === 204){
                        console.log("Los atributos de la entidad 'id': "+idEntity+ " han sido actualizado con éxito");
                        //this.getEntity(idEntity);
                        resolve({statusCode : res.status})
                    }
                    if (res.status === 404){
                       reject(new Error("Solicitud fallida. Entidad no encontrada"))
                        //console.log(res.json());
                    }
                })
                .catch(function(err){
                    reject(new Error(`Ha ocurrido un error al actualizar los atributos de la entidad: ${err}`))
                });
        })
        return promise
    }
    //updateAttributeValue - PUT /entities/{entityId}/attrs/{attrName}/value
    updateEntityAttributeValue(idEntity, nameObjectAttribute, val){
        let t = this
        const promise = new Promise(function (resolve, reject) {
            const valueString = val.toString();
            const valueLength = valueString.length;
            const options = {
                method: 'PUT',
                headers: {
                    'Content-Type': 'text/plain',
                    'Content-Length': valueLength
                },
                body: valueString
            };
            fetch(t._URLContext+'/entities/'+idEntity+'/attrs/'+nameObjectAttribute+'/value', options)
                .then((res) => {  
                    if(res.status === 204){
                        console.log("El atributo 'value' del objeto: "+nameObjectAttribute+" que pertenecen a la entidad 'id': "+idEntity+ " ha sido actualizado con éxito");
                        resolve({statusCode : res.status})
                        //this.getEntity(idEntity);
                    }
                    if (res.status === 404){
                        reject(new Error("Solicitud fallida. Entidad o atributo no encontrado"))
                        //console.log(res.json());
                    }
                    else{
                        reject(new Error("Solicitud fallida"))
                    }
                })
                .catch(function(err){
                    reject(new Error(`Ha ocurrido un error al actualizar el valor del atributo ${nameObjectAttribute} que corresponde a la entidad ${idEntity}: ${err}`));
                });

        })
        return promise
    }
    replaceAllEntityAttributes(idEntity, jsonObjectAttrs){
        let t = this
        const promise = new Promise(function (resolve, reject) {
            const options = { 
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Methods':'GET, POST, OPTIONS, PUT, PATCH, DELETE'
                },
                body: JSON.stringify(jsonObjectAttrs)
            };
            fetch(t._URLContext+'/entities/'+idEntity+'/attrs/', options)
                .then(function(res) {             
                    if(res.status === 204){
                        resolve({statusCode : res.status, message: "Los atributos de la entidad id: "+idEntity+ " han sido reemplazados con éxito"})
                    }
                    if (res.status === 404){
                       reject(new Error("Solicitud fallida. Entidad no encontrada"))
                    }
                })
                .catch(function(err){
                    reject(new Error(`Ha ocurrido un error al reemplazar los atributos de la entidad ${idEntity} Error: ${err}`))
                });
        })
        return promise
    }
    listEntities(){
        let t = this
        const promise = new Promise(function (resolve, reject) {
            const options = {
                method: 'GET',
                headers: {
                    'Accept-Type': 'application/json',
                    'Access-Control-Allow-Methods':'GET, POST, OPTIONS, PUT, PATCH, DELETE'
                }
            };
            fetch(t._URLContext+'/entities/', options)
                .then(function(res) {                    
                    if(res.status === 200){
                        resolve(res.json())
                    }
                    if (res.status === 404){
                        reject(new Error("Solicitud fallida. Entidades no encontradas"))
                    }
                })
                .catch((err)=>{
                    //console.log(`Ha ocurrido un error al obtener el listado de entidades: ${err}`);
                    reject(new Error(`Ha ocurrido un error al obtener el listado de entidades: ${err}`));
                });
        })
        return promise
    }
    //APARTADO DE SUSCRIPCIONES
    //Create a suscription
    createSubscription(subscription){
        let t = this
        const promise = new Promise(function (resolve, reject) {
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(subscription)
            };
            fetch(t._URLContext+'/subscriptions', options)
                .then(function(res) {                    
                    if(res.status === 201){
                        console.log("Suscripcición creada con éxito.");
                        resolve({statusCode : res.status, message: "Suscripción creada con éxito"})
                    }
                    if (res.status === 422){
                        reject(new Error("Suscripción con ID existente"))
                    }
                })
                .catch(function(err){
                    reject(new Error(`Ha ocurrido un error en el ingreso de la suscripción: ${err}`))
                });
        })
        return promise            
    }
    //OBTENER EL LISTADO DE SUSCRIPCIONES
    listSubscriptions(){
        let t = this
        const promise = new Promise(function (resolve, reject) {
            const options = {
                method: 'GET',
                headers: {
                    'Accept-Type': 'application/json',
                    'Access-Control-Allow-Methods':'GET, POST, OPTIONS, PUT, PATCH, DELETE'
                }
            };
            fetch(t._URLContext+'/subscriptions/', options)
                .then(function(res) {                    
                    if(res.status === 200){
                        resolve(res.json())
                    }
                })
                .catch((err)=>{
                    reject(new Error(`Ha ocurrido un error al obtener el listado de las suscripciones: ${err}`));
                });
        })
        return promise
    }
    getSubscription(idSubscription){
        let t = this
        const promise = new Promise(function (resolve, reject) {
            const options = {
                method: 'GET',
                headers: {
                    'Accept-Type': 'application/json',
                    'Access-Control-Allow-Methods':'GET, POST, OPTIONS, PUT, PATCH, DELETE'
                }
            };
            fetch(t._URLContext+'/subscriptions/'+idSubscription, options)
                .then(function(res) {                    
                    if(res.status === 200){
                        resolve(res.json())
                    }
                })
                .catch((err)=>{
                    reject(new Error(`Ha ocurrido un error al obtener la suscripcion: ${idSubscription} Error: ${err}`));
                });
        })
        return promise
    }
    updateSubscriptionStatus(idSubscription, status){
        let t = this
        const promise = new Promise(function (resolve, reject) {
            const options = {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Methods':'GET, POST, OPTIONS, PUT, PATCH, DELETE'
                },
                body: JSON.stringify({
                    "status": status
                })
            };
            fetch(t._URLContext+'/subscriptions/'+idSubscription, options)
                .then(function(res) { 
                    if(res.status === 204){
                        resolve({statusCode : res.status, message: "La suscripción de id: "+idSubscription+" ha pasado a status: "+status})
                    }
                    if (res.status === 404){
                        reject(new Error("Solicitud fallida. Suscripción no encontrada"))
                        //console.log(res.json());
                    }
                    else{
                        reject(new Error("Solicitud fallida"))
                    }
                })
                .catch((err)=>{
                    reject(new Error(`Ha ocurrido un error al inactivar la suscripcion: ${idSubscription} Error: ${err}`));
                });
        })
        return promise
    }
    updateSubscription(idSubscription, jsonSubscription){
        let t = this
        const promise = new Promise(function (resolve, reject) {
            const options = { 
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Methods':'GET, POST, OPTIONS, PUT, PATCH, DELETE'
                },
                body: JSON.stringify(jsonSubscription)
            };
            fetch(t._URLContext+'/subscriptions/'+idSubscription, options)
                .then(function(res) {             
                    if(res.status === 204){
                        resolve({statusCode : res.status, message: "La suscripción: "+idSubscription+"ha sido actualizada con éxito"})
                    }
                    if (res.status === 404){
                       reject(new Error("Solicitud fallida. Entidad no encontrada"))
                    }
                })
                .catch(function(err){
                    reject(new Error(`Ha ocurrido un error al actualizar la suscripción ${idSubscription} Error: ${err}`))
                });
        })
        return promise
    }
    deleteSubscription(idSubscription){
        let t = this
        const promise = new Promise(function (resolve, reject) {
            const options = {
                method: 'DELETE',
                headers: {
                    'Access-Control-Allow-Methods':'GET, POST, OPTIONS, PUT, PATCH, DELETE'
                },
            };
            fetch(t._URLContext+'/subscriptions/'+idSubscription, options)
                .then(function(res) {
                    if(res.status === 204){
                        resolve({statusCode : res.status, message: "Ha sido eliminada la suscripción: "+idSubscription})
                    }
                    if (res.status === 404){
                        reject(new Error("La suscripción con 'id': "+idSubscription+ " no ha sido encontrada"));
                    }
                })
                .catch(function(err){
                    reject(new Error(`Ha ocurrido un error en la eliminación de la suscripción: ${err}`));
                });
        })
        return promise
    }
}
module.exports = new OCB()
// es6 default export compatibility
module.exports.default = module.exports;
