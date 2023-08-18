const select = document.getElementById("provincia");
const selectCanton = document.getElementById("canton");
const selectDistrito = document.getElementById("distrito");

const ArrayDistritos = [];
const arrayCantones = [];

const url = "https://gist.githubusercontent.com/Anthony0912/903cf82739e8662f3e757753921bbcf3/raw/eb8298c4c77032c74c4686678c2beea191b1d30a/locations.json";

fetch(url)
.then(response => response.json())
.then(data => {
    const provincias = data.provincias || [];

    provincias.forEach(provincia => {
        const nombreProvincia = provincia.nombre || "Nombre no disponible";

        var opcionProvincia = document.createElement("option");
        opcionProvincia.value = nombreProvincia;
        opcionProvincia.textContent = nombreProvincia;
        select.appendChild(opcionProvincia);

        const cantonesProvincia = provincia.cantones || [];
        cantonesProvincia.forEach(canton => {
            const nombreCanton = canton.nombre || "Nombre no disponible";

            arrayCantones.push(nombreCanton);

            const distritosCanton = canton.distritos || [];
            distritosCanton.forEach(distrito => {
                const nombreDistrito = distrito.nombre || "Nombre no disponible";

                ArrayDistritos.push(nombreDistrito);
            });
        });
    });
});

function Recorrer(combobox, valores) {
    combobox.innerHTML = ""; // Borrar opciones anteriores

    for (let index of valores) {
        combobox.innerHTML += `<option>${index}</option>`;
    }
}

select.addEventListener("change", (e) => {
    var dato = e.target.value;

    selectCanton.innerHTML = "";
    selectDistrito.innerHTML = "";

    switch (dato) {
        case "San José":
            arrayCantones[0] = "Cantón Central San Jose";
            Recorrer(selectCanton, arrayCantones.slice(0, 21));
            break;

        case "Alajuela":
            arrayCantones[20] = "Cantón Central Alajuela";
            Recorrer(selectCanton, arrayCantones.slice(20, 36));
            break;

        case "Cartago":
            arrayCantones[36] = "Cantón Central Cartago";
            Recorrer(selectCanton, arrayCantones.slice(36, 44));
            break;

        case "Heredia":
            arrayCantones[44] = "Cantón Central Heredia";
            Recorrer(selectCanton, arrayCantones.slice(44, 54));
            break;

        case "Guanacaste":
            Recorrer(selectCanton, arrayCantones.slice(54, 65));
            break;

        case "Puntarenas":
            arrayCantones[65] = "Cantón Central Puntarenas";
            Recorrer(selectCanton, arrayCantones.slice(65, 76));
            break;

        case "Limón":
            arrayCantones[76] = "Cantón Central Limon";
            Recorrer(selectCanton, arrayCantones.slice(76, 82));
            break;
    }
});

selectCanton.addEventListener("change", (e) => {
    selectDistrito.innerHTML = "";
});

function CargarDistritos()
{
    var dato = selectCanton.value;

    selectDistrito.innerHTML = "";

    switch(dato)
    {
        case "Cantón Central San Jose":
            Recorrer(selectDistrito, ArrayDistritos.slice(0, 11));
            break;

        case "Escazú":
            Recorrer(selectDistrito, ArrayDistritos.slice(11, 14));
            break;

        case "Desamparados":
            Recorrer(selectDistrito, ArrayDistritos.slice(14, 27));
            break;

        case "Puriscal":
            Recorrer(selectDistrito, ArrayDistritos.slice(27, 36));
            break;

        case "Tarrazú":
            Recorrer(selectDistrito, ArrayDistritos.slice(36, 39));
            break;

        case "Aserrí":
            Recorrer(selectDistrito, ArrayDistritos.slice(39, 46));
            break;

        case "Mora":
            Recorrer(selectDistrito, ArrayDistritos.slice(46, 52));
            break;

        case "Goicoechea":
            Recorrer(selectDistrito, ArrayDistritos.slice(52, 59));
            break;

        case "Santa Ana":
            Recorrer(selectDistrito, ArrayDistritos.slice(59, 65));
            break;

        case "Alajuelita":
            Recorrer(selectDistrito, ArrayDistritos.slice(65, 70));
            break;

        case "Vázquez De Coronado":
            Recorrer(selectDistrito, ArrayDistritos.slice(70, 75));
            break;

        case "Acosta":
            Recorrer(selectDistrito, ArrayDistritos.slice(75, 80));
            break;

        case "Tibás":
            Recorrer(selectDistrito, ArrayDistritos.slice(80, 85));
            break;

        case "Moravia":
            Recorrer(selectDistrito, ArrayDistritos.slice(85, 88));
            break;

        case "Montes De Oca":
            Recorrer(selectDistrito, ArrayDistritos.slice(88, 92));
            break;

        case "Turrubares":
            Recorrer(selectDistrito, ArrayDistritos.slice(92, 97));
            break;

        case "Dota":
            Recorrer(selectDistrito, ArrayDistritos.slice(97, 100));
            break;

        case "Curridabat":
            Recorrer(selectDistrito, ArrayDistritos.slice(100, 104));
            break;

        case "Pérez Zeledón":
            Recorrer(selectDistrito, ArrayDistritos.slice(104, 115));
            break;

        case "León Cortés Castro":
            Recorrer(selectDistrito, ArrayDistritos.slice(115, 121));
            break;

        case "Cantón Central Alajuela":
            Recorrer(selectDistrito, ArrayDistritos.slice(121, 135));
            break;

        case "San Ramón":
            Recorrer(selectDistrito, ArrayDistritos.slice(135, 149));
            break;

        case "Grecia":
            Recorrer(selectDistrito, ArrayDistritos.slice(149, 157));
            break;

        case "San Mateo":
            Recorrer(selectDistrito, ArrayDistritos.slice(157, 161));
            break;

        case "Atenas":
            Recorrer(selectDistrito, ArrayDistritos.slice(161, 169));
            break;

        case "Naranjo":
            Recorrer(selectDistrito, ArrayDistritos.slice(169, 177));
            break;

        case "Palmares":
            Recorrer(selectDistrito, ArrayDistritos.slice(177, 184));
            break;

        case "Poás":
            Recorrer(selectDistrito, ArrayDistritos.slice(184, 189));
            break;

        case "Orotina":
            Recorrer(selectDistrito, ArrayDistritos.slice(189, 194));
            break;

        case "San Carlos":
            Recorrer(selectDistrito, ArrayDistritos.slice(194, 207));
            break;

        case "Zarcero":
            Recorrer(selectDistrito, ArrayDistritos.slice(207, 214));
            break;

        case "Sarchí":
            Recorrer(selectDistrito, ArrayDistritos.slice(214, 219));
            break;
        
        case "Upala":
            Recorrer(selectDistrito, ArrayDistritos.slice(219, 227));
            break;

        case "Los Chiles":
            Recorrer(selectDistrito, ArrayDistritos.slice(227, 231));
            break;

        case "Guatuso":
            Recorrer(selectDistrito, ArrayDistritos.slice(231, 235));
            break;

        case "Río Cuarto":
            Recorrer(selectDistrito, ArrayDistritos.slice(235, 238));
            break;

        case "Cantón Central Cartago":
            Recorrer(selectDistrito, ArrayDistritos.slice(238, 249));
            break;

        case "Paraíso":
            Recorrer(selectDistrito, ArrayDistritos.slice(249, 254));
            break;

        case "La Unión":
            Recorrer(selectDistrito, ArrayDistritos.slice(254, 262));
            break;

        case "Jiménez":
            Recorrer(selectDistrito, ArrayDistritos.slice(262, 265));
            break;

        case "Turrialba":
            Recorrer(selectDistrito, ArrayDistritos.slice(265, 277));
            break;

        case "Alvarado":
            Recorrer(selectDistrito, ArrayDistritos.slice(277, 280));
            break;

        case "Oreamuno":
            Recorrer(selectDistrito, ArrayDistritos.slice(280, 285));
            break;

        case "El Guarco":
            Recorrer(selectDistrito, ArrayDistritos.slice(285, 289));
            break;

        case "Cantón Central Heredia":
            Recorrer(selectDistrito, ArrayDistritos.slice(289, 294));
            break;

        case "Barva":
            Recorrer(selectDistrito, ArrayDistritos.slice(294, 300));
            break;

        case "Santo Domingo":
            Recorrer(selectDistrito, ArrayDistritos.slice(300, 308));
            break;

        case "Santa Barbara":
            Recorrer(selectDistrito, ArrayDistritos.slice(308, 314));
            break;

        case "San Rafael":
            Recorrer(selectDistrito, ArrayDistritos.slice(314, 319));
            break;

        case "San Isidro":
            Recorrer(selectDistrito, ArrayDistritos.slice(319, 323));
            break;

        case "Belén":
            Recorrer(selectDistrito, ArrayDistritos.slice(323, 326));
            break;

        case "Flores":
            Recorrer(selectDistrito, ArrayDistritos.slice(326, 329));
            break;

        case "San Pablo":
            Recorrer(selectDistrito, ArrayDistritos.slice(329, 331));
            break;

        case "Sarapiquí":
            Recorrer(selectDistrito, ArrayDistritos.slice(331, 336));
            break;

        case "Liberia":
            Recorrer(selectDistrito, ArrayDistritos.slice(336, 341));
            break;

        case "Nicoya":
            Recorrer(selectDistrito, ArrayDistritos.slice(341, 348));
            break;

        case "Santa Cruz":
            Recorrer(selectDistrito, ArrayDistritos.slice(348, 357));
            break;
        
        case "Bagaces":
            Recorrer(selectDistrito, ArrayDistritos.slice(357, 361));
            break;

        case "Carrillo":
            Recorrer(selectDistrito, ArrayDistritos.slice(361, 365));
            break;

        case "Cañas":
            Recorrer(selectDistrito, ArrayDistritos.slice(365, 370));
            break;

        case "Abangares":
            Recorrer(selectDistrito, ArrayDistritos.slice(370, 374));
            break;

        case "Tilarán":
            Recorrer(selectDistrito, ArrayDistritos.slice(374, 382));
            break;

        case "Nandayure":
            Recorrer(selectDistrito, ArrayDistritos.slice(382, 388));
            break;

        case "La Cruz":
            Recorrer(selectDistrito, ArrayDistritos.slice(388, 392));
            break;

        case "Hojancha":
            Recorrer(selectDistrito, ArrayDistritos.slice(392, 396));
            break;

        case "Cantón Central Puntarenas":
            Recorrer(selectDistrito, ArrayDistritos.slice(396, 412));
            break;

        case "Esparza":
            Recorrer(selectDistrito, ArrayDistritos.slice(412, 418));
            break;

        case "Buenos Aires":
            Recorrer(selectDistrito, ArrayDistritos.slice(418, 427));
            break;

        case "Montes De Oro":
            Recorrer(selectDistrito, ArrayDistritos.slice(427, 430));
            break;

        case "Osa":
            Recorrer(selectDistrito, ArrayDistritos.slice(430, 436));
            break;

        case "Quepos":
            Recorrer(selectDistrito, ArrayDistritos.slice(436, 439));
            break;

        case "Golfito":
            Recorrer(selectDistrito, ArrayDistritos.slice(439, 443));
            break;

        case "Coto Brus":
            Recorrer(selectDistrito, ArrayDistritos.slice(443, 448));
            break;

        case "Parrita":
            Recorrer(selectDistrito, ArrayDistritos.slice(448, 449));
            break;

        case "Corredores":
            Recorrer(selectDistrito, ArrayDistritos.slice(449, 453));
            break;

        case "Garabito":
            Recorrer(selectDistrito, ArrayDistritos.slice(453, 455));
            break;

        case "Cantón Central Limon":
            Recorrer(selectDistrito, ArrayDistritos.slice(455, 459));
            break;

        case "Pococí":
            Recorrer(selectDistrito, ArrayDistritos.slice(459, 466));
            break;

        case "Siquirres":
            Recorrer(selectDistrito, ArrayDistritos.slice(466, 472));
            break;

        case "Talamanca":
            Recorrer(selectDistrito, ArrayDistritos.slice(472, 476));
            break;

        case "Matina":
            Recorrer(selectDistrito, ArrayDistritos.slice(476, 479));
            break;

        case "Guácimo":
            Recorrer(selectDistrito, ArrayDistritos.slice(479, 484));
            break;
    }
}

function validarFormulario() {
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var provincia = document.getElementById("provincia").value;
    var canton = document.getElementById("canton").value;
    var distrito = document.getElementById("distrito").value;
    var fechaNacimiento = document.getElementById("fecha").value;
    var rangoIngreso = document.getElementById("rangoIngreso").value;
    var genero = document.querySelector('input[name="genero"]:checked');
    var gradoAcademico = document.getElementById("gradoAcademico");

    if (nombre === "" || email === "" || provincia === "" || canton === "" ||
        distrito === "" || fechaNacimiento === "" || rangoIngreso === "" || !genero ||
        gradoAcademico.selectedIndex === -1) {
      alert("Por favor, completa todos los campos del formulario.");
      return false;
    }
    
  }