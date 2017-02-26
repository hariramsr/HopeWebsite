'use strict';

// var app = angular.module('hopeApp', ['ngRoute']).config(function ($routeProvider) {
//     $routeProvider
//         // route for the contactus page
//         .when('/contactus', {
//             templateUrl: 'contactus.html',
//             controller: 'ContactController'
//         })
//         // route for the menu page
//         .when('/menu', {
//             templateUrl: 'menu.html',
//             controller: 'MenuController'
//         })
//         // route for the dish details page
//         .when('/menu/:id', {
//             templateUrl: 'dishdetail.html',
//             controller: 'DishDetailController'
//         })
//         .otherwise('/contactus');
// });

angular.module('hopeApp', ['ui.router', 'ngResource'])
.config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
        
            // route for the home page
            .state('app', {
                url:'/',
                views: {
                    'header': {
                        templateUrl : 'Shared/Partials/header.html',
                    },
                    'content': {
                        templateUrl : 'Home/home.html',
                        controller  : 'homeController'
                    },
                    'footer': {
                        templateUrl : 'Shared/Partials/footer.html',
                    }
                },
                resolve: {
                    myData: function(resourceService){
                        resourceService.getDataFromJson();
                    }
                }

            })
        
            // route for the aboutus page
            .state('app.aboutus', {
                url:'aboutus',
                views: {
                    'content@': {
                        templateUrl : 'About/aboutus.html',
                        controller  : 'AboutController'                  
                    }
                }
            })
        
            // route for the contactus page
            .state('app.contactus', {
                url:'contactus',
                views: {
                    'content@': {
                        templateUrl : 'Contact/contactus.html',
                        controller  : 'ContactController'                  
                    }
                }
            })

            // route for the menu page
            .state('app.gallery', {
                url: 'gallery',
                views: {
                    'content@': {
                        templateUrl : 'Gallery/gallery.html',
                        controller  : 'galleryController'
                    }
                }
            })

            // route for the dishdetail page
            .state('app.dishdetails', {
                url: 'menu/:id',
                views: {
                    'content@': {
                        templateUrl : 'Gallery/Detail/detail.html',
                        controller  : 'detailController'
                   }
                }
            });
    
        $urlRouterProvider.otherwise('/');
    })
;
