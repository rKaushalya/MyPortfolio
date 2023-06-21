initiateUI();

function initiateUI(){
    clearAll();
    $("#dashBordFrom").css('display','block');
    setLastView();
}

function saveLastView(clickedID) {
    switch (clickedID) {
        case "dashBordFrom":
            localStorage.setItem("view", "HOME");
            break;
        case "customerForm":
            localStorage.setItem("view", "CUSTOMER");
            break;
        case "itemForm":
            localStorage.setItem("view", "ITEM");
            break;
        case "orderDetailsForm":
            localStorage.setItem("view", "ORDER");
            break;
    }
}

function setView(viewOb){
    clearAll();
    viewOb.css('display','block');
    saveLastView(viewOb.get(0).id);
}

function setLastView(){
    let view = localStorage.getItem("view");
    switch (view) {
        case "HOME":
            setView($("#dashBordFrom"));
            break;
        case "CUSTOMER":
            setView($("#customerForm"));
            break;
        case "ITEM":
            setView($("#itemForm"));
            break;
        case "ORDER":
            setView($("#orderDetailsForm"));
            break;
        default:
            setView($("#dashBordFrom"));
    }
}

function clearAll() {
    $("#dashBordFrom,#customerForm,#itemForm,#orderDetailsForm").css('display', 'none');
}

$("#clkHome").click(function () {
    setView($("#dashBordFrom"));
});

$("#clkCustomer").click(function () {
    setView($("#customerForm"));
});

$("#clkItem").click(function () {
    setView($("#itemForm"));
});

$("#clkOrder").click(function () {
    setView($("#orderDetailsForm"));
});


let mainArray = [];
let itemArray = [];

/*var pages = {
    'home': `<div><div class="container text-body">
    <div class="row mt-4">
        <div class="col-sm-6 col-12">
            <p style="font-size: 24px; color: #FFFFFF; background-color: #45AAF2; text-align: center; height: 50px; padding-top: 8px">Customer Details</p>
            <form>
                <div class="mb-3">
                    <label for="exampleInputCusId" class="form-label">Customer ID</label>
                    <input type="email" class="form-control" id="exampleInputCusId" aria-describedby="emailHelp">
                </div>
                <div class="mb-3">
                    <label for="exampleInputName" class="form-label">Customer Name</label>
                    <input type="email" class="form-control" id="exampleInputName" aria-describedby="emailHelp">
                </div>
                <div class="mb-3">
                    <label for="exampleInputAddress" class="form-label">Customer Address</label>
                    <input type="email" class="form-control" id="exampleInputAddress" aria-describedby="emailHelp">
                </div>
                <div class="mb-3">
                    <label for="exampleInputContact" class="form-label">Customer Contact</label>
                    <input type="email" class="form-control" id="exampleInputContact" aria-describedby="emailHelp">
                </div>
                <div class="mb-3">
                    <label for="exampleInputSalary" class="form-label">Customer Salary</label>
                    <input type="email" class="form-control" id="exampleInputSalary" aria-describedby="emailHelp">
                </div>
                <div style="height: 35px"></div>
                <div class="mb-3">
                    <ul class="navbar-nav">
                        <li class="nav-item dropdown">
                            <button class="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" style="color: white; background-color: blue">
                                Item Code
                            </button>
                            <ul class="dropdown-menu dropdown-menu-dark">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>

            </form>
        </div>
        <div class="col-sm-6 col-12">
            <p style="font-size: 24px; color: #FFFFFF; background-color: #45AAF2; text-align: center; height: 50px; padding-top: 8px" data-bs-theme="dark">Order Details</p>
            <form>
                <div class="mb-3">
                    <label for="exampleInputOrderId" class="form-label">Order ID</label>
                    <input type="email" class="form-control" id="exampleInputOrderId" aria-describedby="emailHelp">
                </div>
                <div class="mb-3">
                    <label for="exampleInputQty" class="form-label">Quantity</label>
                    <input type="email" class="form-control" id="exampleInputQty" aria-describedby="emailHelp">
                </div>
                <div class="mb-3">
                    <label for="exampleInputDate" class="form-label">Date</label>
                    <input type="email" class="form-control" id="exampleInputDate" aria-describedby="emailHelp">
                </div>
                <div class="mb-3">
                    <label for="exampleInputTotalPrice" class="form-label">Total</label>
                    <input type="email" class="form-control" id="exampleInputTotalPrice" aria-describedby="emailHelp">
                </div>
                <div class="mb-3">
                    <label for="exampleInputCash" class="form-label">Cash</label>
                    <input type="email" class="form-control" id="exampleInputCash" aria-describedby="emailHelp">
                </div>
                <div class="mb-3">
                    <label for="exampleInputBalance" class="form-label">Balance</label>
                    <input type="email" class="form-control" id="exampleInputBalance" aria-describedby="emailHelp">
                </div>
                <button type="submit" class="btn btn-primary" style="text-align: center; background-color: #ff253a; height: 40px; width: 150px;position: relative; left: 200px">Place Order</button>
            </form>
        </div>
    </div>
</div>
                  <div class="container text-body mt-3">
        <div class="row justify-content-center">
            <div class="col-12" style="width: 1500px">
                <table class="table">
                    <thead>
                    <tr style="background-color: #45AAF2; color: #FFFFFF">
                        <th scope="col">Item Code</th>
                        <th scope="col">Item Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div></div>`,
    'customer': `<div class="container text-center">
    <div class="row">
        <div class="col">
                <p style="font-size: 24px; color: #FFFFFF; background-color: #45AAF2; text-align: center;height: 60px;padding-top: 8px;margin-top: 20px">Customer Details</p>
                <div class="container text-center">
                    <div class="row">
                        <div class="col-md-2 col-0"></div>
                        <div class="col-md-6 col-6">
                            <form style="text-align: left">
                                <div class="mb-3">
                                    <label for="exampleInputCusId" class="form-label">Customer ID</label>
                                    <input type="email" class="form-control" id="exampleInputCusId" aria-describedby="emailHelp">
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputName" class="form-label">Customer Name</label>
                                    <input type="email" class="form-control" id="exampleInputName" aria-describedby="emailHelp">
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputAddress" class="form-label">Customer Address</label>
                                    <input type="email" class="form-control" id="exampleInputAddress" aria-describedby="emailHelp">
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputContact" class="form-label">Customer Contact</label>
                                    <input type="email" class="form-control" id="exampleInputContact" aria-describedby="emailHelp">
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputSalary" class="form-label">Customer Salary</label>
                                    <input type="email" class="form-control" id="exampleInputSalary" aria-describedby="emailHelp">
                                </div>
                            </form>
                        </div>
                        <div class="col-md-1 col-0"></div>
                        <div class="col-md-3 col-6">
                            <div style="display: flex; flex-direction: column">
                                <div style="height: 100px"></div>
                                <button id="search" type="submit" class="btn btn-primary" style="text-align: center; width: 120px; height: 50px;font-size: 20px">search</button>
                                <div style="height: 50px"></div>
                                <button id="update" type="submit" class="btn btn-primary" style="text-align: center; width: 120px; height: 50px;font-size: 20px;background-color: green">Update</button>
                                <div style="height: 50px"></div>
                                <button id="delete" type="submit" class="btn btn-primary" style="text-align: center; width: 120px; height: 50px;font-size: 20px;background-color: #ff253a">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </div>
</div>
                      <div class="container text-body">
    <div class="row justify-content-center">
            <table class="table col-12">
                <thead>
                <tr style="background-color: #45AAF2; color: #FFFFFF">
                    <th scope="col">Customer ID</th>
                    <th scope="col">Customer Name</th>
                    <th scope="col">Customer address</th>
                    <th scope="col">Customer Contact</th>
                    <th scope="col">Customer Salary</th>
                </tr>
                </thead>
                <tbody  id="tbl">
                </tbody>
            </table>
        </div>
    </div>`,
    'item': `<div class="container text-center">
    <div class="row">
        <div class="col">
                <p style="font-size: 24px; color: #FFFFFF; background-color: #45AAF2; text-align: center;height: 60px;padding-top: 8px;margin-top: 20px">Item Details</p>
                <div class="container text-center">
                    <div class="row">
                        <div class="col-2"></div>
                        <div class="col-6">
                            <form style="text-align: left">
                                <div class="mb-3">
                                    <label for="exampleInputItemCode" class="form-label">Item Code</label>
                                    <input type="email" class="form-control" id="exampleInputItemCode" aria-describedby="emailHelp">
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputItemName" class="form-label">Item Name</label>
                                    <input type="email" class="form-control" id="exampleInputItemName" aria-describedby="emailHelp">
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputPrice" class="form-label">Item Price</label>
                                    <input type="email" class="form-control" id="exampleInputPrice" aria-describedby="emailHelp">
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputQty" class="form-label">Available Quantity</label>
                                    <input type="email" class="form-control" id="exampleInputQty" aria-describedby="emailHelp">
                                </div>
                            </form>
                        </div>
                        <div class="col-1"></div>
                        <div class="col-3">
                            <div style="display: flex; flex-direction: column">
                                <div style="height: 40px"></div>
                                <button id="addItem" type="submit" class="btn btn-primary" style="text-align: center; width: 120px; height: 40px;font-size: 20px">Add</button>
                                <div style="height: 40px"></div>
                                <button id="updateItem" type="submit" class="btn btn-primary" style="text-align: center; width: 120px; height: 40px;font-size: 20px;background-color: green">Update</button>
                                <div style="height: 40px"></div>
                                <button id="searchItem" type="submit" class="btn btn-primary" style="text-align: center; width: 120px; height: 40px;font-size: 20px;background-color: yellow; color: black">Search</button>
                                <div style="height: 40px"></div>
                                <button id="deleteItem" type="submit" class="btn btn-primary" style="text-align: center; width: 120px; height: 40px;font-size: 20px;background-color: #ff253a">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </div>
</div>
                  <div class="container text-body">
    <div class="row justify-content-center">
            <table class="table">
                <thead>
                <tr style="background-color: #45AAF2; color: #FFFFFF">
                    <th scope="col">Item Code</th>
                    <th scope="col">Item Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                </tr>
                </thead>
                <tbody id="tblItem">
                </tbody>
            </table>
        </div>
    </div>`,
    'order': `<div class="container text-center">
    <div class="row">
        <div class="col align-self-center">
                <p style="font-size: 24px; color: #FFFFFF; background-color: #45AAF2; text-align: center;height: 60px;padding-top: 8px;margin-top: 20px">Order Details</p>
                <div class="container text-center">
                    <div class="row">
                        <div class="col-2"></div>
                        <div class="col-6">
                            <form style="text-align: left">
                                <div class="mb-3">
                                    <label for="exampleInputOrderId" class="form-label">Order ID</label>
                                    <input type="email" class="form-control" id="exampleInputOrderId" aria-describedby="emailHelp">
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputDate" class="form-label">Date</label>
                                    <input type="email" class="form-control" id="exampleInputDate" aria-describedby="emailHelp">
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputQuantity" class="form-label">Quantity</label>
                                    <input type="email" class="form-control" id="exampleInputQuantity" aria-describedby="emailHelp">
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputTotal" class="form-label">Total</label>
                                    <input type="email" class="form-control" id="exampleInputTotal" aria-describedby="emailHelp">
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputCash" class="form-label">Cash</label>
                                    <input type="email" class="form-control" id="exampleInputCash" aria-describedby="emailHelp">
                                </div>
                            </form>
                        </div>
                        <div class="col-1"></div>
                        <div class="col-3">
                            <div style="display: flex; flex-direction: column">
                                <div style="height: 100px"></div>
                                <button type="submit" class="btn btn-primary" style="text-align: center; width: 120px; height: 50px;font-size: 20px">search</button>
                                <div style="height: 50px"></div>
                                <button type="submit" class="btn btn-primary" style="text-align: center; width: 120px; height: 50px;font-size: 20px;background-color: green">Update</button>
                                <div style="height: 50px"></div>
                                <button type="submit" class="btn btn-primary" style="text-align: center; width: 120px; height: 50px;font-size: 20px;background-color: #ff253a">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </div>
</div>
                   <div class="container text-body">
    <div class="row justify-content-center">
            <table class="table">
                <thead>
                <tr style="background-color: #45AAF2; color: #FFFFFF">
                    <th scope="col">Order ID</th>
                    <th scope="col">Date</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Total</th>
                    <th scope="col">Cash</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td colspan="2">Larry the Bird</td>
                    <td>@twitter</td>
                </tr>
                </tbody>
            </table>
    </div>
</div>`

};*/

/*function getPageContent(page) {
    var contentToReturn;

    switch (page) {
        case 'home' :
            contentToReturn = pages.home;
            break;
        case 'customer' :
            contentToReturn = pages.customer;
            break;
        case 'item' :
            contentToReturn = pages.item;
            break;
        case 'order' :
            contentToReturn = pages.order;
            break;
        default :
            contentToReturn = pages.home;
            break;
    }
    document.getElementById('content').innerHTML = contentToReturn;
}*/

function search() {
    $("#tbl").empty();
    for (let i = 0; i < mainArray.length; i++) {
        let id = mainArray[i].id;
        let name = mainArray[i].name;
        let address = mainArray[i].address;
        let contact = mainArray[i].contact;
        let salary = mainArray[i].salary;

        let row = `<tr>
                           <td>${id}</td>
                           <td>${name}</td>
                           <td>${address}</td>
                           <td>${contact}</td>
                           <td>${salary}</td>
                       </tr>`;

        $("#tbl").append(row);
        bindTrEvent();
    }
}

$("#search").click(function () {
    search();
});

$("#update").click(function () {
    let id = $("#exampleInputCusId").val();
    let name = $("#exampleInputName").val();
    let address = $("#exampleInputAddress").val();
    let contact = $("#exampleInputContact").val();
    let salary = $("#exampleInputSalary").val();

    let customer = {
        id: id,
        name: name,
        address: address,
        contact: contact,
        salary: salary
    };

    mainArray.push(customer);
});

function bindTrEvent() {
    $("#tbl>tr").click(function () {
        let id = $(this).children().eq(0).text();
        let name = $(this).children().eq(1).text();
        let address = $(this).children().eq(2).text();
        let contact = $(this).children().eq(3).text();
        let salary = $(this).children().eq(4).text();

        $("#exampleInputCusId").val(id);
        $("#exampleInputName").val(name);
        $("#exampleInputAddress").val(address);
        $("#exampleInputContact").val(contact);
        $("#exampleInputSalary").val(salary);
    });
}

$("#delete").click(function () {
    let id1 = $("#exampleInputCusId").val();
    for (let i = 0; i < mainArray.length; i++) {
        if (mainArray[i].id == id1) {
            mainArray.splice(i, 1);
        }
    }
    search();
});

//Item form functions

$("#addItem").click(function () {
    checkItem();
});

function checkItem() {
    let tempCode = $("#exampleInputItemCode").val();
    if (itemArray.length == 0) {
        let code = $("#exampleInputItemCode").val();
        let name = $("#exampleInputItemName").val();
        let price = $("#exampleInputPrice").val();
        let qty = $("#exampleInputQty").val();

        let item = {
            code: code,
            name: name,
            price: price,
            qty: qty,
        };

        itemArray.push(item);
        itemSearch();
        clearText();
    } else {
        for (let i = 0; i < itemArray.length; i++) {
            if (itemArray[i].code == tempCode) {
                alert("This Item already exists.!");
                break;
            } else {
                let code = $("#exampleInputItemCode").val();
                let name = $("#exampleInputItemName").val();
                let price = $("#exampleInputPrice").val();
                let qty = $("#exampleInputQty").val();

                let item = {
                    code: code,
                    name: name,
                    price: price,
                    qty: qty,
                };

                itemArray.push(item);
                itemSearch();
                clearText();
            }
        }
    }
}

$("#exampleInputItemCode,#exampleInputItemName,#exampleInputPrice,#exampleInputQty").keydown(function (e) {
    if (e.key == "Tab") {
        e.preventDefault();
    }
});

$("#exampleInputItemCode").keydown(function (e) {
    let code = $("#exampleInputItemCode").val();
    let checkCode = /^(C00-)[0-9]{3}$/;
    let ok = checkCode.test(code);

    if (e.key == "Enter") {
        if (ok) {
            $("#exampleInputItemName").focus();
            $("#exampleInputItemCode").css("border-color", "black");
            $("#addItem").prop("disabled", false);
            $("#searchItem").prop("disabled", false);
            $("#deleteItem").prop("disabled", false);
            $("#updateItem").prop("disabled", false);
        } else {
            $("#exampleInputItemCode").css("border-color", "red");
            $("#addItem").prop("disabled", true);
            $("#searchItem").prop("disabled", true);
            $("#deleteItem").prop("disabled", true);
            $("#updateItem").prop("disabled", true);
        }
    }
});
$("#exampleInputItemName").keydown(function (e) {
    let itemName = $("#exampleInputItemName").val();
    let checkName = /[a-z]{3}/;
    let ok = checkName.test(itemName);

    if (e.key == "Enter") {
        if (ok) {
            $("#exampleInputPrice").focus();
            $("#exampleInputItemName").css("border-color", "black");
            $("#addItem").prop("disabled", false);
            $("#searchItem").prop("disabled", false);
            $("#deleteItem").prop("disabled", false);
            $("#updateItem").prop("disabled", false);
        } else {
            $("#exampleInputItemName").css("border-color", "red");
            $("#addItem").prop("disabled", true);
            $("#searchItem").prop("disabled", true);
            $("#deleteItem").prop("disabled", true);
            $("#updateItem").prop("disabled", true);
        }
    }
});
$("#exampleInputPrice").keydown(function (e) {
    let price = $("#exampleInputPrice").val();
    let checkPrice = /^[0-9]{2}/;
    let ok = checkPrice.test(price);

    if (e.key == "Enter") {
        if (ok) {
            $("#exampleInputQty").focus();
            $("#exampleInputPrice").css("border-color", "black");
            $("#addItem").prop("disabled", false);
            $("#searchItem").prop("disabled", false);
            $("#deleteItem").prop("disabled", false);
            $("#updateItem").prop("disabled", false);
        } else {
            $("#exampleInputPrice").css("border-color", "red");
            $("#addItem").prop("disabled", true);
            $("#searchItem").prop("disabled", true);
            $("#deleteItem").prop("disabled", true);
            $("#updateItem").prop("disabled", true);
        }
    }
});
$("#exampleInputQty").keydown(function (e) {
    let qty = $("#exampleInputQty").val();
    let checkQty = /^[0-9]{1}/;
    let ok = checkQty.test(qty);

    if (e.key == "Enter") {
        if (ok) {
            checkItem();
            $("#exampleInputQty").css("border-color", "black");
            $("#addItem").prop("disabled", false);
            $("#searchItem").prop("disabled", false);
            $("#deleteItem").prop("disabled", false);
            $("#updateItem").prop("disabled", false);
        } else {
            $("#exampleInputQty").css("border-color", "red");
            $("#addItem").prop("disabled", true);
            $("#searchItem").prop("disabled", true);
            $("#deleteItem").prop("disabled", true);
            $("#updateItem").prop("disabled", true);
        }
    }
});

function clearText() {
    $("#exampleInputItemCode,#exampleInputItemName,#exampleInputPrice,#exampleInputQty").val("");
    $("#exampleInputItemCode").focus();
}

function itemSearch() {
    $("#tblItem").empty();
    for (let i = 0; i < itemArray.length; i++) {
        let code = itemArray[i].code;
        let name = itemArray[i].name;
        let price = itemArray[i].price;
        let qty = itemArray[i].qty;

        let row = `<tr>
                           <td>${code}</td>
                           <td>${name}</td>
                           <td>${price}</td>
                           <td>${qty}</td>
                       </tr>`;

        $("#tblItem").append(row);
        itemBindTrEvent()
    }
}

$("#searchItem").click(function () {
    itemSearch();
});

function itemBindTrEvent() {
    $("#tblItem>tr").click(function () {
        let code = $(this).children().eq(0).text();
        let name = $(this).children().eq(1).text();
        let price = $(this).children().eq(2).text();
        let qty = $(this).children().eq(3).text();

        $("#exampleInputItemCode").val(code);
        $("#exampleInputItemName").val(name);
        $("#exampleInputPrice").val(price);
        $("#exampleInputQty").val(qty);
    });
}

$("#deleteItem").click(function () {
    let tempCode = $("#exampleInputItemCode").val();

    let ok = confirm("Do you want delete.!");

    if (ok) {
        for (let i = 0; i < itemArray.length; i++) {
            if (itemArray[i].code == tempCode) {
                itemArray.splice(i, 1);
            }
        }
        itemSearch();
        clearText();
    }
});

$("#updateItem").click(function () {
    let tempCode = $("#exampleInputItemCode").val();

    let ok = confirm("Do you want update.!");
    if (ok) {
        for (let i = 0; i < itemArray.length; i++) {
            if (itemArray[i].code == tempCode) {
                itemArray[i].name = $("#exampleInputItemName").val();
                itemArray[i].price = $("#exampleInputPrice").val();
                itemArray[i].qty = $("#exampleInputQty").val();
                itemSearch();
                clearText();
                return;
            } else {
                alert("Wrong item Code..");
            }
        }
    }
});


