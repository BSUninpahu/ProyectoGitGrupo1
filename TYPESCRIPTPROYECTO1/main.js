
// ATENTION!! FUNCIONALIDAD NAVPOST NAVEGADOR LATERAL <<<< SECCIÓN 111 >>>>//

document.addEventListener("DOMContentLoaded", function () {
    // Obtener el elemento del botón de cierre del menú
    var closeMenuButton = document.getElementById("closeMenuButton");
  
    // Agregar un evento de clic al botón
    closeMenuButton.addEventListener("click", function () {
      // Obtener los elementos de PostNav
      var postNav = document.querySelector(".Postnav");
  
      // Ocultar los elementos
      postNav.style.display = "none";
  
    });
  }); 
  
  document.addEventListener("DOMContentLoaded", function () {
    // Obtener el elemento del botón de apertura del menú
    var abrirMenuButton = document.getElementById("abrirMenuButton");
  
    // Agregar un evento de clic al botón de apertura
    abrirMenuButton.addEventListener("click", function () {
      // Obtener los elementos de PostNav
      var postNav = document.querySelector(".Postnav");
  
      // Mostrar los elementos
      postNav.style.display = "flex";
  
    });
  });
