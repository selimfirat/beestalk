(function () {
    'use strict';

    angular
        .module('app.db')
        .service('db', db);

    db.$inject = [];

    function db() {
        var self = this;
        self.Auth = new PouchDB("Auth");
        self.Stalkings = new PouchDB("Stalkings");

        console.log("Databases connected with adapter: " + self.Auth.adapter);
    }

})();