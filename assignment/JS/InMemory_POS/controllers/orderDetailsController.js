searchOrder();

// search Order
function searchOrder() {
    $("#detailTbl").empty();
    for (let i = 0; i < orderDB.length; i++) {
      let oId = orderDB[i].orderId;
      let qty = orderDB[i].qty;
      let date = orderDB[i].date;
      let total = orderDB[i].price;
      let cash = orderDB[i].cash;

        let row = `<tr>
                           <td>${oId}</td>
                           <td>${date}</td>
                           <td>${qty}</td>
                           <td>${total}</td>
                           <td>${cash}</td>
                       </tr>`;

        $("#detailTbl").append(row);
        bindsTrEvent();
    }
}

// get data from table
function bindsTrEvent() {
    $("#detailTbl>tr").click(function () {
        let oId = $(this).children().eq(0).text();
        let date = $(this).children().eq(1).text();
        let qty = $(this).children().eq(2).text();
        let total = $(this).children().eq(3).text();
        let cash = $(this).children().eq(4).text();

        $("#exampleInputOrderId").val(oId);
        $("#exampleInputDate").val(date);
        $("#exampleInputQuantity").val(qty);
        $("#exampleInputTotal").val(total);
        $("#exampleInputCash").val(cash);
    });
}

// search order btn event
$("#orderSearch").click(function () {
    searchOrder();
});

// update order
$("#orderUpdate").click(function () {
    let tempId = $("#exampleInputOrderId").val();

    let ok = confirm("Do you want update.!");

    if (ok) {
        for (let i = 0; i < orderDB.length; i++) {
            if (orderDB[i].orderId == tempId) {
                orderDB[i].qty = $("#exampleInputName").val();
                orderDB[i].date = $("#exampleInputQuantity").val();
                orderDB[i].cash = $("#exampleInputTotal").val();
                orderDB[i].balance = $("#exampleInputCash").val();
                searchOrder();
                clearContent();
                return;
            }
        }
        alert("wrong order Id.");
        clearContent();
    }
});

// delete order
$("#orderDelete").click(function () {
    let id1 = $("#exampleInputOrderId").val();

    let ok = confirm("Do you want to delete.!");
    if (ok){
        for (let i = 0; i < orderDB.length; i++) {
            if (orderDB[i].id == id1) {
                orderDB.splice(i, 1);
                searchOrder();
                clearContent();
                return;
            }
        }
        alert("Wrong order Id.");
        clearContent();
    }
});

function clearContent(){
    $("#exampleInputOrderId,#exampleInputName,#exampleInputQuantity,#exampleInputTotal,#exampleInputCash").val("");
}
