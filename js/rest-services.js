'use strict';

angular.module('myApp.restServices', ['ngResource'])
    .factory('Employee', ['$resource',
        function ($resource) {
            return $resource('http://mathswiz-sritech.rhcloud.com/employees/:employeeId', {});
            //return $resource('http://localhost:3000/employees/:employeeId', {});
        } ])
    .factory('Report', ['$resource',
        function ($resource) {
            return $resource('http://mathswiz-sritech.rhcloud.com/employees/:employeeId/reports', {});
            //return $resource('http://localhost:3000/employees/:employeeId/reports', {});
        } ]);