function getinput(){
    let add=document.getElementById("myinput").value;
    if(add.length>0){
        document.getElementById("listtask").innerHTML+="<div class='t1'>"+t1+"<button onclick='delete(this)'>DELETE</button></div>";
    }   
        document.getElementById("myinput").value="";
}
function del(){
    let dele=document.getElementsByTagName("input")[1];
    let btn=document.getElementById("del");
    dele.remove();
    btn.remove();
}