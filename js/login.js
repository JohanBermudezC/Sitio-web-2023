
function box_onblur(){
    const box_onblur = document.querySelector("#box_onblur");
    if (box_onblur.value.length <=2) {
        alert("problem text")
    }
}

form.addEventListener("submit", name_event => {
    // SUBMIT PARA FORMULARIOS
    name_event.preventDefault();
    let info = "";
    if (nombres.value.length <= 2 || apellidos.value.length <= 2) {
        info += "Nombres o Apellidos incorrectos";
        validation.style.color = "red";
    }
    else {
        info+= "Su nombre es " + nombres.value + " " + apellidos.value;
        validation.style.color = "green";
    }
    validation.innerText = info;
})
