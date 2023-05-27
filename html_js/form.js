let form=document.querySelector('#form')
let name=document.querySelector('#name')
let num=document.querySelector('#number')
let email=document.querySelector('#email')
let pass=document.querySelector('#password')


form.addEventListener('click',(e)=>{
   
    namevalue=name.value.trim();
    numvalue=num.value.trim();
    emailvalue=email.value.trim();
    passvalue=pass.value.trim();
    
    if(namevalue==''){
        e.preventDefault();
        alert('enter Name');
        name.focus();
        return false;
    }
    for(let i=0;i<name.length;i++){
        if(!namevalue.match(/^[A-Za-z]/)){
            
            return false;
        }
        name.innerHTML('not do this')
    }

    


    if(!isNaN(namevalue)){
        e.preventDefault();
        alert('not correct way');
        name.focus();
        return false;
    }
    if(passvalue == ''){
        e.preventDefault();
        alert('enter password');
        pass.focus();
        return false;
    }


    if(passvalue.length <= 6 ){
        e.preventDefault();
        alert('enter password length is above 6')
        pass.focus();
        return false
    }

    if(numvalue== "" ){
        e.preventDefault();
        alert('enter number');
        num.focus();
        return false;
    }
    if(numvalue.length <10  || numvalue.length>10 ){
        e.preventDefault();
        alert('enter valied number')
        num.focus();
        return false;
    }
    if(emailvalue==''){
        e.preventDefault();
        alert('enter email');
        email.focus();
        return false;
    }



    
})
alert('successfully submitted')
name.innerHTML='valid';




// // print(parseInt("Hello123"));
