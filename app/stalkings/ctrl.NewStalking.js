(function () {
    'use strict';

    angular
        .module('app')
        .controller('NewStalkingCtrl', NewStalkingCtrl)
    ;

    NewStalkingCtrl.$inject = ["$scope", "$state", "stalkings"];

    function NewStalkingCtrl($scope, $state, stalkings) {
        var self = this;

        $scope.stalking = {
          facebook: {},
          twitter: {},
          instagram: {}
        };

        $scope.submit = function () {
          stalkings.checkStalking($scope.stalking).then(function(stalking){
            stalkings.newStalking(stalking).then(function () {
                $state.go("user.stalkings");
            }).catch(function(err){
              console.log("Social media user not found or err: ", err);
            });
          });
        };

    }
})();
