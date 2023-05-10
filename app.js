var id = null;
//Create the animation
function myAnimate() {
    var elem = document.getElementById("animation");
    var pos = 0;
    clearInterval(id);
    id = setInterval(frame,10);
    function frame() {
        if(pos==550){
            clearInterval(id);
        }else{
            pos++;
            elem.style.top = pos + "px" ;
            elem.style.left = pos + "px";
        }
    }
}
///style through dom
document.getElementById("animation").style.backgroundColor = "rgb(249 230 244)";
document.getElementById("animation").style.position = "absolute";
document.getElementById("animation").style.marginTop = "9px";
document.getElementById("animation").style.marginLeft = "9px";
document.getElementById("animation").style.width = "70px";
document.getElementById("animation").style.height = "70px";

