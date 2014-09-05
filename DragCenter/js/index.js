window.onload=function(){
    var oDiv=document.getElementById("box");
    var cDiv=document.getElementById("child_box");
    center(oDiv);
    resize(function(){
        center(oDiv);
    });
    drag(oDiv,cDiv);  
}