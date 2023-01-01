let x=document.getElementById("icdatos");
x.addEventListener("mousemove",function(){mostrardiv("1");});
document.getElementById("datos").style.display="block";

let y=document.getElementById("icestudios");
y.addEventListener("mouseover", function(){mostrardiv("2");});

let z=document.getElementById("ictrabajos");
z.addEventListener("mouseover",function(){mostrardiv("3");});

function mostrardiv(op){

    document.getElementById("datos").style.display="none";
    document.getElementById("estudios").style.display="none";
    document.getElementById("trabajos").style.display="none";

    if (op=="1") {document.getElementById("datos").style.display="block";}
    if (op=="2") {document.getElementById("estudios").style.display="block";}
    if (op=="3") {document.getElementById("trabajos").style.display="block";}
}


