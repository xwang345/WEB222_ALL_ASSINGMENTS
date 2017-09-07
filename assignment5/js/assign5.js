/*
Web 222 SFF
Instructor: Dr. Tanvir Alam
Student Name: Xiaochen Wang
Student ID: 015297153
Email: xwang345@myseneca.ca
Date: 2017/04/09
*/

function starShow() {
	var divArr = document.getElementsByClassName("needContent");
    console.log(divArr);
    for(var i = 0; i < divArr.length; i++) {
        var inputBox = divArr[i].getElementsByTagName("input")[0];
        var stars = divArr[i].getElementsByClassName("red-star")[0];
        if(inputBox.value != "") {
            stars.style.opacity = 0;
        } else {
            stars.style.opacity = 1;
        }
    }
}

function Error() {
    var elem = document.getElementById("Phone_Number").value;
    if(elem[3]!="-" && elem[7] != "-" ) {
        document.getElementById("showEorror").innerHTML="<span>X</span> The area code of phone number 999-999-9999 can't be all zeros.";
    }else if(elem[0] == 0 || elem[1] == 0 && elem[2] == 0){
        document.getElementById("showEorror").innerHTML="<span>X</span> The area code of phone number 999-999-9999 can't be all zeros.";
    } else {
        document.getElementById("showEorror").style.display = "none";
    }
}

function checkPassword() {
    var passWord1 = document.getElementById("Password").value;
    var passWord2 = document.getElementById("Retype_Password").value;

    if(passWord1 != "" && passWord2 != ""){
        if(passWord1 != passWord2) {
            console.log("Password Doesn't Match!!!")
            document.getElementById("Password").style.borderColor ="red";
            document.getElementById("Retype_Password").style.borderColor="red";
        }else if(passWord1 == passWord2) {
            console.log("Passwords Match!!!");
            document.getElementById("Password").style.borderColor ="green";
            document.getElementById("Retype_Password").style.borderColor="green";
        } 
    }
}
