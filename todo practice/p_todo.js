let form=document.querySelector('#task_form')
let input=document.querySelector('#task_input');
// let submit=document.querySelector('#task_submit')
let tasks=document.querySelector('#tasks')

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let inputvalue=input.value;
    

    if(inputvalue==''){
        input.focus();
        alert('please give a task');
        return ;
    }
    let task=document.createElement('div')
    task.classList.add('task');


    let content=document.createElement('div');
    content.classList.add('content');
     
    let input_task=document.createElement('input');
    input_task.classList.add('text');
    input_task.classList.add('mt-4');
    input_task.classList.add('form-control');
    input_task.classList.add('mb-2');
    input_task.value=inputvalue;
    input_task.setAttribute('class','readonly');
    input_task.type='text';


    content.appendChild(input_task);;
    task.appendChild(content);
    tasks.appendChild(task);



    let actions=document.createElement('div');
    actions.classList.add('actions');

    let edit=document.createElement('button');
    edit.classList.add('edit');
    edit.classList.add('btn');
    edit.classList.add('btn-warning');
    edit.innerHTML='Edit'

    let del=document.createElement('button');
    del.classList.add('delete');
    del.classList.add('btn');
    del.classList.add('mx-2');
    del.classList.add('btn-danger');
    del.innerHTML='Delete';

    actions.appendChild(edit)
    actions.appendChild(del)
    task.appendChild(actions)


    input.value='';


    edit.addEventListener('click',()=>{
        if(edit.innerHTML=="Edit"){
            input_task.removeAttribute('readonly');
            input_task.focus();
            edit.innerHTML='Save';
        }
        else{
            input_task.setAttribute('class','readonly');
            edit.innerHTML='Edit';
        }  
    })

    del.addEventListener('click',()=>{
        tasks.removeChild(task);
    })
})
