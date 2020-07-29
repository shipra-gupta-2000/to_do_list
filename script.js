let ultask=$('#ultask');
let btnadd=$('#btnadd');
let btnclear=$('#btnclear');
let btnreset=$('#btnreset');
let btnsort=$('#btnsort');
let inpnewtask=$('#inpnewtask');

function cleardone(){
    $('#ultask .ok').remove()
}
btnreset.click(cleardone);

 function toggle(){
    btnclear.prop('disabled',inpnewtask.val()=='');
    btnadd.prop('disabled',inpnewtask.val()=='');
    btnreset.prop('disabled',ultask.children().length<1);
    btnsort.prop('disabled',ultask.children().length<1);

 }
 function additem(){
    let listitem=$('<li>',{
        'class':'list-group-item',
        text:inpnewtask.val()
    })
    listitem.click(()=>{
       listitem.toggleClass('ok')
    })
    ultask.append(listitem)
    inpnewtask.val("");
}
function sorttask(){
    $('#ultask .ok').appendTo(ultask);
}
btnsort.click(sorttask);
inpnewtask.keypress((e)=>{
    if(e.which==13&&inpnewtask.val()!='')    
    additem();
})
inpnewtask.on('input' , () => {
    toggle();
})
btnadd.click(additem);
btnclear.click(()=>{
    inpnewtask.val('');
})
ultask.click()