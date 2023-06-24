$("#exampleInputCusId,#exampleInputName,#exampleInputAddress,#exampleInputContact,#exampleInputSalary").keydown(function (e) {
    if (e.key == "Tab") {
        e.preventDefault();
    }
});

$("#exampleInputCusId").keydown(function (e) {
    let code = $("#exampleInputCusId").val();
    let checkCode = /^(C00-)[0-9]{3}$/;
    let ok = checkCode.test(code);

    if (e.key == "Enter") {
        if (ok) {
            $("#exampleInputName").focus();
            $("#exampleInputCusId").css("border-color", "black");
            $("#search").prop("disabled", false);
            $("#update").prop("disabled", false);
            $("#delete").prop("disabled", false);
        } else {
            $("#exampleInputCusId").css("border-color", "red");
            $("#search").prop("disabled", true);
            $("#update").prop("disabled", true);
            $("#delete").prop("disabled", true);
        }
    }
});

$("#exampleInputName").keydown(function (e) {
    let name = $("#exampleInputName").val();
    let checkName = /^[A-Za-z ]{5,}$/;
    let ok = checkName.test(name);

    if (e.key == "Enter") {
        if (ok) {
            $("#exampleInputAddress").focus();
            $("#exampleInputName").css("border-color", "black");
            $("#search").prop("disabled", false);
            $("#update").prop("disabled", false);
            $("#delete").prop("disabled", false);
        } else {
            $("#exampleInputName").css("border-color", "red");
            $("#search").prop("disabled", true);
            $("#update").prop("disabled", true);
            $("#delete").prop("disabled", true);
        }
    }
});

$("#exampleInputAddress").keydown(function (e) {
    let name = $("#exampleInputAddress").val();
    let checkAddress = /^[A-Za-z0-9 ]{8,}$/;
    let ok = checkAddress.test(name);

    if (e.key == "Enter") {
        if (ok) {
            $("#exampleInputContact").focus();
            $("#exampleInputAddress").css("border-color", "black");
            $("#search").prop("disabled", false);
            $("#update").prop("disabled", false);
            $("#delete").prop("disabled", false);
        } else {
            $("#exampleInputAddress").css("border-color", "red");
            $("#search").prop("disabled", true);
            $("#update").prop("disabled", true);
            $("#delete").prop("disabled", true);
        }
    }
});

$("#exampleInputContact").keydown(function (e) {
    let name = $("#exampleInputContact").val();
    let checkAddress = /^[0-9 ]{10}$/;
    let ok = checkAddress.test(name);

    if (e.key == "Enter") {
        if (ok) {
            $("#exampleInputSalary").focus();
            $("#exampleInputContact").css("border-color", "black");
            $("#search").prop("disabled", false);
            $("#update").prop("disabled", false);
            $("#delete").prop("disabled", false);
        } else {
            $("#exampleInputContact").css("border-color", "red");
            $("#search").prop("disabled", true);
            $("#update").prop("disabled", true);
            $("#delete").prop("disabled", true);
        }
    }
});

$("#exampleInputSalary").keydown(function (e) {
    let name = $("#exampleInputSalary").val();
    let checkSalary = /^[0-9]{2,}([.][0-9]{2})?$/;
    let ok = checkSalary.test(name);

    if (e.key == "Enter") {
        if (ok) {
            $("#exampleInputSalary").css("border-color", "black");
            $("#search").prop("disabled", false);
            $("#update").prop("disabled", false);
            $("#delete").prop("disabled", false);
        } else {
            $("#exampleInputSalary").css("border-color", "red");
            $("#search").prop("disabled", true);
            $("#update").prop("disabled", true);
            $("#delete").prop("disabled", true);
        }
    }
});