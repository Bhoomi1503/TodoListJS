function getinput(){
    var add=document.getElementById("listtask")
    var input=document.getElementById("myinput")
        var litem=document.createElement("li")
        litem.innerHTML=input.value+""+"<button onclick='del(event)'>Delete</button>"
        if(input.value==null||input.value==""){
            alert("Enter some text");
        }
        else{
        add.append(litem);
        }
}

function del(event){
    event.target.parentElement.remove();
}
