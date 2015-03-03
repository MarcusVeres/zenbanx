/* global angular */
(function(angular) {

    'use strict';

    // Define the angular module for the application
    var module = angular.module('app', [
        'ngRoute',          // used for app routing
        'ngSanitize',       // parse html from data into views
        'ui.bootstrap',     // angular js for bootstrap
        'appControllers',   // module containing controller files
        'directives',       // custom directives and html components
    ]);

    module.config([ '$routeProvider' , '$locationProvider' ,
        function( $routeProvider , $locationProvider )
        {
            var prefix = '/static/partials/';     // local

            $routeProvider
                .when('/', {
                    templateUrl: prefix + 'landing.html',
                    controller: 'LandingController',
                    controllerAs: 'lc'
                })
                .when('/about', {
                    templateUrl: prefix + 'about.html',
                    controller: 'TestController',
                    controllerAs: 'tc'
                })
                .when('/contact', {
                    templateUrl: prefix + 'contact.html',
                    controller: 'TestController',
                    controllerAs: 'tc'
                })
                .when('/faq', {
                    templateUrl: prefix + 'faq.html',
                    controller: 'FaqController',
                    controllerAs: 'fc'
                })
                .when('/get-zenbanx', {
                    templateUrl: prefix + 'get-zenbanx.html',
                    controller: 'TestController',
                    controllerAs: 'tc'
                })
                .when('/news', {
                    templateUrl: prefix + 'news.html',
                    controller: 'TestController',
                    controllerAs: 'tc'
                })
                .when('/privacy', {
                    templateUrl: prefix + 'privacy.html',
                    controller: 'TestController',
                    controllerAs: 'tc'
                })
                .when('/terms', {
                    templateUrl: prefix + 'terms.html',
                    controller: 'TestController',
                    controllerAs: 'tc'
                })
                .when('/test', {
                    templateUrl: prefix + 'test.html',
                    controller: 'TestController',
                    controllerAs: 'tc'
                })
                .otherwise({
                    redirectTo: '/'
                });

            // get rid of the hashes in the url
            $locationProvider.html5Mode( true );
            console.log( $locationProvider );
        }
    ]);

})(angular);

                /*
                .when('/countries', {
                    templateUrl: prefix + 'countries.html',
                    controller: 'LandingController',
                    controllerAs: 'lc'
                })
                .when('/country/', {
                    templateUrl: prefix + 'country.html',
                    controller: 'CountryController',
                    controllerAs: 'cc'
                })
                .when('/country/:countryId', {
                    templateUrl: prefix + 'country.html',
                    controller: 'CountryController',
                    controllerAs: 'cc'
                })
                */

