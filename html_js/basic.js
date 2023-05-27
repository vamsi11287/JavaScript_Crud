// var v=5;
// for(var i=0;i<=20;i++){
//     document.write(`${v} * ${i} = ${v*i} <br> `);
// }


// var a = true + true + true * 3;
//          print(a)



// function Leap(year) {

//     if ((year % 4==0) && ( year % 100 !=0) || ( year % 400==0)) {
//         document.write(`${year} is a leap year`);
//     } else {
//         document.write(`${year} is Not a leap year`);
//     }
// }
// Leap(2400);


// const students=["sai","vamsi","sriram","sandeep","ramarao"]
// s=students.length-2;
// document.write(students[s])


// for(let i=100;i>=1;i--){
//     if (i%2==0){
//         document.write(i,"<br>");
//     }
// }


// let car=prompt('enter the car name')
// let cars= [{
//     brand:"honda",
//     name:"civic",
//     price:[100000,10000000],

// },
// {
//     brand:"hero",
//     name:"civic",
//     price:[100000,10000000],

// },
// {
//     brand:"audi",
//     name:"civic",
//     price:[100000,10000000],

// },{
//     brand:"volvo",
//     name:"civic",
//     price:[100000,10000000],

// }]
// if(cars.brand=car){
//     console.log(cars.price);
// }


// let cars= {


//     Items:[
//         {
//             brand:'volvo',
//             price:'1cr'
//     },
//     {
//         brand:'audi',
//         price:'2cr'
//    },
//    {
//     brand:'bugati',
//     price:'4cr'
//    }

// ]
// }
// for (let items of cars){
//     if(cars.brand=prompt("enter name")){
//         console.log(items[price])
//     }
//     else{
//         console.log('try again')
//     }

// }



// function myFunction_add() {
  
//     let x = parseInt(document.getElementById("numb").value);
//     let y = parseInt(document.getElementById("numb2").value);
    
//     let text;
//    {
    
//       text = x+y;
//     }
//     document.getElementById("demo").innerHTML = text;
//   }
//   function myFunction_sub() {
    
//     let x = parseInt(document.getElementById("numb").value);
//     let y = parseInt(document.getElementById("numb2").value);
    
//     let text;
//    {
    
//       text = x-y;
//     }
//     document.getElementById("demo").innerHTML = text;
//   }
//   function myFunction_mul() {
    
//     let x = parseInt(document.getElementById("numb").value);
//     let y = parseInt(document.getElementById("numb2").value);
    
//     let text;
//    {
    
//       text = x*y;
//     }
//     document.getElementById("demo").innerHTML = text;
//   }
//   function myFunction_div() {
    
//     let x = parseInt(document.getElementById("numb").value);
//     let y = parseInt(document.getElementById("numb2").value);
    
//     let text;
//    {
    
//       text = x/y;
//     }
//     document.getElementById("demo").innerHTML = text;
//   }
//   function myFunction_mod() {
    
//     let x = parseInt(document.getElementById("numb").value);
//     let y = parseInt(document.getElementById("numb2").value);
    
//     let text;
//    {
    
//       text = x%y;
//     }
//     document.getElementById("demo").innerHTML = text;
//   }
  




//function decleration
// function car(a,b){
//     console.log(a**b);
// }
// car(10,3);
// function expressin
// let car=function(a,b){
//     console.log(a**b);
   
// }
// car(2,3);
// car(2,5);


// arrow function
// let add=(a,b)=>a+b;
// console.log(add(2,4))

// let hello = (name)=> console.log(`${name} hello`)
// hello('vamsi')

// area of traingle
// let a_traingle=(b,h)=>console.log(`the area of traingle is ${h*b/2}` )
// a_traingle(2,10);

// let a_circle=(r)=>console.log(`the area of traingle is ${Math.PI*r*r}` )
// a_circle(2,10);









// let car = {
//     brand:"honda",
//     name:"civic",
//     price:[100000,500000]
// }
// console.log(car)



// }
// let b=document.getElementById('a').innerHTML=12+15;

// let main1=document.querySelectorAll('.nun');
// main1.innerHTML="box";
// console.log(main1);

// let button=document.querySelector('.he');
// let an=document.querySelector('.a')
// button.addEventListener('mouse move',()=>{
//     button.innerHTML='Iam here'
//     an.innerHTML="this is paragraph"
//     button.style.cssText="color:red"
    

// })
// button.addEventListener('toggle',()=>{
//     button.innerHTML='click'
   
// })

// let p=document.getElementsByClassName('paragraph').innerHTML="new text"
// console.log(p)

// for(let a=10;a>1;a--){
//     console.log(a);
// }

// let a=10;
// while(a>=1){
//     console.log(a);
//     a--;
// }

// let a=4;
// do{
//     console.log(a);
//     a++;
// }
// while(a<=2)


// for(let item of a){
//     console.log(item)
// }
// let array=[1,2,3,null,true,false,'hello']
// for(let a=0; a<array.length;a++){
//     console.log(array[a])
// }

// array[4]='vamsi'
// console.log(array);
// let car={
//     name:1,
//     value:10
// }
// let button=document.getElementsByClassName('button')[0]
// button.addEventListener('click',()=>{
//     button.innerHTML='iam changed'
//     button.classList.remove('button')
//     button.classList.add('name')
//     button.style.cssText="color:red;background-color:green;border:2px dashed white"
// })
// function lfc(myname) {
//     console.log(10+lfc +12);
//    }
// res=lfc(10);
// console.log(res);





// resurcive
// function rev(name){
//   let rev=''
//   for(let i=0;i<name.length-1;i--){
//     rev+=name[i];
//   }
//   return rev
// }
// console.log(rev('vamsi'))

// ****************************\\//\\//\\//_______hoisting_______\\//\\//\\//*************************
// ******************not working*************
// console.log('a');
// let a='vamsi'
// ********************working***************

// program to display value
// var s = 4;
// function greet() {
//     b = 'hello';
//     console.log(b); 
//     var b;
//     var a=10 
// }


// morning();
// function morning(){
//     console.log('hello vamsi')
// }


// greet();
// console.log(a);

// random='hello vamsi'
// var random;
// console.log(random)

// console.log(a);
// var a='10';

// add(10,20);
// function add(a,b){
//     console.log(a+b)
// }

// var a1='10';
// var a=document.getElementsByClassName('demo')[0]=`${a1},${b1}`;
// console.log(a)
// var b1='22'
// 


// ************higher order function*************
// function f_name(fun){
//     fun();
// }
// function fun_name(){
//     console.log('hello')
// }
// f_name(fun_name)

// name()
// function name(hello){
//     return n();

// }
// function n(){
//     console.log('this is inner function')
// }

// ******************************************\\//\\//\\//____higher order____\\//\\//\\//**********************************

// *****************reduce*****************

// let a=[3,5,6,8]
// let b=a.reduce((a,b)=>{
//     // return a+b;
//     if(b==6){
//         return a-b
//     }
//     return a+b;
// })
// console.log(b)

// let a=[011,112,113,641,551,181];
// let c=a.reduce((d,b)=>{
//     e=Math.max(d,b)
//     return e;
// });
// let res=c
// console.log(res)



// ********************sort******************

// let a=[1,55,2,4,6,3,5,22]
// let b=a.sort((x,y)=>{
//     return x-y;
// })
// console.log(b);

// *******************map******************

// let b1=[12,13,14];
// let c=b1.map((n)=>{
//     return n+2;
// })
// console.log(c)

// ********************foreach****************

// let b2=[1,2,3,4];
// let d=b2.forEach(element => {
//     console.log(element+2) 
// });

// ********************filter*****************

// let b3=[1,33,44,32]
// let e=b3.filter(element =>{
//     return element<33;
// })
// console.log(e)


// ************************************\\//\\//\\//_______destructuring_______\\//\\//\\//****************************************

// let a=[1,2,3,4,5]
// let [b,,c,d]=a
// console.log(b,c,d)
  
// let a={name:'vamsi',age:24}
// let {name,age1}=a
// console.log(name,age1)//it shows ('vamsi' and undefined)

// const name=new Array()
// name[0]=3,name[1]=2
// console.log(name)
// const add=name[1]+name[0];
// console.log(add)
// const sub=name[0]-name[1];
// console.log(sub)


// ***********************swaping array**********************

// const colorArr = ["red", "yellow", "blue", "green", "white", "black"];
// var [first, ,second] = colorArr;
// // [first,second]=[second,first]
// // let temp=first;
// // first=second;
// // second=temp;
// console.log(first, second);


// const user = {
//     id: 42,
//     displayName: 'jdoe',
//     fullName: {
//       firstName: 'Jane',
//       lastName: 'Doe',
//     },
//   };
//   function whois({ displayName, fullName: { firstName } }) {
//     return `${displayName} is ${firstName}`;
//   }
//   console.log(whois(user));


// *************************objects*************************
// let car={brand:'Bmw',
//     price:'1cr'
//     ,special:'speed'}


// let {brand:a1,price:a2}=car
// console.log(a1,a2)


// let {car:cc=22,price:pp=1}={car:21}
// console.log(cc,pp)


// ****************access ID using functions*****************

// const user = {
//     id: 42,
//     displayName: 'jdoe',
//     fullName: {
//       firstName: 'Jane',
//       lastName: 'Doe',
//     },
//   };

//   function userId({ id }=user) {
//     return id;
//   }
//   console.log(userId());


// function display({id,displayName:name1}){
//     return `the Id Number is ${id} and he is ${name1}`;
// }
// console.log(display(user))


// const name1=['vamsi','venky'];
// let temp=name1[0];
// name1[0]=name1[1];
// name1[1]=temp;
// // [name1[0],name1[1]] = [name1[1],name1[0]];
// console.log(name1);

// function draw({name='vamsi',age=24,second={name1:'venky',age1:26},}){
//     console.log(name,age ,"first",second);
// }
// draw({age:10})

// const edibles = ["food", "fruits"];
// [edibles[0], edibles[1]] = [edibles[1], edibles[0]];
// console.log(edibles);


// ********************************\\//\\//\\//_______spread operator_______\\//\\//\\//******************************************// 


// const spread={
//     name:'vamsi',
//     age:24,
// }
// let New_spread={
//     ...spread,
//     email:'dsjhs'
// }
// console.log(New_spread)
// console.log(spread)


// const c=[1,2,3];
// const b=[4,5,6,7];
// const a=[...c,...b]
// console.log(a)

// function m(a,b,c){
//     console.log(a,b,c)
// }
// var args=[1,3,5]
// m(...args)

// *************************************************closures************************************

// function add(a,b){
//     c=a+b;
//     function juniour(){
//         console.log(c)
//     }
//     return juniour;
// }
// let s=add(2,4)
// s()


// console.log('fired first');
// console.log('fired second');
// setTimeout(()=>{
//     for(let i=0;i<3;i++){
//         console.log('fired third');
//     }
// },2000);
// setTimeout(()=>{console.log('fired last')},2000);

//****************************************\\//\\//\\//_______CallBacks_______\\//\\//\\//*********************************************/

// let order=(order_id,production)=>{
//     setTimeout(()=>{console.log(`one order is received id is ${order_id}`)},1000);
//     production()
// }
// let deliver=()=>{
//     setTimeout(() => {
//         console.log('order is cooking');
//         setTimeout(()=>{
//             console.log('order packed')
//             setTimeout(()=>{
//                 console.log('one the way')
//                 setTimeout(() => {
//                     console.log('order delivered successfully')
//                 },2000);
//             },1500)
//         },1000)
//     },2000);
// }
// order(1,deliver)

//****************************************\\//\\//\\//_______Promises_______\\//\\//\\//*********************************************/
// let is_open=false;
// let stocks={
//     fruits:['apple','banana','mango','grapes'],
//     liquid:['water','ice'],
// }
// let order=(time,work)=>{
//     return new Promise((resolve,reject)=>{
//         if(is_open){
//             setTimeout(() => {
//                 resolve(work());
//             }, time);           
//         }
//         else{
//             reject(console.log('sorry this product is not available'))
//         }
//     })
// }
//     order(2000,()=> console.log(`${stocks.fruits[1]} shake is ordered`))
// .then(() =>{
//     return order(1000,()=> console.log(`${stocks.fruits[1]} is ready`));
// })
// .then(() =>{
//     return order(1500,()=> console.log(`check which toopings do you want`));
// })
// .then(() =>{
//     return order(1100,()=> console.log(`check which toopings do you want`));
// })
// .then(() =>{
//     return order(2000,()=> console.log(`ready to place your ${stocks.fruits} juice`));
// })
// .then(() =>{
//     return order(1000,()=> console.log(`delivered`));
// })
// .then(() =>{
//     return order(1500,()=> console.log(`thanq for coming visit net time`));
// })
// .catch(()=>{
//     setTimeout(() => {
//         console.log('sorry to tell that is not available')
//     }, 2000);  
// })
// .finally(()=>{
//     console.log('thanq for coming visit again')
// })


// let s=new Promise((resolve,reject)=>{
//     if(true){
//         console.log('no')
//         resolve()
//     }
//     else{
//         reject()
//     }
// });
// s.then(()=>{
//     console.log('it is just for fun')
// })
// .catch()

// let s=new Promise((resolve,reject)=>{
//     if(false){
//         setTimeout(() => {
//             resolve('step 1')
//         }, 3000);
//     }
//     else{
//         reject ('error')
//     }
// })
// async function name1(){
//     try{
//         res=await s;
//     console.log(res)
//     console.log('step 2')
//     }
//     catch{
//         console.log('error')
//     }
    
// }
// name1()
 





//****************************************\\//\\//\\//_______Fetch Api_______\\//\\//\\//*********************************************/


