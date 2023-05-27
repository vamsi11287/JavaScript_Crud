// let a=10;
// for(let i=1;i<a;i++){
//     document.write(i,'<br>')
// }

// change datatypes
// const a='10'
// document.write(typeof a)
// const b = Number(a)
// document.write(typeof b)


// number to strings,string to number
// const a=12;
// const b='11';
// document.write(a-b)
// document.write(a+b)
// document.write(a+a+b)

// == and ===
// let a=19;
// if(a==='18'){
//     document.write(true)
// }
// else if(a==19){
//     document.write("true")
// }
// else{
//     document.write(false)
// }


// to check eligible for vote
// const a = prompt("enter a number")
// if(a>18){
//     alert("eligible for vote")
// }
// else{
//     alert('minor')
// }


// and , or , not operators
// let a = false;
// let b = true;
// document.write(a&&b)
// document.write(a || b)
// document.write(!a)

// ternary operator
// var bill = 275;
// let total= bill>=50 && bill<=300 ?  (bill*15)/100+bill :  (bill*20)/100 +bill
// document.write(total)

// if else
// const bill = 275
// if(bill>=50 && bill<=300){
//     let tip = (bill*15)/100;
//     document.write("tip is :",tip,"<br>"
//     ,"bill amount is",bill
//     ,"<br>","total amount is :",bill+tip)
// }
// else{
//     let tip = (bill*20)/100;
//         document.write("tip is :",tip,"<br>"
//         ,"bill amount is",bill
//         ,"<br>","total amount is :",bill+tip)
// }

// loops
// for(let i=0;i<10;i++){
//     document.write(i)
// }

// functions return function
// 1.funtion decleration
// function add(a,b){
//     document.write("addition is :",a+b,"<br>")
//     let c = a*b;
//     return `the multiplication is : ${c}`;
// }
// const adding = add(2,3)
// document.write(adding)

// 2.function expression
// const add = function (a,b){
//     document.write("this is the adding : ",a+b)
//     return ` multiplication is :${a*b}`
// }
// document.write(add(2,4))

// 3.ArrowFunction
// const add =(a,b)=>{
//     document.write("this is the adding : ",a+b)
//     return ` multiplication is :${a*b}`
// }
// document.write(add(2,3))


// nested function
// const cutting = function (fruit){
//     return fruit*2;
// }
// const items = function(apple,banana){
//     const bananacuts = cutting(banana)
//     const applecuts = cutting(apple)
//     const fruits = `There are ${apple} apples and ${banana} bananas`
//     const slices =  `There are ${applecuts}  slices of apple and ${bananacuts} slices of bananas`
//     document.write(fruits,"<br>")
//     return slices
// }
// document.write(items(4,5))


// let age=1;
// console.log(age<=0?"your already retaired":"Yes u r ready to reatirment")


// all in one function like function decleration ,function expression ,arrow function
// const calAvg = (a,b,c) => a+b+c/3
// const colateam = calAvg(44,23,71)
// const Dolphin = calAvg(65,54,49)
// document.write(colateam,Dolphin)
// function winnerteam (colateam,Dolphin){
//     if(colateam>Dolphin){
//         document.write("colateam  win")
//     }
//     else{
//         document.write("Dolphine  win")
//     }
// }
// winnerteam()

// Arrays in javascript

// const a = new Array(1,2,3,4)
// a.shift('hello')
// document.write(a)