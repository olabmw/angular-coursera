(function() {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
        var toBuy = this;

        toBuy.items = ShoppingListCheckOffService.getBuyItems();

        toBuy.buyItem = function(index) {
                ShoppingListCheckOffService.buyItem(index);
        };
    };

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var bought = this;

        bought.items = ShoppingListCheckOffService.getBoughtItems();

    };

    function ShoppingListCheckOffService() {
        var service = this;
        var toBuyItems = [{name: "cookies", quantity: 10}, {name: "apples", quantity: 2},
            {name: "bananas", quantity: 3}, {name: "oranges", quantity: 4},
            {name: "lemons", quantity: 5}];
        var alreadyBoughtItems = [];

        service.getBuyItems = function() {
            return toBuyItems;
        };

        service.getBoughtItems = function() {
            return alreadyBoughtItems;
        };

        service.buyItem = function(index) {
            var item = toBuyItems.splice(index, 1);
            alreadyBoughtItems.push(item[0]);
        };

    };

})();