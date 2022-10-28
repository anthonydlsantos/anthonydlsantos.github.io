console.log("Hola, que tal? ;) ")

/* --- buttom - homeMenu --- */

btn  = document.getElementsByTagName("button")[0];
menu = document.getElementById("homeMenu");

cerrar  = document.getElementById("cerrarMenu");

function showMenu() {
    if ( btn.getAttribute("estado") != "abierto" ){
        // Si no esta "abierto", agrego attr abierto. 
        btn.setAttribute("estado","abierto");
        menu.style.display = "block"; // Abre menu.

        cerrar.onclick = function () {
            btn.setAttribute("estado","cerrado")
            menu.style.display = "none"
        }

    } else {
        // Si esta "abierto", cambio attr cerrado
        btn.setAttribute("estado","cerrado")
        menu.style.display = "none"
    }
    
}

btn.addEventListener( "click", showMenu );

