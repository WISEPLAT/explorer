// begin AltSheets changes
///////////////////////////////
// TODO: Put go into a config.js
// But how to include a file from local?

var GWSH_HOSTNAME	= "localhost";	// put your IP address!
var APP_HOSTNAME 	= "See package.json --> scripts --> start: Change 'localhost'!!!";

var GWSH_RPCPORT  	= 8545; 		// for gwsh --rpcport GWSH_RPCPORT
var APP_PORT 		= "See package.json --> scripts --> start: Perhaps change '8000'";

// this is creating the corrected gwsh command
var WL=window.location;
var gwsh_command	= "gwsh --rpc --rpcaddr "+ GWSH_HOSTNAME + " --rpcport " + GWSH_RPCPORT +'\
 --rpcapi "web3,wsh" ' + ' --rpccorsdomain "' + WL.protocol +"//" + WL.host + '"';

////////////////////////////////////////////////////
//end AltSheets changes


'use strict';

angular.module('wshExplorer', ['ngRoute','ui.bootstrap','filters','ngSanitize'])

.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'views/main.html',
                controller: 'mainCtrl'
            }).
            when('/block/:blockId', {
                templateUrl: 'views/blockInfos.html',
                controller: 'blockInfosCtrl'
            }).
            when('/tx/:transactionId', {
                templateUrl: 'views/transactionInfos.html',
                controller: 'transactionInfosCtrl'
            }).
            when('/address/:addressId', {
                templateUrl: 'views/addressInfos.html',
                controller: 'addressInfosCtrl'
            }).

            // info page with links:
            when('/chain/api', {
                templateUrl: 'views/api/api.html',
                controller: 'chainInfosCtrl'
            }).

            // getBlock (current) & getBlock (last)
            when('/chain/', {
                templateUrl: 'views/chainInfos.html',
                controller: 'chainInfosCtrl'
            }).
            when('/chain/gaslimit', {
                templateUrl: 'views/api/gaslimit.html',
                controller: 'chainInfosCtrl'
            }).
            when('/chain/difficulty', {
                templateUrl: 'views/api/difficulty.html',
                controller: 'chainInfosCtrl'
            }).
/*
            // fast = doesn't need to getBlock any block
            when('/chain/blocknumber', {
                templateUrl: 'views/api/blocknumber.html',
                controller: 'fastInfosCtrl'
            }).
            when('/chain/supply', {
                templateUrl: 'views/api/supply.html',
                controller: 'fastInfosCtrl'
            }).
            when('/chain/mined', {
                templateUrl: 'views/api/mined.html',
                controller: 'fastInfosCtrl'
            }).

            // begin of: not yet, see README.md
            when('/chain/supply/public', {
                templateUrl: 'views/api/supplypublic.html',
                controller: 'fastInfosCtrl'
            }).*/
            // end of: not yet, see README.md

            otherwise({
                redirectTo: '/'
            });

            //$locationProvider.html5Mode(true);
    }])
    .run(function($rootScope) {
        var web3 = require('web3');

        // begin AltSheets changes
        web3.setProvider(new web3.providers.HttpProvider("http://"+GWSH_HOSTNAME+":"+GWSH_RPCPORT));
        // end AltSheets changes

        $rootScope.web3=web3;
        // MetaMask injects its own web3 instance in all pages, override it
        // as it might be not compatible with the one used here
        if (window.web3)
            window.web3 = web3;
        function sleepFor( sleepDuration ){
            var now = new Date().getTime();
            while(new Date().getTime() < now + sleepDuration){ /* do nothing */ }
        }
        var connected = false;
        if(!web3.isConnected()) {
            $('#connectwarning').modal({keyboard:false,backdrop:'static'})
            $('#connectwarning').modal('show')
        }
    });
