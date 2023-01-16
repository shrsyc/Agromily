
// var val1 = document.getElementById("fname");
// var val2 = document.getElementById("lanme");
// var val3 = document.getElementById("dob");
// var val4 = document.getElementById("phonenumber");
// var val5 = document.getElementById("housenumber");
// var val6 = document.getElementById("streetnumber");
// var val7 = document.getElementById("city");
// var val8 = document.getElementById("taluka");
// var val9 = document.getElementById("district");
// var val10 = document.getElementById("state");
// var val11 = document.getElementById("land_district");
// var val12 = document.getElementById("land_taluka");
// var val13 = document.getElementById("land_village");
// var val14 = document.getElementById("land_surveynumber");
// var val15 = document.getElementById("land_hisa");

document.getElementById("fname").onchange = check1;
document.getElementById("lname").onchange = check2;
// document.getElementById("dob").onchange=check3;
document.getElementById("phonenumber").onchange = check4;
document.getElementById("housenumber").onchange = check5;
document.getElementById("streetname").onchange = check6;
document.getElementById("city").onchange = check7;
document.getElementById("taluka").onchange = check8;
document.getElementById("district").onchange = check9;
document.getElementById("state").onchange = check10;
document.getElementById("land_district").onchange = check11;
document.getElementById("land_taluka").onchange = check12;
document.getElementById("land_village").onchange = check13;
document.getElementById("land_surveynumber").onchange = check14;
document.getElementById("land_hisa").onchange = check15;



function submitbtn() {
    setTimeout("location.href='http://127.0.0.1:5501/index.html';", 10000);
}


function clr(clear_input) {
    document.getElementById(clear_input).value = "";
}




function check1() {
    var val1 = document.getElementById("fname");
    var pos1 = val1.value.search(/^[a-zA-Z]+[a-zA-Z]+$/);

    if (pos1 != 0) {
        alert("invalid pattern enter only alphabets");
        // document.getElementById("fname").value="";
        clr("fname");
        return false;
    }
    else {
        return true;
    }
}

function check2() {
    var val2 = document.getElementById("lname");
    var pos2 = val2.value.search(/^[a-zA-Z]+[a-zA-Z]+$/);

    if (pos2 != 0) {
        alert("invalid pattern enter only alphabets");
        clr("lname");
        return false;
    }
    else {
        return true;
    }
}

function check4() {
    var val4 = document.getElementById("phonenumber");
    var pos4 = val4.value.search(/\d{10}$/);

    if (pos4 != 0) {
        alert("invalid pattern");
        clr("phonenumber");
        return false;
    }
    else {
        return true;
    }
}

function check5() {
    var val5 = document.getElementById("housenumber");
    var pos5 = val5.value.search(/\d?\d?\d?\/\d?\d?\d?$/);

    if (pos5 != 0) {
        alert("invalid pattern");
        clr("housenumber");
        return false;
    }
    else {
        return true;
    }
}

function check6() {
    var val6 = document.getElementById("streetname");
    var pos6 = val6.value.search(/^[a-zA-Z]+[a-zA-Z]+$/);

    if (pos6 != 0) {
        alert("invalid pattern enter only alphabets");
        clr("streetname");
        return false;
    }
    else {
        return true;
    }
}

function check7() {
    var val7 = document.getElementById("city");
    var pos7 = val7.value.search(/^[a-zA-Z]+[a-zA-Z]+$/);

    if (pos7 != 0) {
        alert("invalid pattern enter only alphabets");
        clr("city");
        return false;
    }
    else {
        return true;
    }
}

function check8() {
    var val8 = document.getElementById("taluka");
    var pos8 = val8.value.search(/^[a-zA-Z]+[a-zA-Z]+$/);

    if (pos8 != 0) {
        alert("invalid pattern enter only alphabets");
        clr("taluka");
        return false;
    }
    else {
        return true;
    }
}

function check9() {
    var val9 = document.getElementById("district");
    var pos9 = val9.value.search(/^[a-zA-Z]+[a-zA-Z]+$/);

    if (pos9 != 0) {
        alert("invalid pattern enter only alphabets");
        clr("district");
        return false;
    }
    else {
        return true;
    }
}

clr("fname");
function check10() {
    var val10 = document.getElementById("state");
    var pos10 = val10.value.search(/^[a-zA-Z]+[a-zA-Z]+$/);

    if (pos10 != 0) {
        alert("invalid pattern enter only alphabets");
        clr("state");
        return false;
    }
    else {
        return true;
    }
}

function check11() {
    var val11 = document.getElementById("land_district");
    var pos11 = val11.value.search(/^[a-zA-Z]+[a-zA-Z]+$/);

    if (pos11 != 0) {
        alert("invalid pattern enter only alphabets");
        clr("land_district");
        return false;
    }
    else {
        return true;
    }
}

function check12() {
    var val12 = document.getElementById("land_taluka");
    var pos12 = val12.value.search(/^[a-zA-Z]+[a-zA-Z]+$/);

    if (pos12 != 0) {
        alert("invalid pattern enter only alphabets");
        clr("land_taluka");
        return false;
    }
    else {
        return true;
    }
}

function check13() {
    var val13 = document.getElementById("land_village");
    var pos13 = val13.value.search(/^[a-zA-Z]+[a-zA-Z]+$/);

    if (pos13 != 0) {
        alert("invalid pattern enter only alphabets");
        clr("land_village");
        return false;
    }
    else {
        return true;
    }
}

function check14() {
    var val14 = document.getElementById("land_surveynumber");
    var pos14 = val14.value.search(/\d?\d?\d?\d?/);

    if (pos14 != 0) {
        alert("invalid pattern enter only number");
        clr("land_surveynumber");
        return false;
    }
    else {
        return true;
    }
}

function check15() {
    var val15 = document.getElementById("land_hisa");
    var pos15 = val15.value.search(/\d{10}$/);

    if (pos15 != 0) {
        alert("invalid pattern enter number only");
        clr("land_hisa");
        return false;
    }
    else {
        return true;
    }
}


