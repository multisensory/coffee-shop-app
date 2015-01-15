angular.module('coffeeshop.userprofile', [])


    .factory('Users', function() {

        var user = {
            id: 0,
            firstName: 'Christophe',
            lastName: 'Coenraets',
            pictureURL: 'img/christophe.png',
            status: 1,
            statusLabel: "Forastero",
            statusDescription: 'blah',
            points: 5400,
            memberSince: 'September 21, 2014'
        };

        return {
            get: function() {
                return user;
            }
        }
    })


    .config(function ($stateProvider, $urlRouterProvider) {

        $stateProvider

            .state('tab.userprofile', {
                url: '/userprofile',
                views: {
                    'tab-userprofile': {
                        templateUrl: 'templates/tab-userprofile.html',
                        controller: 'UserProfileCtrl'
                    }
                }
            })

    })

    .controller('UserProfileCtrl', function($scope, Users) {
        $scope.user = Users.get();

    });
