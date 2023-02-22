let inputMain = $("#maininput");
let btnadd = $("#addBtn");
let task = $('#task');            

function createElement(text){
    let div = ` <div class="addtask">
                    <input type="text" class="taskinput" readonly>
                    <span class="btnDel">delete</span>
                </div>`;
    task.append(div);
    let taskinput = $('.taskinput')
    taskinput.eq(taskinput.length-1).val(`${text}`)
    inputMain.val("");
}

btnadd.on('click' , ()=>{
    if(inputMain.val() !== ""){
        createElement(inputMain.val());
    }
})

task.on('click',(e)=>{
    if(e.target.classList == 'taskinput'){
        e.target.classList.toggle('marked');
    }
    if(e.target.classList == 'btnDel' ){
        e.target.parentNode.remove();
    }
})