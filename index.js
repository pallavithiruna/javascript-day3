//1.How to compare two JSON have the same properties without order?
//  a. var obj1={name:"Person 1",age:5};
//  b. var obj2={age:5,name:"Person 1"};


var obj1={name:"Person 1",age:5};
var obj2={age:5,name:"Person 1"};
console.log(JSON.stringify(obj1)===JSON.stringify(obj2));



//2.print all country flags
//3.Print all country name, region, subregion and populations.


var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function(){
    var res=JSON.parse(request.response);
    for(var i=0;i<res.length;i++){
    // console.log((res[i].flags["png"]));    
    console.log("CountryName:"+(res[i].name["common"])+" , "+"Region:"+(res[i].region)+" , "+"SubRegion:"+(res[i].subregion)+" , "+"Populations:"+(res[i].population)+" , "+"Flags:"+(res[i].flags["png"]));
    }
};
