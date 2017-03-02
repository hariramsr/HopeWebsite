'use strict';
angular.module('hopeApp').controller('galleryController', ['$scope', 'hopeService','eventService','$state', function ($scope, hopeService, eventService, $state) {
    var vm = this;
    var resources = hopeService.getDataFromJSON();
    $scope.events = resources.events;
    $scope.currentEvent = function (event) {
        console.log(event);
        eventService.setCurrentUser(event);
        $state.go('app.event');
    };
}]);