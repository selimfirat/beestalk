(function () {
    'use strict';

    angular
        .module('app.access')
        .controller('LoginCtrl', Login);

    Login.$inject = ["$scope", "auth", "$state"];

    function Login($scope, auth, $state) {
        var self = this;

        $scope.authenticate = function(provider){
          auth.authenticate(provider).then(function(res){
            $state.go("user.timeline");
            console.log("Login successful: ", res);
          }).catch(function(err){
            console.log("Login error: ", err);
          });
        }

    }

})();
