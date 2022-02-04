logIn=document.getElementById('login');
logIn.addEventListener("click",log_here);

function log_here(){
    var name=document.getElementById('recipient-name').value;
    var passwd=document.getElementById('exampleInputPassword1').value;
    console.log(name,passwd);
    var store={
        name:'jojan',
        last:'rai',
        class:'12'
    };
    console.log(store['name']);
}