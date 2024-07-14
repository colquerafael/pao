
function loguear() {

    let user = document.getElementById("usuario").value;
    let pass = document.getElementById("clave").value;

    if(user=="Estrellita" && pass==2030) {

        window.location = "principal/index.html";

    }

else{
    alert("Sos intrusooo.");
}

}