let name1 = document.getElementsByTagName("h1")[0]
var name="hello"

function set(){
    name1.innerText="setItem"
    window.localStorage.setItem("name",`${name}`)
}

function remove(){
    name1.innerText="removeItem"
    window.localStorage.removeItem("name")
}

let a=[1,2,3]
let b=[4,5,6]
let c=[...a,...b]
console.log(c)