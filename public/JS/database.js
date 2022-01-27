take = document.getElementById('submit_contact')
take.addEventListener("click", showDialog);
async function showDialog() {
    mailTake = document.getElementById('exampleInputEmail1').value;
    messageTake = document.getElementById('exampleFormControlTextarea1').value;
    if (mailTake == "" && messageTake == "") {
        console.log("null");
        document.getElementById('error-succ-msg').innerHTML="Enter required detail";
    }
    else {
        itemsJsonArrayStr=localStorage.getItem('contact');
        itemsJsonArray=JSON.parse(itemsJsonArrayStr);
        if(itemsJsonArray==null){
            var itemsJsonArray = [];
            localStorage.setItem('contact',JSON.stringify(itemsJsonArray));
            itemsJsonArray.push([mailTake,messageTake]);
            localStorage.setItem('contact',JSON.stringify(itemsJsonArray));
        }
        else{
            // console.log(itemsJsonArray,'jojan');
            itemsJsonArray.push([mailTake,messageTake]);
            localStorage.setItem('contact',JSON.stringify(itemsJsonArray));
            // console.log("item added");
        }
        document.getElementById('exampleInputEmail1').value="";
        messageTake = document.getElementById('exampleFormControlTextarea1').value="";
        document.getElementById('error-succ-msg').innerHTML="Thank you for your message";
    }
    // localStorage.setItem('mail', JSON.stringify(itemsJsonArray));
}
console.log(localStorage.getItem('contact'));


