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



