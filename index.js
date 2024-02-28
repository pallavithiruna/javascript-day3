

//Question 1: How to Compare two JSON have the same properties without order
const obj1 = { 
    name: 'Person 1', 
    age: 5 
}; 

const obj2 = { 
    age : 5,
    name: 'Person 1'
}; 

const haveSameData = function (obj1, obj2) { 
    const obj1Length = Object.keys(obj1).length; 
    const obj2Length = Object.keys(obj2).length; 

    if (obj1Length === obj2Length) { 
        return Object.keys(obj1).every( 
            key => obj2.hasOwnProperty(key) 
                && obj2[key] === obj1[key]); 
    } 
    return false; 
} 
console.log(haveSameData(obj1, obj2));


//2.print all country flags
//3.Print all country name, region, subregion and populations.


var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function(){
    var res=JSON.parse(request.response);
    for(var i=0;i<res.length;i++){
     console.log("Flag:"+(res[i].flags["png"]));    
    console.log("CountryName:"+(res[i].name["common"])+" , "+"Region:"+(res[i].region)+" , "+"SubRegion:"+(res[i].subregion)+" , "+"Populations:"+(res[i].population));
    }
};








