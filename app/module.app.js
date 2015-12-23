"use strict";

/**
 * @ngdoc overview
 * @name app
 * @description
 * # app
 *
 * Main module of the application.
 */
angular
    .module('app', [
        "app.core",
        "app.db",
        "app.api",
        "app.access",
        "app.rest",
        "app.stalkings",
        "app.layout",
        "app.settings",
        "app.timeline"
    ]);

var config = {
  serverUri: "http://localhost:3000",
  baseUri: "http://localhost:4000"
}
