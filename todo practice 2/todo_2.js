let form=document.querySelector('#form');
let input=document.querySelector('#input');
let posts=document.querySelector('#posts');
let msg=document.querySelector('#msg');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
   
    formValidation()
    input.focus();
    input.value='';
})


let formValidation=()=>{
    if(input.value==''){
        msg.innerHTML='write any text';
        input.focus();
    }
    else{
        console.log('success');
        msg.innerHTML='';
        acceptData();
    }
}


let data={};
let acceptData=()=>{
    data['text']=input.value;
    console.log(data)
    upload_data();
}

let upload_data=()=>{
    posts.innerHTML+=
    
    `<div>
    <h3>${data.text}</h3>
    <span class="options">
        <i onClick="edit(this)" class="fas fa-edit style"></i>
        <i onClick="del(this)" class="fas fa-trash-alt style1"></i>
    </span>
</div>`

}

let del=(e)=>{
    e.parentElement.parentElement.remove();
}
let edit=(e)=>{
    input.value=e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
    input.focus()
}


