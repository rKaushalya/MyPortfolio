itemSearch();

// add new item
$("#addItem").click(function () {
    checkItem();
});

// check item is already exists
function checkItem() {
    let tempCode = $("#exampleInputItemCode").val();
    if (itemDB.length == 0) {
        let code = $("#exampleInputItemCode").val();
        let name = $("#exampleInputItemName").val();
        let price = $("#exampleInputPrice").val();
        let qty = $("#exampleInputQty").val();

        let newItem = Object.assign({}, item);
        newItem.code = code;
        newItem.name = name;
        newItem.price = price;
        newItem.qty = qty;

        itemDB.push(newItem);
        itemSearch();
        clearText();
    } else {
        for (let i = 0; i < itemDB.length; i++) {
            if (itemDB[i].code == tempCode) {
                alert("This Item already exists.!");
                return;
            }
        }
            let newCode = $("#exampleInputItemCode").val();
            let newName = $("#exampleInputItemName").val();
            let newPrice = $("#exampleInputPrice").val();
            let newQty = $("#exampleInputQty").val();

            let newItem = Object.assign({}, item);
            newItem.code = newCode;
            newItem.name = newName;
            newItem.price = newPrice;
            newItem.qty = newQty;

            itemDB.push(newItem);
            itemSearch();
            clearText();
    }
}

function clearText() {
    $("#exampleInputItemCode,#exampleInputItemName,#exampleInputPrice,#exampleInputQty").val("");
    $("#exampleInputItemCode").focus();
}

// search items
function itemSearch() {
    $("#tblItem").empty();
    for (let i = 0; i < itemDB.length; i++) {
        let code = itemDB[i].code;
        let name = itemDB[i].name;
        let price = itemDB[i].price;
        let qty = itemDB[i].qty;

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

// search item btn evenet
$("#searchItem").click(function () {
    itemSearch();
});

// get data from table
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

// delete item
$("#deleteItem").click(function () {
    let tempCode = $("#exampleInputItemCode").val();

    let ok = confirm("Do you want delete.!");

    if (ok) {
        for (let i = 0; i < itemDB.length; i++) {
            if (itemDB[i].code == tempCode) {
                itemDB.splice(i, 1);
            }
        }
        itemSearch();
        clearText();
    }
});

// update item
$("#updateItem").click(function () {
    let tempCode = $("#exampleInputItemCode").val();

    let ok = confirm("Do you want update.!");

    if (ok) {
        for (let i = 0; i < itemDB.length; i++) {
            if (itemDB[i].code == tempCode) {
                itemDB[i].name = $("#exampleInputItemName").val();
                itemDB[i].price = $("#exampleInputPrice").val();
                itemDB[i].qty = $("#exampleInputQty").val();
                itemSearch();
                clearText();
                return;
            }
        }
        alert("wrong item code");
    }
});
