(function () {
    'use strict';

    angular
        .module('app.access')
        .controller('LogoutCtrl', Logout);

    Logout.$inject = ["$scope", "auth", "$state"];

    function Logout($scope, auth, $state) {
        var self = this;

          auth.logout().then(function(res){
            $state.go("access.login");
            console.log("Logout successful: ", res);
          }).catch(function(err){
            console.log("Error catched while logging out: ", err);
          });
    }

})();
