//Web 222 SFF
//Instructor: Dr. Tanvir Alam
//Student Name: Xiaochen Wang
//Student ID:015297153
//Email: xwang345@myseneca.ca

//======================Question 1===============================
//===============================================================

var grader = function(mark) {
    mark = Number(mark);
    if(mark < 0 || mark > 100) {
    alert("shabi!");
    return
    } else if(mark>=0 && mark<=49) {
    return "F";
    } else if(mark>=50 && mark<=59) {
    return "D";
    } else if(mark>=60 && mark<=69) {
    return "C";
    } else if(mark>=70 && mark<=79) {
    return "B";
    } else if(mark>=80 && mark<=100) {
    return "A";
    }
}

//===============================================================
//===============================================================




//=========================Question 2============================
//===============================================================

function showMultiples(num, numMultiples) {
var num = Number(num);
var numMultiples = Number(numMultiples);
var resultString = "";

for(var index = 1; index <= numMultiples; index++ ) {
resultString += num + " * " + index + " = " + num*index + "\n";
}; 

resultString = "\n" + resultString;

return resultString;

}

//===============================================================
//===============================================================



//=========================Question 3============================
//===============================================================

var largerNum = function (num1,num2){
   if(parseFloat(num1,num2)){ 
      return parseFloat(num1,num2);
   }else if(num1>num2){
      return num1
   }else{
      return num2;
   }
}

//===============================================================
//===============================================================




//=========================Question 4============================
//===============================================================
function tempConvert(temperture, convert) {
temperture = Number(temperture);

    if (convert == "CF") {
    temperture = temperture * 9/5 + 32;
    } else if (convert == "FC") {
    temperture = (temperture - 32) * 5/9;
    } else {
    alert("Convert is WRONG.");
    }

    return temperture.toFixed(2);
}

//===============================================================
//===============================================================




//========================Question 5=============================
//===============================================================
var evenNumbers = function(minNumber, maxNumber){
  minNumber = Number(minNumber);
  maxNumber = Number(maxNumber);
  
  var result = [];

  for(var min = minNumber; min < maxNumber; min++ ) {
      if(min%2 == 0) {
      result.push(min);
      }
  }

  result = result.toString();
  return result;

}

//==============================================================
//==============================================================





//=========================Qusetion 6============================
//===============================================================
var passingAverage = function() {
   var num = arguments.length;
   var sum = 0;
   var result;
   for(var index = 0; index < num; index++) {
       sum += Number(arguments[index]);
   }
   result = Number(sum/num);
 
   if (result >= 50) {
    return true;
   } else {
    return false;
   }
}

//===============================================================
//===============================================================





//========================Question 7=============================
//===============================================================
function counter(){
 var a = 0;
 return function(){
  a += 1;
  return a;  
 }; 
}

var count = counter();

//===============================================================
//===============================================================



/********************************
 *          TEST DATA           *
 *  write all of your functions *
 *      ABOVE this comment      *
 *                              *
 *  NOTE: the code below simply *
 *  invokes each function to    *
 *  show the result - it does   *
 *  not state whether the       *
 *  output is correct or not    *
 ********************************/

// Function 1 (grader)   

console.log('grader(53) returns: ' + grader(53));
console.log('grader(72) returns: ' + grader(72));
console.log('grader(91) returns: ' + grader(91));

console.log("\n");

// Function 2 (showMultiples)

console.log('showMultiples(2,8) returns: ' + showMultiples(2,8));
console.log('showMultiples(3,2) returns: ' + showMultiples(3,2));
console.log('showMultiples(5,4) returns: ' + showMultiples(5,4));

console.log("\n");

// Function 3 (largerNum)
  
console.log('largerNum(2095,106) returns: ' + largerNum(2095,106));
console.log('largerNum("23",14) returns: ' + largerNum("23",14));
console.log('largerNum(108,"a") returns: ' + largerNum(108,"a"));

console.log("\n");

// Function 4 (tempConvert)

console.log('tempConvert(22,"CF") returns: ' + tempConvert(22,"CF"));
console.log('tempConvert(76,"FC") returns: ' + tempConvert(76,"FC"));
console.log('tempConvert(16,"CF") returns: ' + tempConvert(16,"CF"));

console.log("\n");

// Function 5 (evenNumbers)

console.log('evenNumbers(4,13) returns: ' + evenNumbers(4,13));
console.log('evenNumbers(3,10) returns: ' + evenNumbers(3,10));
console.log('evenNumbers(8,21) returns: ' + evenNumbers(8,21));

console.log("\n");

// Function 6 (passingAverage)

console.log('passingAverage(75,42,98) returns: ' + passingAverage(75,42,98));
console.log('passingAverage(34,93,77,89,49) returns: ' + passingAverage(34,93,77,89,49));
console.log('passingAverage(33,61) returns: ' + passingAverage(33,61));

console.log("\n");

// Functinon 7 (counter)

var count = counter();

console.log('counter() returns: ' + count);
console.log('invoking the function returns: ' + count());
console.log('invoking the function returns: ' + count());
console.log('invoking the function returns: ' + count());