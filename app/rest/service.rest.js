(function () {
    'use strict';

    angular
        .module('app.rest')
        .service('rest', rest);

    rest.$inject = [];

    function rest() {
        var self = this;
        self.login = loginFnc;
        self.logout = logoutFnc;

        hello.init({
            facebook: "499710110200128",
            twitter: "76NlosqwiydSqaTTwoi9YjEB0",
            instagram: "9064f1055a914b0896871918073d9260"
        }, {
            // set this
            redirect_uri: window.location.origin + '/',
            oauth_callback: 'http://127.0.0.1:4400/'
        });

        function loginFnc(network) {
            return hello(network).login().then(function (auth) {
                console.log("Auth successfull: ", auth);
                return auth;
            }).then(null, function (r) {
                console.log("Error on logging in (rest): ", r);
            });
        }

        function logoutFnc(network) {
            return hello(network).logout();
        }
    }
})();
