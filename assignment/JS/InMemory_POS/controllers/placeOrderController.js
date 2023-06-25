$("#placeOrder").click(function () {
    let id = $("#exampleInputCustomerId").val();
    if (customerDB.length == 0){
        let name = $("#exampleInputCustomerName").val();
        let address = $("#exampleInputCustomerAddress").val();
        let contact = $("#exampleInputCustomerContact").val();
        let salary = $("#exampleInputCustomerSalary").val();

        let newCustomer = Object.assign({}, customer);
        newCustomer.id = id;
        newCustomer.name = name;
        newCustomer.address = address;
        newCustomer.contact = contact;
        newCustomer.salary = salary;

        customerDB.push(newCustomer);
    }else {
        for (let i = 0; i < customerDB.length; i++) {
            if (customerDB[i].id == id){
                alert("This customer already Exists.!");
                return;
            }
        }
        let name = $("#exampleInputCustomerName").val();
        let address = $("#exampleInputCustomerAddress").val();
        let contact = $("#exampleInputCustomerContact").val();
        let salary = $("#exampleInputCustomerSalary").val();

        let newCustomer = Object.assign({}, customer);
        newCustomer.id = id;
        newCustomer.name = name;
        newCustomer.address = address;
        newCustomer.contact = contact;
        newCustomer.salary = salary;

        customerDB.push(newCustomer);
    }

    let oId = $("#exampleInputDashOrderId").val();
    if (orderDB.length == 0){
        let qty = $("#exampleInputItemQty").val();
        let date = $("#exampleInputDashDate").val();
        let total = $("#exampleInputTotalPrice").val();
        let cash = $("#exampleInputDashCash").val();
        let balance = $("#exampleInputBalance").val();

        let newOrder = Object.assign({}, order);
        newOrder.orderId = oId;
        newOrder.qty = qty;
        newOrder.date = date;
        newOrder.price = total;
        newOrder.cash = cash;
        newOrder.balance = balance;

        orderDB.push(newOrder);
    }else {
        for (let i = 0; i < orderDB.length; i++) {
            if (orderDB[i].orderId == oId){
                alert("This OrderID already Exists.");
                return;
            }
        }
        let qty = $("#exampleInputItemQty").val();
        let date = $("#exampleInputDashDate").val();
        let total = $("#exampleInputTotalPrice").val();
        let cash = $("#exampleInputDashCash").val();
        let balance = $("#exampleInputBalance").val();

        let newOrder = Object.assign({}, order);
        newOrder.orderId = oId;
        newOrder.qty = qty;
        newOrder.date = date;
        newOrder.price = total;
        newOrder.cash = cash;
        newOrder.balance = balance;

        orderDB.push(newOrder);
    }
    
});