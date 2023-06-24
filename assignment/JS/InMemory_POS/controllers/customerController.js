search();

// search customer
function search() {
    $("#tbl").empty();
    for (let i = 0; i < customerDB.length; i++) {
        let id = customerDB[i].id;
        let name = customerDB[i].name;
        let address = customerDB[i].address;
        let contact = customerDB[i].contact;
        let salary = customerDB[i].salary;

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

// search customer btn event
$("#search").click(function () {
    search();
});

// update customer
$("#update").click(function () {
    /*let id = $("#exampleInputCusId").val();
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

    mainArray.push(customer);*/
    let tempId = $("#exampleInputCusId").val();

    let ok = confirm("Do you want update.!");

    if (ok) {
        for (let i = 0; i < customerDB.length; i++) {
            if (customerDB[i].id == tempId) {
                customerDB[i].name = $("#exampleInputName").val();
                customerDB[i].address = $("#exampleInputAddress").val();
                customerDB[i].contact = $("#exampleInputContact").val();
                customerDB[i].salary = $("#exampleInputSalary").val();
                search();
                clearAllText();
                return;
            }
        }
        alert("wrong customer Id.");
        clearAllText();
    }
});

// get data from table
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

// delete customer
$("#delete").click(function () {
    let id1 = $("#exampleInputCusId").val();

    let ok = confirm("Do you want to delete.!");
    if (ok){
        for (let i = 0; i < customerDB.length; i++) {
            if (customerDB[i].id == id1) {
                customerDB.splice(i, 1);
                search();
                clearAllText();
                return;
            }
        }
        alert("Wrong Customer Id.");
        clearAllText();
    }
});

function clearAllText(){
    $("#exampleInputCusId,#exampleInputName,#exampleInputAddress,#exampleInputContact,#exampleInputSalary").val("");
    $("#exampleInputCusId").focus();
}
