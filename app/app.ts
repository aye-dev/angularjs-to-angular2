'use strict';

// Declare app level module which depends on views, and core components
angular.module('app', [
  'ngRoute',
  'app.version'
]).config(['$locationProvider', function($locationProvider) {
  $locationProvider.hashPrefix('');
}]);
