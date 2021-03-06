﻿//This handles retrieving data and is used by controllers. 3 options (server, factory, provider) with 
//each doing the same thing just structuring the functions/data differently.
app.service('customersService', function ($http, $routeParams) {
    var customers //= [{ id: 1, name: 'Dave', city: 'New York', address: '117/800 M.block Kakdeo', pin: '208019' },
    //                         { id: 2, name: 'Shivam', city: 'Kanpur', address: 'D-3027 Munshi Puliya LKO', pin: '208018' },
    //                         { id: 3, name: 'Ranjan', city: 'Lucknow', address: 'D-3027 Munshi Puliya LKO', pin: '208020' }
    //];
    var req = false;
    this.getCustomers = function () {
        //debugger;
        if (req == false) {           
            var responsePromise = $http.get("http://localhost:56744/api/customer");
            responsePromise.success(function (data, status, headers, config) {
                customers = data;
                req = true;
            });
            responsePromise.error(function (data, status, headers, config) {
                alert("AJAX failed!");
            });
        }
        
        return customers;
    };

    this.deleteCustomer = function (id) {
        debugger;
        for (var i = customers.length - 1; i >= 0; i--) {
            if (customers[i].id === id) {
                customers.splice(i, 1);
                break;
            }
        }
    }


    this.addCustomer = function (_name, _city, _address, _pin) {
        var topID = customers.length + 1;
        customers.push({
            id: topID,
            name: _name,
            city: _city,
            address: _address,
            pin: _pin
        });
    }

    this.getCustomer = function (id) {
        for (var i = 0; i < customers.length; i++) {
            if (customers[i].id === id) {
                return customers[i];
            }
        }
        return null;
    };



});