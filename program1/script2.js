console.log("hello world");
document.write("hello world");
//hi sinle line comment
/* hi multi line comment
type of error are- tyepographical error, logical error, runtime error
local -letand const , global - var
hi*/
var num=10;
console.log(num);
console.log(typeof(num));
num =false;
console.log(num);
console.log(typeof(num));
num=null;
console.log(num);
console.log(typeof(num));
num=undefined;
console.log(num);
console.log(typeof(num));
num="ashish";
console.log(num);
console.log(typeof(num));

//function in a variable
var sayhello= function(){
    alert("hello world");
}
//array
var arr=[1,2,3,4,5];
var animals = new Array("dog","cat","tiger");
//object 
var person ={
    name:"ashish",
    age:'21',
    city:"delhi"
}
//symbol
var sym1 = Symbol("hello");
var sym2 = Symbol("hello");
console.log(sym1==sym2); //false

var a=100; var b =13; var c=10; var linebbreak ="<br>";
document.write("a+b+c=");
result=a+b+c;
document.write(result);
document.write(linebbreak);
