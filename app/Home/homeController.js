'use strict';

angular.module('hopeApp')    

.controller('homeController', ['$scope', 'menuFactory', 'corporateFactory', function ($scope, menuFactory, corporateFactory) {

        $scope.showDish = false;
        $scope.showPromotion = false;
        $scope.showLeader = false;
        $scope.message = "Loading ...";

        $scope.featuredDish = menuFactory.getDishes().get({id: 0})
            .$promise.then(
                function (response) {
                    $scope.featuredDish = response;
                    $scope.showDish = true;
                },
                function (response) {
                    $scope.message = "Error: " + response.status + " " + response.statusText;
                }
            );

        $scope.featuredPromotion = menuFactory.getPromotions().get({id: 0})
            .$promise.then(
                function (response) {
                    $scope.featuredPromotion = response;
                    $scope.showPromotion = true;
                },
                function (response) {
                    $scope.message = "Error: " + response.status + " " + response.statusText;
                }
            );

        $scope.executiveChef = corporateFactory.getLeaders().get({id: 3})
            .$promise.then(
                function (response) {
                    $scope.executiveChef = response;
                    $scope.showLeader = true;
                },
                function (response) {
                    $scope.message = "Error: " + response.status + " " + response.statusText;
                }
            );
    

    }]);