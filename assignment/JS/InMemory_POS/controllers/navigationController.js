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




