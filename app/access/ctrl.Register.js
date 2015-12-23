(function () {
    'use strict';

    angular
        .module('app.access')
        .controller('RegisterCtrl', Register);

    Register.$inject = ["$scope", "auth", "$state"];

    function Register($scope, auth, $state) {

        $scope.registerFormSubmit = function () {
            console.log("register Form sending...", $scope.registerForm);
            auth.register($scope.registerForm).then(function () {
                auth.login($scope.registerForm).then(function () {
                    $state.go("user.timeline");
                }, function (error) {
                    console.log("RegisterFormCtrl Logging in Promise Error: ", error);
                });
            }, function (error) {
                console.log("RegisterFormCtrl Promise Error: ", error);
            });
        };

    }

})();
