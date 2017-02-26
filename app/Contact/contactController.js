'use strict';

angular.module('hopeApp')

    .controller('ContactController', ['$scope','hopeService', function ($scope, hopeService) {

        $scope.feedback = {mychannel: "", firstName: "", lastName: "", agree: false, email: ""};

        var channels = [{value: "tel", label: "Tel."}, {value: "Email", label: "Email"}];

        $scope.channels = channels;
        $scope.invalidChannelSelection = false;
        console.log(hopeService.getDataFromJSON());

    }])