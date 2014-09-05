function getEvent(event){
   return event||window.event;
}

function center(oDiv){
    var left = (document.documentElement.clientWidth -oDiv.offsetWidth ) / 2;
    var top = (document.documentElement.clientHeight - oDiv.offsetHeight) / 2;

    oDiv.style.left=left+"px";
    oDiv.style.top=top+"px";

}
function drag(oDiv,cDiv){
   document.onmousedown=function(e){
    var e=getEvent(e);
    var diffX=e.clientX-cDiv.offsetLeft;
    var diffY=e.clientY-cDiv.offsetTop;

    document.onmousemove=function(e){
        var e=getEvent(e);

        var left=e.clientX-diffX;
        var top=e.clientY-diffY;

        if(left<0){
            left=0;
        }else if(left>oDiv.offsetWidth-cDiv.offsetWidth){
            left=oDiv.offsetWidth-cDiv.offsetWidth;
        }

        if(top<0){
            top=0;
        }else if(top>oDiv.offsetHeight-cDiv.offsetHeight){
            top=oDiv.offsetHeight-cDiv.offsetHeight;
        }

        cDiv.style.left=left+"px";
        cDiv.style.top=top+"px";
    }
    document.onmouseup=function(){
        this.onmousemove=null;
        this.onmouseup=null;
        };
   };
}
function resize(fn){
    window.onresize=fn;
    return this;
}