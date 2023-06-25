//Customer Validation
$("#exampleInputCustomerId,#exampleInputCustomerName,#exampleInputCustomerAddress,#exampleInputCustomerContact,#exampleInputCustomerSalary").keydown(function (e) {
    if (e.key == "Tab") {
        e.preventDefault();
    }
});

$("#exampleInputCustomerId").keydown(function (e) {
    let code = $("#exampleInputCustomerId").val();
    let checkCode = /^(C00-)[0-9]{3}$/;
    let ok = checkCode.test(code);

    if (e.key == "Enter") {
        if (ok) {
            $("#exampleInputCustomerName").focus();
            $("#exampleInputCustomerId").css("border-color", "black");
            $("#placeOrder").prop("disabled", false);
            $("#ulItemCode").prop("disabled", false);
        } else {
            $("#exampleInputCustomerId").css("border-color", "red");
            $("#placeOrder").prop("disabled", true);
            $("#ulItemCode").prop("disabled", true);
        }
    }
});

$("#exampleInputCustomerName").keydown(function (e) {
    let name = $("#exampleInputCustomerName").val();
    let checkName = /^[A-Za-z ]{5,}$/;
    let ok = checkName.test(name);

    if (e.key == "Enter") {
        if (ok) {
            $("#exampleInputCustomerAddress").focus();
            $("#exampleInputCustomerName").css("border-color", "black");
            $("#placeOrder").prop("disabled", false);
            $("#ulItemCode").prop("disabled", false);
        } else {
            $("#exampleInputCustomerName").css("border-color", "red");
            $("#placeOrder").prop("disabled", true);
            $("#ulItemCode").prop("disabled", true);
        }
    }
});

$("#exampleInputCustomerAddress").keydown(function (e) {
    let name = $("#exampleInputCustomerAddress").val();
    let checkAddress = /^[A-Za-z0-9 ]{8,}$/;
    let ok = checkAddress.test(name);

    if (e.key == "Enter") {
        if (ok) {
            $("#exampleInputCustomerContact").focus();
            $("#exampleInputCustomerAddress").css("border-color", "black");
            $("#placeOrder").prop("disabled", false);
            $("#ulItemCode").prop("disabled", false);
        } else {
            $("#exampleInputCustomerAddress").css("border-color", "red");
            $("#placeOrder").prop("disabled", true);
            $("#ulItemCode").prop("disabled", true);
        }
    }
});

$("#exampleInputCustomerContact").keydown(function (e) {
    let name = $("#exampleInputCustomerContact").val();
    let checkAddress = /^[0-9 ]{10}$/;
    let ok = checkAddress.test(name);

    if (e.key == "Enter") {
        if (ok) {
            $("#exampleInputCustomerSalary").focus();
            $("#exampleInputCustomerContact").css("border-color", "black");
            $("#placeOrder").prop("disabled", false);
            $("#ulItemCode").prop("disabled", false);
        } else {
            $("#exampleInputCustomerContact").css("border-color", "red");
            $("#placeOrder").prop("disabled", true);
            $("#ulItemCode").prop("disabled", true);
        }
    }
});

$("#exampleInputCustomerSalary").keydown(function (e) {
    let name = $("#exampleInputCustomerSalary").val();
    let checkSalary = /^[0-9]{2,}([.][0-9]{2})?$/;
    let ok = checkSalary.test(name);

    if (e.key == "Enter") {
        if (ok) {
            $("#ulItemCode").focus();
            $("#exampleInputCustomerSalary").css("border-color", "black");
            $("#placeOrder").prop("disabled", false);
            $("#ulItemCode").prop("disabled", false);
        } else {
            $("#exampleInputCustomerSalary").css("border-color", "red");
            $("#placeOrder").prop("disabled", true);
            $("#ulItemCode").prop("disabled", true);
        }
    }
});

//Order Validation
$("#exampleInputDashOrderId,#exampleInputItemQty,#exampleInputDashDate,#exampleInputTotalPrice,#exampleInputDashCash,#exampleInputBalance").keydown(function (e) {
    if (e.key == "Tab") {
        e.preventDefault();
    }
});

$("#exampleInputDashOrderId").keydown(function (e) {
    let name = $("#exampleInputDashOrderId").val();
    let checkSalary = /^(O00-)[0-9]{3}$/;
    let ok = checkSalary.test(name);

    if (e.key == "Enter") {
        if (ok) {
            $("#exampleInputItemQty").focus();
            $("#exampleInputDashOrderId").css("border-color", "black");
            $("#placeOrder").prop("disabled", false);
            $("#ulItemCode").prop("disabled", false);
        } else {
            $("#exampleInputDashOrderId").css("border-color", "red");
            $("#placeOrder").prop("disabled", true);
            $("#ulItemCode").prop("disabled", true);
        }
    }
});

$("#exampleInputItemQty").keydown(function (e) {
    let name = $("#exampleInputItemQty").val();
    let checkSalary = /^[1-9]{1}/;
    let ok = checkSalary.test(name);

    if (e.key == "Enter") {
        if (ok) {
            $("#exampleInputDashDate").focus();
            $("#exampleInputItemQty").css("border-color", "black");
            $("#placeOrder").prop("disabled", false);
            $("#ulItemCode").prop("disabled", false);
        } else {
            $("#exampleInputItemQty").css("border-color", "red");
            $("#placeOrder").prop("disabled", true);
            $("#ulItemCode").prop("disabled", true);
        }
    }
});

$("#exampleInputDashDate").keydown(function (e) {
    if (e.key == "Enter") {
            $("#exampleInputTotalPrice").focus();
    }
});

$("#exampleInputTotalPrice").keydown(function (e) {
    let name = $("#exampleInputTotalPrice").val();
    let checkSalary = /^[0-9]{2,}([.][0-9]{2})?$/;
    let ok = checkSalary.test(name);

    if (e.key == "Enter") {
        if (ok) {
            $("#exampleInputDashCash").focus();
            $("#exampleInputTotalPrice").css("border-color", "black");
            $("#placeOrder").prop("disabled", false);
            $("#ulItemCode").prop("disabled", false);
        } else {
            $("#exampleInputTotalPrice").css("border-color", "red");
            $("#placeOrder").prop("disabled", true);
            $("#ulItemCode").prop("disabled", true);
        }
    }
});

$("#exampleInputDashCash").keydown(function (e) {
    let name = $("#exampleInputDashCash").val();
    let checkSalary = /^[0-9]{2,}([.][0-9]{2})?$/;
    let ok = checkSalary.test(name);

    if (e.key == "Enter") {
        if (ok) {
            $("#exampleInputBalance").focus();
            $("#exampleInputDashCash").css("border-color", "black");
            $("#placeOrder").prop("disabled", false);
            $("#ulItemCode").prop("disabled", false);
        } else {
            $("#exampleInputDashCash").css("border-color", "red");
            $("#placeOrder").prop("disabled", true);
            $("#ulItemCode").prop("disabled", true);
        }
    }
});

$("#exampleInputBalance").keydown(function (e) {
    let name = $("#exampleInputBalance").val();
    let checkSalary = /^[0-9]{2,}([.][0-9]{2})?$/;
    let ok = checkSalary.test(name);

    if (e.key == "Enter") {
        if (ok) {
            $("#exampleInputBalance").css("border-color", "black");
            $("#placeOrder").prop("disabled", false);
            $("#ulItemCode").prop("disabled", false);
        } else {
            $("#exampleInputBalance").css("border-color", "red");
            $("#placeOrder").prop("disabled", true);
            $("#ulItemCode").prop("disabled", true);
        }
    }
});