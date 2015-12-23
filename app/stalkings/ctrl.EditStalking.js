(function () {
    'use strict';

    angular
        .module('app')
        .controller('EditStalkingCtrl', EditStalkingCtrl);

    EditStalkingCtrl.$inject = ['$stateParams', "$scope", "stalkings", "$state"];

    function EditStalkingCtrl($stateParams, $scope, stalkings, $state) {
        var self = this;
        $scope.stalking = {
          facebook: {},
          twitter: {},
          instagram: {}
        };
        stalkings.getStalking($stateParams._id).then(function (stalking) {
            $scope.stalking = stalking;
            console.log("Editing Stalking: ", stalking);
        });

        $scope.delete = function () {
            stalkings.deleteStalking($stateParams._id).then(function (res) {
                $state.go("user.stalkings");
                console.log("Deleted stalking ", res)
            });
        }

        $scope.submit = function () {
          stalkings.checkStalking($scope.stalking).then(function(stalking){
            stalkings.editStalking(stalking).then(function () {
                $state.go("user.stalkings");
            }).catch(function(err){
              console.log("Social media user not found or err: ", err);
            });
          });
        };
    }

})();
