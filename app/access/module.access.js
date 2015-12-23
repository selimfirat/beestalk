(function () {
    'use strict';

    angular.module('app.access', [
        "satellizer"
    ]).config(["$authProvider", function($authProvider){
        $authProvider.httpInterceptor = function() { return true; },
        $authProvider.withCredentials = true;
        $authProvider.tokenRoot = null;
        $authProvider.cordova = false;
        $authProvider.baseUrl = config.baseUri + "/";
        $authProvider.loginUrl = '/auth/login';
        $authProvider.signupUrl = '/auth/signup';
        $authProvider.unlinkUrl = '/auth/unlink/';
        $authProvider.tokenName = 'token';
        $authProvider.tokenPrefix = 'satellizer';
        $authProvider.authHeader = 'Authorization';
        $authProvider.authToken = 'Bearer';
        $authProvider.storageType = 'localStorage';

          $authProvider.cordova = true;
        // Instagram
        $authProvider.instagram({
          clientId: '9064f1055a914b0896871918073d9260',
          redirectUri: window.location.origin,
          platform: 'mobile',
          popupOptions: {
             location: 'no',
             toolbar: 'no',
             width: window.screen.width,
             height: window.screen.height
          }
        });
        // Facebook
        $authProvider.facebook({
          clientId: '499710110200128',
        //  redirectUri: "https://www.facebook.com/connect/login_success.html",
          redirectUri: window.location.origin,
          platform: 'mobile',
          popupOptions: {
             location: 'no',
             toolbar: 'no',
             width: window.screen.width,
             height: window.screen.height
          }
        });
        // Foursquare & Swarm
        $authProvider.oauth2({
          name: 'foursquare',
          url: '/auth/foursquare',
          clientId: 'EAFDD0ELDOAMYIHO3PSBD0JKE0S2UDRUT5WRSEOMJ05E5EHA',
          authorizationEndpoint: 'https://foursquare.com/oauth2/authenticate',
          redirectUri: window.location.origin,
          platform: 'mobile',
          popupOptions: {
             location: 'no',
             toolbar: 'no',
             width: window.screen.width,
             height: window.screen.height
          }
        });

        // Google
        $authProvider.google({
          clientId: '452822231821-9vgbctg5hp2tmcecn8khcgd6qos5ucdt.apps.googleusercontent.com',
          redirectUri: window.location.origin,
          platform: 'mobile',
          popupOptions: {
             location: 'no',
             toolbar: 'no',
             width: window.screen.width,
             height: window.screen.height
          }
        });

        // Twitter
        $authProvider.twitter({
          url: '/auth/twitter',
          authorizationEndpoint: 'https://api.twitter.com/oauth/authenticate',
          redirectUri: window.location.origin,
          type: '1.0',
          platform: 'mobile',
          popupOptions: {
             location: 'no',
             toolbar: 'no',
             width: window.screen.width,
             height: window.screen.height
          }
        });
    }]);
})();
