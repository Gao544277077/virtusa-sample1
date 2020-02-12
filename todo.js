window.onload=initAll;

var arr=new Array(1,2,3,4,5);
var element = null;
function initAll() {
    var input=document.createElement("input");
    input.id="text";
    document.body.appendChild(input);
	if(document.getElementById){
        list=document.getElementById("list");
        createbylist();
    }else{
        document.write(list);
    }
}
    function createbylist() {
        var x=document.getElementById("list");
        x.innerHTML = "";
        arr.forEach(element => {
            var z = document.createElement("LI");
            z.addEventListener("click", selection);
            var t = document.createTextNode(element);
            z.appendChild(t);
            x.appendChild(z);
        });
        // ````x=document.getElementById("list").childNodes(this).style.backgroundColor="lightgrey";
        //     x=document.getElementById("list").style.backgroundColor="lightgrey";
        //     x=document.getElementById("list").style.fontWeight="bold";
    }
    function addbylist() {
        var task=document.getElementById("text").value;
        if(task===""){

        }else{
        var x=document.getElementById("list");
        var z = document.createElement("LI");
        var t = document.createTextNode(task);
        z.appendChild(t);
        x.appendChild(z);
        }
    }

    function remove(){
        if(element){
        document.getElementById("list").removeChild(element);
        }else{

        }
        element=null;

    }

    function selection(){
        this.style.backgroundColor="lightgrey";
        this.style.fontWeight="bold";
        element=this;
    }



