(function () {
    'use strict';

    angular
        .module('app.rest')
        .service('facebook', facebook);

    facebook.$inject = ['$http'];

    function facebook($http) {
        this.getData = getData;

        function getData() { }
    }
})();