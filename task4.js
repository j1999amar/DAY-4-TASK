// Task 1: Simple Programs todo for variables
// 1. Declare four variables without assigning values and print them in console
// var a,b,c,d;
// console.log(a,b,c,d)

// 2.How to get value of the variable myvar as output
// var myvar= 1;
// console.log("myvar")

// 3. Declare variables to store your first name, last name, marital status, country and age in multiple lines
// var firstname="AMARNATH";
// var lastname="JEGANATHAN";
// var martial_status="Single";
// var Country="India";
// var age=22;
//  console.log(firstname,lastname,martial_status,Country,age)

// 4. Declare variables to store your first name, last name, marital status, country and age in a single line
//  var firstname="AMARNATH", lastname="JEGANATHAN", martial_status="Single", Country="India" ,age=22;
//  console.log(firstname,lastname,martial_status,Country,age)

// 5. Declare variables and assign string, boolean, undefined and null data types
// var string="AMARNATH";
// var boolean=true;
// var a;
// var b=null;

//6. Convert the string to integer
// parseInt()
// Number()
// Plus sign(+)

// var a='5';
// var b='5'
// var c=parseInt(a)
// var d=parseInt(b)
// // console.log(c+d)
// // console.log(Number(a))
// console.log(+a)

// 7.Write 6 statement which provide truthy & falsey values.
// The following values are always falsy:

// false
// 0 (zero)
// -0 (minus zero)
// 0n (BigInt zero)
// '', "", `` (empty string)
// null
// undefined
// NaN
// Everything else is truthy. That includes:
// '0' (a string containing a single zero)
// 'false' (a string containing the text “false”)
// [] (an empty array)
// {} (an empty object)
// function(){} (an “empty” function)


// Task 2: Simple Programs todo for Operators

// 1.Square of a number
// var a=2;
// function sq_no(a){

//     var sq=a*a
//     console.log(sq)
// }
// sq_no(a);

// 2.Swapping 2 numbers
// var a,b,temp;
// a=10;
// b=20;
// temp=a;
// a=b;
// b=temp;
// console.log(a,b)

// 3.Addition of 3 numbers
// var a,b,c,sum;
// a=10;
// b=20;
// c=30;
// sum=a+b+c;
// console.log(sum)

// 4.Celsius to Fahrenheit conversion
//  var Celsius=30;
//  var Fahrenheit=(Celsius*1.8)+32;
//  console.log(Fahrenheit)

// 5.Meter to miles
// var Meter=5;
// var miles=Meter*0.000621371;
// console.log(miles.toFixed(5));

// 6.Pounds to kg
// var Pounds=100;
// var kg=Pounds*0.453592;
// console.log(kg)

// 7.Calculate Batting Average
// var scored_run=89;
// var times_out=4;
// var avg=scored_run/times_out;
// console.log(avg);

// 8.Calculate five test scores and print their average
// var test1=50;
// var test2=55;
// var test3=36;
// var test4=85;
// var test5=75;
// var avg=test1+test2+test3+test4+test5;
// console.log(avg)

// 9.Power of any number x ^ y.
// var x=5;
// var y=6;
// var result=Math.pow(x,y)
// console.log(result)

// 10.Calculate Simple Interest
// var amount=50000;
// var time=12;
// var interest=2.5;
// var calc=(amount*time*interest)/100;
// console.log(calc)

// 11.Calculate area of an equilateral triangle
// var side1 = 5; 
// var side2 = 6; 
// var side3 = 7; 
// var s = (side1 + side2 + side3)/2;
// var area =  Math.sqrt(s*((s-side1)*(s-side2)*(s-side3)));
// console.log(area);

// 12.Area Of Isosceles Triangle
// var base=4;
// var height=6;
// var area=(base*height)/2;
// console.log(area)

// 13.Volume Of Sphere
// var radius=5;
// var volume=(4/3)*Math.PI*Math.pow(radius,3);
// console.log(volume)

// 14.Volume Of Prism
// var l=18;
// var b=15;
// var h=8;
// var Volume = ( l * b * h ) / 2;
// console.log(Volume)

// 15.Find area of a triangle
// var base=10;
// var height=5;
// var area=1/2*base*height;
// console.log(area);

// 16.Give the Actual cost and Sold cost, Calculate Discount Of Product
// var Actual_cost=10000;
// var Sold_cost=8000;
// var Discount=((Actual_cost-Sold_cost)/Actual_cost)*100;
// console.log(Discount)

// 17.Given their radius of a circle and find its diameter, circumference and area.
// var Circle = (function() {  
//     function Circle(Radius) {  
//      this.Radius = Radius;  
//     }  
//     Circle.prototype.AreaOfCircle = function() {  
//      return 3.14 * this.Radius * this.Radius;  
//     };  
//     Circle.prototype.CircumferenceOfCircle = function() {  
//      return 2 * 3.14 * this.Radius;  
//     };  
//     return Circle;  
//    })();  
//    var circle = new Circle(5);  
//    var area = circle.AreaOfCircle();  
//    var circumference = circle.CircumferenceOfCircle();  
//    console.log("The Area of the Circle is :" + area);  
//    console.log("The circumference of the Circle is :" + circumference); 

// 18.Given two numbers and perform all arithmetic operations.
// var p, q;
// var sum, sub, mul, div, mod;
// p = 8;
// q = 6;
// sum = p + q;
// sub = p - q;
// mul = p * q;
// div = p / q;
// mod = p % q;
// console.log(sum)
// console.log(sub)
// console.log(mul)
// console.log(div)
// console.log(mod)

// 19.Display the asterisk pattern as shown below(No loop needed):
// *****
// *****
// *****
// *****
// *****

// Calculate electricity bill?
// For example, a consumer consumes 100 watts per hour daily for one month. Calculate the total energy bill of that consumer if per unit rate is 10?

// function calculateBill(units)
// {
//     if (units <= 100)
//     {
//         return units * 10;
//     }
//     else if (units <= 200)
//     {
//         return (100 * 10)
//             + (units - 100)
//                   * 15;
//     }
//     else if (units <= 300)
//     {
//         return (100 * 10)
//             + (100 * 15)
//             + (units - 200)
//                   * 20;
//     }
//     else if (units > 300)
//     {
//         return (100 * 10)
//             + (100 * 15)
//             + (100 * 20)
//             + (units - 300)
//                   * 25;
//     }
//     return 0;
// }   
// var units = 10;
// console.log(calculateBill(units));

// 21.Program To Calculate CGPA
// var English = 9.1;  
// var Hindi = 8.5;  
// var Maths = 9.5;  
// var Science =9.6;  
// var SocialStudy = 8.6;  
// var CGPA = (9.1+8.5+9.5+9.6+8.6)/(5.0);  
// var CGPAper = (9.5 * (CGPA)); 
// console.log(CGPA

// Task 3: Simple Programs todo for Condition , Looping and Arrays

// 1.Write a loop that makes seven calls to console.log to output the following triangle:
// var content = '';
// for (var i = 0; i < 7; i++) {
//     content = content + '#';
//     console.log(content);
// }

// 2. Iterate through the string array and print it contents

// var myStringArray = ["Jazz","Blues","New Age","Classical","Opera"];
// var arrayLength = myStringArray.length;
// for (var i = 0; i < arrayLength; i++) {
//     console.log(myStringArray[i]);
// }

// ---------------------------------
// var myarray=[11,22,33,44,55]
// write a code to count the elements in the array . Don’t use length property
// var sum=0;
// var myarray=[11,22,33,44,55]
// for(var i in myarray){
//     sum=sum+1;
// }
// console.log(sum)

// ---------------------------------

// Declare an empty array;
// Create an array called foods holds the names of your top 20 favorite foods, starting with the best food.

// let foods=["Sambar","Puliyodarai","Rasam","vadai","curd","lemonrice","coconutrice","dosa","idly","briyani","chicken","mutton","fish","crab","prawn","pongal","puttu","pizza","burger","fries"]
// ---------------------------------

// Foods variable holds the names of your top 20 favorite foods, starting with the best food. How can you find your fifth favorite food?

//  let foods=["Sambar","Puliyodarai","Rasam","vadai","curd","lemonrice","coconutrice","dosa","idly","briyani","chicken","mutton","fish","crab","prawn","pongal","puttu","pizza","burger","fries"]
//  console.log(foods[14])
// ---------------------------------

// Find the length of your foods array
// let foods=["Sambar","Puliyodarai","Rasam","vadai","curd","lemonrice","coconutrice","dosa","idly","briyani","chicken","mutton","fish","crab","prawn","pongal","puttu","pizza","burger","fries"]
//   console.log(foods.length)
// ---------------------------------

// Starting from the existing friends variable below, change the element that is currently “Mari” to “Munnabai”.

// let friends = [
//     “Mari”,
//     “MaryJane”,
//     “CaptianAmerica”,
//     “Munnabai”,
//     “Jeff”,
//     “AAK chandran”
//     ];
    
//     function dataHandling(input){
//     for (var i = 0; i < input.length; i++) {
    
//     }
//     }
    
//     dataHandling(friends);

// ---------------------------------

