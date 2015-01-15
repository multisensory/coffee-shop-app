angular.module('coffeeshop.notifications', [])


    .config(function ($stateProvider, $urlRouterProvider) {

        $stateProvider

            .state('tab.notifications', {
                url: '/notifications',
                views: {
                    'tab-notifications': {
                        templateUrl: 'templates/tab-notifications.html',
                        controller: 'NotificationCtrl'
                    }
                }
            })

    })

    .factory('Notifications', function() {

        var notifications = [{
            id: 0,
            name: 'James',
            lastText: 'had 6 cups of coffee today',
            face: 'img/james.jpg'
        }, {
            id: 1,
            name: 'Beatrice',
            lastText: 'had coffee at 4:00am',
            face: 'img/bea.jpg'
        }, {
            id: 2,
            name: 'Reid',
            lastText: 'became Espresso Aficionado',
            face: 'img/reid.jpg'
        }, {
            id: 3,
            name: 'Lisa',
            lastText: 'visited 50 store locations',
            face: 'img/lisa.jpg'
        }, {
            id: 4,
            name: 'Amy',
            lastText: 'ate 5 blueberry scones',
            face: 'img/amy.jpg'
        }];

        return {
            all: function() {
                return notifications;
            },
            remove: function(notification) {
                notifications.splice(notifications.indexOf(notification), 1);
            },
            get: function(notificationId) {
                for (var i = 0; i < notifications.length; i++) {
                    if (notifications[i].id === parseInt(notificationId)) {
                        return notifications[i];
                    }
                }
                return null;
            }
        }
    })
    

    .controller('NotificationCtrl', function ($scope, Notifications) {
        $scope.notifications = Notifications.all();
        $scope.remove = function (notification) {
            Notifications.remove(notification);
        }
    });
