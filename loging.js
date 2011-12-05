// 
//  loging.js
//  NODE
//  
//  Created by Peter Host on 2010-10-24.
//  Copyright 2010 OGHME.COM. All rights reserved.
// 

/*
    TODO 
*/

var log = require('logging').from(__filename);


// Functional Constructor
function loggerMaker() {
    var enabled = false, // logging disabled by default
        that = {};
    that.l = function () {
        if (enabled) {
            //log(str1, str2);
            log.apply(that, arguments);
        }
    }
    that.on = function () {
        enabled = true;
    }
    that.off = function () {
        enabled = false;
    }
    return that;
}


exports.make = loggerMaker;
