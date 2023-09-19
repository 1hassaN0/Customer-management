

creat.onclick = function creatfn(){
    var creat1 = document.getElementById('creat1');
    var bordarcreat1 = document.getElementById('bordarcreat1');

if(bordarcreat1.style.display == "none"){
    bordarcreat1.style.display = "inline-block";
}
else{
    bordarcreat1.style.display = "none";
}
}

opendetals.onclick = function() {
    if(borddetals.style.display == "flex"){
        borddetals.style.display = "none";
    } else {
        borddetals.style.display = "flex";
    }
}

var closedetals = document.getElementById('closedetals');
var borddetals = document.getElementById('borddetals');

closedetals.onclick = function() {
    if(borddetals.style.display == "flex"){
        borddetals.style.display = "none";
    } else {
        borddetals.style.display = "flex";
    }
}





