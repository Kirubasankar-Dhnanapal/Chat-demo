var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
console.log('server');

var baseUrl = 'mongodb://localhost:27017/domain';

router.get('/getdata',function(req,res,next){
    var resultArray = [];
    MongoClient.connect(baseUrl,function(err,db){
        assert.equal(null,err);
        var data = db.collection('domainTable').find();
        data.forEach(function(err,data) {
            assert.equal(null,err);
            resultArray.push(data);
            console.log('connected');
        },function(){
            db.close();
            console.log(res);
        });
    })

});