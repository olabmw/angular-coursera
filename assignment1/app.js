(function() {
    'use strict';

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {

        $scope.checkFood = function() {
            var food = $scope.food;

            if (food != undefined && food != "") {
                var foodItems = food.split(',');
                var itemCount = 0;
                foodItems.forEach(function(item) {
                    if (item != "" && item != " "){
                        itemCount++;
                    }
                });
                if (itemCount < 4) {
                    $scope.message = "Enjoy!";
                    $scope.colorClass = "text-success";
                    $scope.borderClass = "has-success";
                }
                else {
                    $scope.message = "Too much!";
                    $scope.colorClass = "text-success";
                    $scope.borderClass = "has-success";
                }
            }
            else{
                $scope.message = "Please enter data first!";
                $scope.colorClass = "text-danger";
                $scope.borderClass = "has-error";
            }
        };
    }

})();