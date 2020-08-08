angular.module('kityminderEditor')
    .directive('test', ['commandBinder', function(commandBinder) {
        return {
            restrict: 'E',
            templateUrl: 'ui/directive/test/test.html',
            scope: {
                minder: '='
            },
            replace: true,
            link: function($scope) {
            }
        }
    }]);
