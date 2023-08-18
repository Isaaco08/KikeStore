function calcularEdad() {

    var cumpleanos = new Date(document.getElementById("fecha").value);
    
    if (isNaN(cumpleanos)) {
        document.getElementById("edad").value = "Fecha inválida";
        return;
    }

    var hoy = new Date();
    var edad = hoy.getFullYear() - cumpleanos.getFullYear();

    // Verificar si todavía no ha ocurrido el cumpleaños de este año
  

    document.getElementById("edad").value = edad;

}

