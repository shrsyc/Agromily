document.getElementById("name").onchange = check1;
document.getElementById("lastname").onchange = check2;
document.getElementById("phonenumber").onchange= check3;
document.getElementById("aadharcard").onchange = check4;
document.getElementById("addresses").onchange = check5;
document.getElementById("help").onchange = check6;

function clr(clear_input) {
    document.getElementById(clear_input).value = "";
}


function check1() {
    var val1 = document.getElementById("name");
    var pos1 = val1.value.search(/^[a-zA-Z]+[a-zA-Z]+$/);

    if (pos1 != 0) {
        alert("invalid pattern enter only alphabets");
        // document.getElementById("fname").value="";
        clr("name");
        return false;
    }
    else {
        return true;
    }
   
}

function check2() {
    var val2 = document.getElementById("lastname");
    var pos2 = val2.value.search(/^[a-zA-Z]+[a-zA-Z]+$/);

    if (pos2 != 0) {
        alert("invalid pattern enter only alphabets");
        clr("lastname");
        return false;
    }
    else {
        return true;
    }
}

function check3() {
    var val3 = document.getElementById("phonenumber");
    var pos3 = val3.value.search(/\d{10}$/);

    if (pos3 != 0) {
        alert("invalid pattern");
        clr("phonenumber");
        return false;
    }
    else {
        return true;
    }
}

function check4() {
    var val4 = document.getElementById("aadharcard");
    var pos4 = val4.value.search(/\d{12}$/);

    if (pos4 != 0) {
        alert("invalid pattern");
        clr("aadharcard");
        return false;
    }
    else {
        return true;
    }
}

function check5() {
    var val5 = document.getElementById("addresses");
    var pos5 = val5.value.search(/^[a-zA-Z]+[a-zA-Z]+$/);

    if (pos5 != 0) {
        alert("invalid pattern enter only alphabets");
        // document.getElementById("fname").value="";
        clr("addresses");
        return false;
    }
    else {
        return true;
    }
}

function check6() {
    var val6 = document.getElementById("help");
    var pos6 = val6.value.search(/^[a-zA-Z]+[a-zA-Z]+$/);

    if (pos6 != 0) {
        alert("invalid pattern enter only alphabets");
        // document.getElementById("fname").value="";
        clr("help");
        return false;
    }
    else {
        return true;
    }
}