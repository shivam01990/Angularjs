app.controller('CustomerController', function ($scope, customersService) {
    //I like to have an init() for controllers that need to perform some initialization. Keeps things in
    //one place...not required though especially in the simple example below
    init();

    function init() {
        $scope.customer = customersService.getCustomers();
    }
    $scope.customer = customersService.getCustomers();
    $scope.addCustomer = function () {
        customersService.addCustomer($scope.newCustomer.name, $scope.newCustomer.city, $scope.newCustomer.address, $scope.newCustomer.pin)
        //$scope.customer.push({
        //    id:customer.lenght+1,
        //    name: $scope.newCustomer.name,
        //    city: $scope.newCustomer.city,
        //    address: $scope.newCustomer.address,
        //    pin: $scope.newCustomer.pin
        //});
    }
    $scope.deleteCustomer = function (id) {
        customersService.deleteCustomer(id);
    }
});