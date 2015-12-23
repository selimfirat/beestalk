(function () {
    'use strict';

    angular
        .module('app.settings')
        .controller('SettingsCtrl', Settings);

    Settings.$inject = ["$scope", "auth"];

    function Settings($scope, auth) {

    }
})();
