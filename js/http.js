'use strict'
var request = require('request');

var http = module.exports;

http.post = (path, data, headers) => {
    return new Promise((resolve, reject) => {
        request({
            method: 'post',
            uri: path,
            headers: headers || { 'Content-type': 'application/json' },
            json: data || {},
            rejectUnauthorized: false,
            timeout: 30000
        }, (error, response, body) => {
            if (error) {
                defer.reject(error);
            } else {
                try {
                    body = JSON.parse(body);
                } catch (e) {
                    // console.log(e);
                }
                defer.resolve(body);
            }
        })
    });
}

http.get = (path, params, headers) => {
    return new Promise(
        (resolve, reject) => {
            request({
                method: 'get',
                uri: path,
                headers: headers || { 'Content-type': 'application/json' },
                rejectUnauthorized: false,
                timeout: 30000,
                qs: params
            }, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {
                        // console.log(e);
                    }
                    resolve(body);
                }
            });
        }
    );
}

http.put = (path, data, headers) => {
    return new Promise((resolve, reject) => {
        request({
            method: 'put',
            uri: path,
            headers: headers || { 'Content-type': 'application/json' },
            json: data,
            rejectUnauthorized: false,
            timeout: 30000,
        }, (error, response, body) => {
            if (error) {
                reject(error);
            } else {
                try {
                    body = JSON.parse(body);
                } catch (e) {
                    // console.log(e);
                }
                resolve(body);
            }
        });
    });

}

http.delete = (path, headers) => {
    return new Promise((resolve, reject) => {
        request({
            method: 'delete',
            uri: path,
            headers: headers || { 'Content-type': 'application/json' },
            rejectUnauthorized: false,
            timeout: 30000,
        }, (error, response, body) => {
            if (error) {
                defer.reject(error);
            } else {
                try {
                    body = JSON.parse(body);
                } catch (e) {
                    // console.log(e);
                }
                defer.resolve(body);
            }
        })
    });
}