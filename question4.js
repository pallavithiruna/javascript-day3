
// Task 1: Simple programs to do for variables
//1. Declare 4 var without assigning values and print them in console
let a,b,c,d;
console.log(a,b,c,d);
//2.How to get value of the variable myvar as output
var myvar = 1;
console.log(myvar);
//3. Declare variables to store your first name, last name, marital status, country and age in multiple lines
let FirstName = "Swathimeenal";
let LastName = "Alaguraj";
let Martialstatus = "Married";
let age=29;
let Country="India";
//4. Declare variables to store your first name, last name, marital status, country and age in single line
let firstName = "Swathimeenal", lastName = "Alaguraj", MartialStatus = "Married", Age=29,country="India";
//5. Declare variables and assign string, boolean, undefined and null data types
let length = 16; //Numbers
let color ="red"; //string
let x = true; // boolean
let y; // undefined
let z = null ; //null
//6.convert the string to integer
//using parseInt()
   //syntax:
      //parseInt(Value, radix)
        let v1 = parseInt("3.14");
//using Number()
   //syntax:
      //Number(object)
      function func() { 
       let a = true; 
       let value = Number(a); 
       console.log(value); 
   } 
   func();
//Using Plus sign
   //syntax:
     //+Operand
      let r = "6";
      let s = +r;
      console.log(s);
      console.log(typeof s);
//7. Write 6 statement which provide truthy & falsey values.      
   // Falsey values : false, null,NaN, undefined,0,empty string"
   // truthy values: true, 1, a non empty string "john"
//Task 2: simple Programs to do for Operators
// 1. Square of a number
  console.log(Math.sqrt(144));
//2.swapping 2 numbers  
let f=2;
let g=4;
console.log("before swapping:","f:",f,"g:",g);
let temp;
temp = f;
f = g;
g = temp;
console.log("after swapping:","f:",f,"g:",g);
// 3.addition of  3 numbers:
let t = s + f + g ;
console.log(t);
//4.Celsius to Fahrenheit conversion
var celsius = 12;
var Fahrenheit = (celsius*(9/5))+32;
var far = Fahrenheit.toFixed(2);
console.log(far);
//5.Meter to miles
let distanceinMeter = 54300;
let distanceinMiles = distanceinMeter/1609;
console.log("meter:",distanceinMeter,"Mile:",distanceinMiles)
//6.Pounds to kg
let pounds = 5;
let kg = pounds * 0.45359237 ;
console.log(pounds,"pounds is equal to",kg,"kg");
//7.calculate batting average
function averageRuns(runs, matches, notout) 
{ 
   let out1;
   out1 = matches - notout; 
   if (out1 == 0) 
       return -1; 
   let avg = parseInt((runs) / out1, 10); 
   return avg; 
} 
//driver code   
let runs = 10000; 
let matches = 250; 
let notout = 50; 
let avg = averageRuns(runs, matches, notout); 

if (avg == -1) 
   console.log("NA"); 
else
   console.log(avg);
// 8.Calculate five test scores and print their average
function average(testScore, n)
     {
       var sum = 0;
       for (var i = 0; i < n; i++) 
       {
           sum += testScore[i];
       }
       let result = sum/n;
       return (result);
     }

     // Driver code
     var testScore = [189,65,78,95,43];
     var n = testScore.length;
     console.log(average(testScore, n));
//9.Power of any number x ^ y.
      console.log(Math.pow(3,4));
//10.Calculate Simple Interest
// formula:(S.I. = P*T*R/100)
let P =2000,T=4,R=3;
var SI= (P*T*R)/100;
console.log(SI);
//11.Calculate area of an equilateral triangle
var h = 20;
var area=(Math.sqrt(3)/4*Math.pow(h,2));
console.log(area.toFixed(2))
//12.Area Of Isosceles Triangle
var base=12;
var height=15;
let areaIsoscelesTriangle= ((1/2)*base*height);
console.log("areaIsoscelesTriangle is:",areaIsoscelesTriangle)
//13.Volume of Sphere
     let radius = 9;
     let VolumeOfSphere = ((4/3)*(3.14)*(Math.pow(radius,3)));
     console.log("VolumeOfSphere for raidus of 9 is:",VolumeOfSphere);
//14.volume of prism
   let VolumeOfPrism = base * height;
   console.log("VolumeOfPrism for base: 12 and height: 15 is:",VolumeOfPrism );
//15. Area of triangle
let AreaOfTriangle= ((1/2)*base*height);
console.log("AreaOfTriangle is:",AreaOfTriangle);
//16.Give the Actual cost and Sold cost, Calculate Discount Of Product
function discountPercentage( SC,  AC)
{
   // Calculating discount
   let discount = SC - AC;
// Calculating discount percentage
   let disPercent = (discount / SC) * 100;
   return disPercent;
}  
// Driver code
let SC = 120, AC = 100;
console.log(discountPercentage(SC,AC),"%");
//17.Given their radius of a circle and find its diameter, circumference and area.
let diameter = radius*2;
let circumference = 2*(3.14)*radius;
let areaofCircle = (3.14)* radius*radius;
console.log("diameter, circumference and area of circle whose radius is 9 is:",diameter,circumference,areaofCircle );
//18.Given two numbers and perform all arithmetic operations.
let ab = 55;
let cd = 66;
var add =  ab + cd;
var sub =  ab - cd;
var mul = ab * cd;
var div = ab / cd;
var expo = ab ** cd;
//19.Display the asterisk pattern as shown below(No loop needed):
console.log("*****");
console.log("*****");
console.log("*****");
console.log("*****");
console.log("*****");
//20.Calculate electricity bill?For example, a consumer consumes 100 watts per hour daily for one month. Calculate the total energy bill of that consumer if per unit rate is 10?
let unit = 72;
let EBbill = unit * 10;

console.log("EB bill for 72 unit is: rs.",EBbill);
//21.program to calculate CGPA
let TotalGp = 43;
let TotalSub= 5;
let CGPA= TotalGp / TotalSub;

//Task 3: Simple Programs todo for Condition , Looping and Arrays
  //1.Write a loop that makes seven calls to console.log to output the following triangle:

   function printn(num)
    {
       if( num == 0)
           return;
       console.log("* ");
       return(num - 1);
   }
   function pattern(n , i) 
   {
       if (n == 0)
           return;
       return(i);
       console.log("<br/>");
       pattern(n - 1, i + 1);
   }
       var n = 7;
       pattern(n, 1);
   //Iterate through the string array and print it contents
   var strArray= ["<option>Jazz</option>",
     ,"<option>Blues</option>",
     ,"<option>New Age</option>",
     ,"<option>Classical</option>",
     ,"<option>Opera</option>"]
     for(var i =0;i<=strArray.length;i++)
     {
       console.log(strArray[i]);
     }

   //2.write a code to count the elements in the array . Don’t use length property
   var myarray=[11,22,33,44,55]
   for(var i=0;i<=myarray.length;i++)
   {
       count=0;
       if(myarray[i]!=null)
       {
           count = count+1;
       }
       console.log(count);
   }
   
//Create an array called foods holds the names of your top 20 favorite foods, starting with the best food.
let foods=["idly","dosa","vada","pongal","pizza","burger","puri","chappathi","rice","upma","icecream","biriyani","pulav","sambar","rasam","curd","kesari","laddu","jangiri","noodles"];
console.log(foods[5]);
console.log(foods.length)
//Starting from the existing friends variable below, change the element that is currently “Mari” to “Munnabai”.
let friends = [ "Mari","MaryJane","CaptianAmerica","Munnabai", "Jeff","AAK chandran"];
friends.splice(0,1,"Munnabai");
console.log(friends);
//Starting from the existing friends variable below, Loop and Print the names till you meet CaptianAmerica.
//function dataHandling(input){
  // for (var i = 0; i <=2; i++)
  // {
 //     console.log(friends[i]);
 //  }
  // }
//dataHandling(friends);
//Find the person is ur friend or not.
function dataHandling1(input, name){
   for (var i = 0; i < input.length; i++)
   {
      
   }
   }
   let found = dataHandling1(friends,"Jeff");
   
   console.log(found);
// We have two lists of friends below. Use array methods to combine them into one alphabetically-sorted list.
var friends1 = ["Mari","MaryJane","CaptainAmerica","Munnabai","Jeff","AAK chandran"];
var friends2 = ["Gabbar","rajinikanth","Mass","Spiderman","Jeff","ET"];
//1.Get the first item, the middle item and the last item of the array
let firstItem = friends[0];
let middleItem = friends[Math.floor(friends.length/2)];
let lastItem = friends[friends.length - 1]
console.log("firstItem=",firstItem);
console.log("middleItem=",middleItem);
console.log("lastItem=",lastItem);
//2.Add your name to the end of the friends array, and add another name to beginning.
// to add element in beggining of the array we will use Unshift() and to add element in the end we will use push()
console.log(friends1);
friends1.unshift("Naga");
console.log("ADDED FRIEND NAME IN BEGINNING OF THE ARRAY:");
console.log(friends1);
friends1.push("Swathi");
console.log("ADDED FRIEND NAME IN THE END OF THE ARRAY");
console.log(friends1);
//3. Add Mr or Ms to the names in the friends array.
console.log(friends2);
let frd= friends2.map((element)=>("Mr."+element));
console.log(frd);
//4.Concat all the names the friends array and return as comma “,” seperated string.
console.log(frd.join(","));