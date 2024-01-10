//number 1

function averagenums(x){
    var total = 0 ;
    for(i=0 ; i < x.length ; i++){
        
        total = total + x[i] ;
         document.getElementById("average").innerHTML =    "the average of numbers is " + "  "+  total /x.length ;
    }
}

var numbers =[1 , 2 , 3 , 4 , 5 , 6 ,7 ,8 , 9 ,10];
averagenums(numbers)

// number 2

function triangleArea(base , height){
    return (base* height) / 2 ;
}

document.getElementById("triangle_area").innerHTML = "area of triangle with base 12 and height 40 is " + triangleArea(12 , 40)

//number 3 

function age (x){
    console.log(x * 365 )
}
age(30) ;

//number 4
function summition(num1 , num2){
    return num1 + num2 ;
}

document.getElementById("sumOfTwoNumbers").innerHTML = "summition of 50 and 99 is " + summition (50 , 99)

//number 5 

function shwoName(y){
    document.getElementById("shwoFirstName").innerHTML = y[0];
}
var names =["haidy" , "nada" , "mona" , "sarah"]
shwoName(names) ;

//number 6

function shwo (n){
    document.getElementById("shwoFullName").innerHTML = n
}

var nam="haidy ahmed faied" ;
shwo(nam);

//number 7 

function convertTime(clock){
    return clock *60 *60 ;
}

document.getElementById("convertHoursToSeconds").innerHTML = "two hours by seconds is " + convertTime(2) ;


//number 8

function addcondition(x){
    var total =0 ;
    for (i = 0 ; i< x.length ; i++){
        total = total + x[i] ;
        if(total > 350){
            document.getElementById("check350").innerHTML = true

        }else{
            document.getElementById("check350").innerHTML = false

        }
    }

}


var nums=[30 , 60 , 70 , 100] ;
addcondition(nums);

//number 9

function checkZero(m){
    if(m==0){
        return true
    }else{
        return false
    }
}

document.getElementById("isEqualToZero").innerHTML=checkZero(0)

//number 10
var baky =0 ;
 function bakykesma( x , y){
    
    baky = x% y ;
    return baky ;
 }

  document.getElementById("bakyKesma").innerHTML = bakykesma(10 , 5)

  //number 11

  function compare (num1 , num2){
    if(num1 > num2){
        document.getElementById("isItAnumber").innerHTML = " number 1 is bigger than number two" +num1
    }else if ( num1 < num2){
        document.getElementById("isItAnumber").innerHTML ="number 2 is bigger than number 1" + num2
    }else{
        document.getElementById("isItAnumber").innerHTML ="numbers are equal"
    }

   
  }

  compare(2 , 2)

  //number 12

  function check(x){
    if (typeof x == 'number'){
        document.getElementById("number").innerHTML=true
    }else{
        document.getElementById("number").innerHTML=false
    }
  }

  check(9)

  //number 13

  function currentDate(){
    return Date().toString();

  }

  document.getElementById("getCurrentDate").innerHTML = currentDate();