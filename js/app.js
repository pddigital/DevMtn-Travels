angular.module('devmtnTravel', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
          .state('home', {
            url:'/',
            templateUrl: "../views/about.html"
          })
          .state('adventurers',{
            url:'/adventurers',
            parent:'',
            templateUrl:"../views/about-adventurers.html"
          })
          .state('packages',{
               url:'/packages',
               templateUrl: "../views/packages.html",
               controller: 'packagesCtrl',
               controllerAs: ''
           })
          .state('contact',{
            url:'/contact',
            parent:'',
            templateUrl:"../views/contact.html"
          })
          .state('booked',{
            url:'/booked/:id',
            templateUrl:"../views/booked.html",
            controller: 'bookedCtrl',
            controllerAs: ''
          })
          .state('locations',{
            url: '/locations',
            templateUrl: "../views/locations.html",
            controller: 'locationsCtrl',
            controllerAs: ''
          })

        $urlRouterProvider
            .otherwise('/');
    });
