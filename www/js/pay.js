angular.module('coffeeshop.pay', [])


    .config(function ($stateProvider, $urlRouterProvider) {

        $stateProvider

            .state('tab.pay', {
                url: '/pay',
                views: {
                    'tab-pay': {
                        templateUrl: 'templates/tab-pay.html',
                        controller: 'PayCtrl'
                    }
                }
            })

    })

    .factory('Cart', function() {

        var items = [{
            id: 0,
            name: 'Grande Coffee',
            qty: 1,
            price: 2.75
        },
        {
            id: 1,
            name: 'Almond Croissant',
            qty: 1,
            price: 2.50
        },
        {
            id: 2,
            name: 'Blueberry Scone',
            qty: 1,
            price: 3
        }];

        return {
            all: function() {
                return items;
            },
            get: function(itemId) {
                return items[0];
            }
        }
    })

    .controller('PayCtrl', function ($scope, $ionicModal, Cart) {

        $scope.items = Cart.all();

        $ionicModal.fromTemplateUrl('templates/rating-modal.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function(modal) {
            console.log('here');
            $scope.modal = modal;
        });

        $scope.openModal = function() {
            $scope.modal.show();
        };

        $scope.closeModal = function() {
            $scope.modal.hide();
        };

        //Cleanup the modal when we're done with it!
        $scope.$on('$destroy', function() {
            $scope.modal.remove();
        });

        // Execute action on hide modal
        $scope.$on('modal.hidden', function() {
            // Execute action
        });

        // Execute action on remove modal
        $scope.$on('modal.removed', function() {
            // Execute action
        });


    });
