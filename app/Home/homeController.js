  
'use strict';

angular.module('hopeApp')
    
    .controller('homeController', ['$scope', 'hopeService', function ($scope, hopeService) {
    var vm = this;
    var resources = hopeService.getDataFromJSON();
                console.log(resources.about);



}]);
