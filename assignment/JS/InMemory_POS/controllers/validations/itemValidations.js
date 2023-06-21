$("#exampleInputItemCode,#exampleInputItemName,#exampleInputPrice,#exampleInputQty").keydown(function (e) {
    if (e.key == "Tab") {
        e.preventDefault();
    }
});

$("#exampleInputItemCode").keydown(function (e) {
    let code = $("#exampleInputItemCode").val();
    let checkCode = /^(I00-)[0-9]{3}$/;
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
    let checkPrice = /^[0-9]{2,}([.][0-9]{2})?$/;
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