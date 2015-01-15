angular.module('coffeeshop',
    ['ionic', 'coffeeshop.userprofile', 'coffeeshop.pay', 'coffeeshop.stores', 'coffeeshop.notifications'])

    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
    })

    .config(function ($stateProvider, $urlRouterProvider) {

        $stateProvider

            .state('tab', {
                url: "/tab",
                abstract: true,
                templateUrl: "templates/tabs.html"
            });

        $urlRouterProvider.otherwise('/tab/userprofile');

    });