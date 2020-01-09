
angular.module('app').config(function($routeProvider) {
  $routeProvider
    .when('/view1', {
      template: '<view1></view1>'
    })
    .when('/view2', {
      template: '<view2></view2>'
    })
    .otherwise('/view1')
})