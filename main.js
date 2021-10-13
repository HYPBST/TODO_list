function hozzaad(){
    let teendo=document.getElementById("teendo").value;
    let lista=document.getElementById("ul")
    if(teendo==""||!isNaN(teendo)){
        alert("csak szöveget lehet megadni és ki kell tölteni a mezőt");
        return;
    }
    let li=document.createElement("li");
    li.setAttribute("class","list-group-item");
    let cb = document.createElement("input");
    cb.addEventListener("change",kihuz)
    cb.setAttribute("type", "checkbox");
    let x=document.createElement("span");
    x.innerHTML="X";
    x.style.float="right";
    x.addEventListener("click",torol);
    li.appendChild(cb);
    li.append(" ");
    li.append(teendo);
    li.appendChild(x);   
    lista.appendChild(li);
    document.getElementById("teendo").value="";
    
}
function torol(e){
    e.target.parentElement.remove();
}
function kihuz(e){
    if(e.target.checked){
        e.target.parentElement.style.textDecoration="line-through";
        e.target.parentElement.setAttribute("class","list-group-item elvegzett");
    }else{
        e.target.parentElement.style.textDecoration="none"
        e.target.parentElement.setAttribute("class","list-group-item");
    }
}
function eltuntet(e){
    if(e.target.checked){
        let itemek=document.getElementsByClassName("list-group-item elvegzett");
        for(i=0;i<itemek.length;i++){
            itemek[i].style.display="none";
        }
    }else{
        let itemek=document.getElementsByClassName("list-group-item elvegzett");
        for(i=0;i<itemek.length;i++){
            itemek[i].style.display="block";
        }
    }
    
}
function torol_done(){
    let itemek=document.getElementsByClassName("list-group-item elvegzett");
    var arr = [].slice.call(itemek);
    arr.forEach(element => {
        element.remove();
    });
    
}
function init(){
    document.getElementById("hozzaad").addEventListener("click",hozzaad);
    let ul=document.createElement("ul");
    document.getElementById("lista").appendChild(ul);
    ul.setAttribute("class","list-group list-group-flush");
    ul.setAttribute("id","ul")
    let cb_hide=document.getElementById("hide_done");
    cb_hide.addEventListener("change",eltuntet);
    let cb_delete=document.getElementById("delete_done");
    cb_delete.addEventListener("click",torol_done)
}

document.addEventListener("DOMContentLoaded",init);