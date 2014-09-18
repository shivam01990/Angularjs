

/*#######################################################################
  


  Normally like to break AngularJS apps into the following folder structure
  at a minimum:

  /app
      /controllers      
      /directives
      /services
      /partials
      /views

  #######################################################################*/
var app = angular.module('customersApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
    .when('/Customres',
    {
        controller: 'CustomerController',
        templateUrl: 'Partials/AllCustomers.html'
    })
    .when('/EditCustomer/:customerID',
    {
        controller: 'CustomerController',
        templateUrl: 'Partials/EditCustomer.html'
    })
    .when('/View2',
    {
        controller: 'CustomerController',
        templateUrl: 'Partials/View2.html'
    })
    .otherwise({ redirectTo: '/Customres' });
});




