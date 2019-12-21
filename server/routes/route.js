//call the APIs for generation of these models one by one from the UI side.
const ServiceDefinition = require('../models/ServiceDefinition')
const ModelDefinition = require('../models/ModelDefinition')
const ModelTestData = require('../models/ModelTestData')
const PathDefinition = require('../models/PathDefinition')
const ModelReference = require('../models/ModelReference')
const Dependency = require('../models/Dependency')
const accountUtil = require('../controller/accountUtil')
const crypto = require('crypto')
const fs = require("fs");
// const jwt = require('jsonwebtoken');
// const moment = require('moment');
// const NodeGeocoder = require('node-geocoder');
// var formidable = require('formidable');
const path = require('path')
// var multer = require('multer');
// var fs = require('fs');
var connect = require('connect');
// var FCM = require('fcm-node');
// var nodemailer = require('nodemailer');


module.exports = function(app) {

    // Service Definition routes
    app.get('/service_defs', function(req, res) {
        ServiceDefinition.find(function(err, service_def){
            res.json(service_def).end();
        })
    });

    // app.post('/service_def/:id', function(req, res) {
    //     ModelDefinition.remove({_id: req.params.id}, function(err, result){
    //         if(err){
    //             res.json(err)
    //         }
    //         else{
    //             res.json(result)
    //         }
    //     })
    // });

    app.post('/service_def', function(req, res) {
        let newServiceDef = new ServiceDefinition({
            service_name : req.body.service_name,
            version: req.body.version,
            description: req.body.description
        })
        newServiceDef.save(function(err, model_def){
            if(err){
                res.json({msg: 'Failed to add model definition.'})
            }
            else{
                res.json({msg: 'Model definition added successfully.'})
            }
        })
    });
    
    // Model Definitions routes

    app.get('/hello', function(req, res) {
	if(!req.user) {
        res.json({success: false,message: "Unauthorized"}).end();
        return;
	}
        res.send('Welcome back ' + req.user.name).end();
    });

    app.get('/model_defs', function(req, res) {
        ModelDefinition.find(function(err, model_def){
            res.json(model_def).end();
        })
    });

    app.post('/model_def', function(req, res) {
        let newModelDef = new ModelDefinition({
            service_id : req.body.service_id,
            model_name: req.body.model_name,
            model_references: req.body.model_references,
            model_obj: req.body.model_obj
        })
        newModelDef.save(function(err, model_def){
            if(err){
                res.json({msg: 'Failed to add model definition.'})
            }
            else{
                res.json({msg: 'Model definition added successfully.'})
            }
        })
    });

    app.delete('/model_def/:id', function(req, res) {
        ModelDefinition.remove({_id: req.params.id}, function(err, result){
            if(err){
                res.json(err)
            }
            else{
                res.json(result)
            }
        })
    });

    function generate_valid_test_data(model_def, model_defs){
        var model_schema = model_def.model_obj.properties
        var data = {}
        if (model_def.model_obj.type == "object"){
            
            for (var property in model_schema){
                if(model_schema[property].hasOwnProperty("$ref")){
                    ref_model = model_schema[property]['$ref'].split('/')[2]
                    for(i =0; i < model_defs.length; i++){
                        if(model_defs[i].model_name == ref_model){
                            data[property] = generate_valid_test_data(model_defs[i], model_defs);
                            break;
                        }
                    }
                }
                else if(model_schema[property].type == "string"){
                    if(model_schema[property].hasOwnProperty("enum")){
                        data[property] = model_schema[property]["enum"][0]
                    }
                    else if(model_schema[property].format == "date-time"){
                        data[property] = "2019-11-06T18:00:41.257Z"
                    }
                    else{
                        data[property] = "aaa"
                    }                    
                }
                else if(model_schema[property].type == "integer"){
                    data[property] = 555
                }
                else if(model_schema[property].type == "boolean"){
                    data[property] = true
                }
                else if(model_schema[property].type == "array"){
                    if(model_schema[property].items.hasOwnProperty("$ref")){
                        ref_model = model_schema[property].items['$ref'].split('/')[2]
                        for(i =0; i < model_defs.length; i++){
                            if(model_defs[i].model_name == ref_model){
                                data[property] = []
                                data[property].push(generate_valid_test_data(model_defs[i], model_defs));
                                data[property].push(data[property][0])
                                break;
                            }
                        }
                    }
                    else if(model_schema[property].items.type == "string"){
                        if(model_schema[property].items.hasOwnProperty("enum")){
                            data[property] = model_schema[property]["enum"][0]
                        }
                        else if(model_schema[property].format == "date-time"){
                            data[property] = ["2019-11-06T18:00:41.257Z", "2019-11-06T18:00:41.257Z"]
                        }else{
                            data[property] = ["aaa", "bbb"]
                        }
                    }
                    else if(model_schema[property].items.type == "integer"){
                        data[property] = [555, 111]
                    }
                    else if(model_schema[property].items.type == "boolean"){
                        data[property] = [true, false]
                    }
                    
                }
            }
        }
        return data        
    }

    function generate_invalid_test_data(model_def, model_defs, valid_temp){
        var model_schema = model_def.model_obj.properties
        var data_arr = []
        var data = {}
        valid = {...valid_temp};
        if (model_def.model_obj.type == "object" ){            
            for (var property in model_schema){
                if(model_schema[property].hasOwnProperty("$ref")){
                    ref_model = model_schema[property]['$ref'].split('/')[2]
                    for(i =0; i < model_defs.length; i++){
                        if(model_defs[i].model_name == ref_model){
                            var ref_data_arr = generate_invalid_test_data(model_defs[i], model_defs, valid[property]);
                            for(j =0; j < ref_data_arr.length; j++){
                                temp = {...valid_temp}
                                temp[property] =ref_data_arr[j]
                                data_arr.push(temp)
                            }
                            break;
                        }
                    }
                }
                else if(model_schema[property].type == "string"){
                    if(model_schema[property].hasOwnProperty("enum")){
                        temp = {...valid_temp}
                        temp[property] = model_schema[property]["enum"][0] +"jfdkls"
                        data_arr.push(temp)
                    }
                    else{
                        temp = {...valid_temp}
                        temp[property] = 222
                        data_arr.push(temp)
                        temp1 = {...valid_temp}
                        temp1[property] = true
                        data_arr.push(temp1)                        
                    }                    
                }
                else if(model_schema[property].type == "integer"){
                    temp = {...valid_temp}
                    temp[property] = "rrr"
                    data_arr.push(temp)
                    temp1 = {...valid_temp}
                    temp1[property] = true
                    data_arr.push(temp1)
                }
                else if(model_schema[property].type == "boolean"){
                    temp = {...valid_temp}
                    temp[property] = "rrr"
                    data_arr.push(temp)
                    temp1 = {...valid_temp}
                    temp1[property] = 222
                    data_arr.push(temp1)
                }
                else if(model_schema[property].type == "array"){
                    if(model_schema[property].items.hasOwnProperty("$ref")){
                        ref_model = model_schema[property].items['$ref'].split('/')[2]
                        for(i =0; i < model_defs.length; i++){
                            if(model_defs[i].model_name == ref_model){
                                vtemp = {...valid_temp}
                                ref_inv_arr = generate_invalid_test_data(model_defs[i], model_defs, vtemp[property][0])
                                temp = {...valid_temp}
                                temp[property][0] = ref_inv_arr[0]
                                data_arr.push(temp)
                                temp1 = {...valid_temp}
                                temp1[property][1] = {...temp[property][0]}
                                data_arr.push(temp1)
                                break;
                            }
                        }
                    }
                    if(model_schema[property].items.type == "string"){
                        if(model_schema[property].items.hasOwnProperty("enum")){
                            temp = {...valid_temp}
                            temp[property] = [model_schema[property]["enum"][0] +"jfdkls", model_schema[property]["enum"][0]]
                            data_arr.push(temp)
                            temp1 = {...temp}
                            temp1[property][1] = model_schema[property]["enum"][0] +"jfdkls"
                            data_arr.push(temp1)
                        }
                        else{
                            temp = {...valid_temp}
                            temp[property] = [222, "aaa"]
                            data_arr.push(temp)
                            temp1 = {...temp}
                            temp1[property][0] = 222
                            data_arr.push(temp1)
                        }                    
                    }
                    else if(model_schema[property].items.type == "integer"){
                        temp = {...valid_temp}
                        temp[property] = ["rrr", 555]
                        data_arr.push(temp)
                        temp1 = {...valid_temp}
                        temp1[property] = ["rrr", "rrr"]
                        data_arr.push(temp1)
                    }
                    else if(model_schema[property].items.type == "boolean"){
                        temp = {...valid_temp}
                        temp[property] = ["rrr", true]
                        data_arr.push(temp)
                        temp1 = {...valid_temp}
                        temp1[property] = ["rrr", "rrr"]
                        data_arr.push(temp1)
                    }
                    
                }
            }
        }
        return data_arr
    }

    function generate_model_test_data(model_def, model_defs) {
        var model = model_def.model_obj
        var model_schema = model.properties
            var valid_data = generate_valid_test_data(model_def, model_defs)
            var v = {...valid_data}
            var invalid_data = generate_invalid_test_data(model_def, model_defs, v)
            let newModelTestData = new ModelTestData({
            service_name: "SwaggerPetstore",
            model_definition_id : model_def.id,
            model_name: model_def.model_name,
            constraint_satisfying : valid_data,
            functionally_valid : valid_data,
            invalid: invalid_data
            })
            // console.log(newModelTestData)
        
        return newModelTestData;
      } 
    app.post('/generate_service_def_model_defs', function(req, res) {
        //get service id first and use it from req body
        var jsonContent = JSON.parse(fs.readFileSync('server/routes/PetstoreAPISpec.json', 'utf8').trim());
        let newServiceDef = new ServiceDefinition({
            service_name : jsonContent.info.title,
            version: jsonContent.info.version,
            description: jsonContent.info.description
        })
        newServiceDef.save(function(err, service_def){
            if(err){
                res.json({msg: 'Failed to add service definition.'})
            }
            else{
                var definitions = jsonContent.definitions
                var model_arr = []
                for(var model in definitions) {
                    for (var key in definitions[model]){
                        if ("xml" == key){
                            delete definitions[model]["xml"]
                        }
                    }
                    for(var key in definitions[model].properties){
                        for(var nested_key in definitions[model].properties[key]){
                            if ("xml" == nested_key){
                                delete definitions[model].properties[key]["xml"]
                            }                            
                        }
                    }
                    let newModelDef = new ModelDefinition({
                        service_id : newServiceDef.id,
                        model_name: model,
                        model_obj: definitions[model]
                    })
                    model_arr.push(newModelDef)
                }
                ModelDefinition.insertMany(model_arr, function(err, model_defs){
                    if(err){
                        res.json({msg: 'Failed to add model definitions.'})
                    }
                    else{
                        var mdt_array = []
                        model_defs.forEach(function (model_def, index) {
                            var model_test_data = generate_model_test_data(model_def, model_defs)
                            mdt_array.push(model_test_data)
                          });
                          ModelTestData.insertMany(mdt_array, function(err, mdts){
                            if(err){
                                res.json({msg: 'Failed to add model test data.'})
                            }
                            else{
                                res.json({msg: 'Service Defintions, Model definitions, ModelTestData added successfully.'})
                            }
                        })
                        
                    }
                })
            }
        })        
    });

// Model Test Data
    app.post('/model_test_data', function(req, res) {
        let newModelTestData = new ModelTestData ({
            model_definition_id : req.body.model_definition_id,
            model_name: req.body.model_name,
            functionally_valid: req.body.functionally_valid,
            constraint_satisfying: req.body.constraint_satisfying,
            invalid: req.body.invalid
        })
        newModelTestData.save(function(err, model_def){
            if(err){
                res.json({msg: 'Failed to add test data.'})
            }
            else{
                res.json({msg: 'Model test data added successfully.'})
            }
        })
    });

    app.get('/model_test_data/:service_name', function(req, res) {
        ModelTestData.find({service_name: req.params.service_name}, function(err, mdts){
            if(err){
                res.json({msg: 'Failed to add test data.'})
            }
            else{
                console.log(mdts)
                res.json({mdt: mdts, msg: "Model Test Data received."})
            }
        })
    });

    //Model references
    app.post('/model_ref', function(req, res) {
        let newModelRef = new ModelReference({
            service_id : req.body.service_id,
            model_id: req.body.model_id
        })
        newModelRef.save(function(err, model_def){
            if(err){
                res.json({msg: 'Failed to add model Reference.'})
            }
            else{
                res.json({msg: 'Model Reference added successfully.'})
            }
        })
    });
}

