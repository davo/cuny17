$(document).ready(function() {

  var sectionHistoria = $('.historia');
  // console.log(sectionHistoria);
  
  // Calculo la posición del margen superior de mi sección Historia y la divido por 2.
  // Entonces a la mitad de la distancia podré transicionar y mostrar el header.

  var margenSuperior = sectionHistoria.offset().top / 2;
  // console.log(margenSuperior)

  // Detecto el scroll del documento

  $(document).scroll(function() {
    if (margenSuperior <= $(document).scrollTop()) {
      $('header').addClass('show');
    } else {
      $('header').removeClass('show');
    }
    // console.log($(document).scrollTop())


    
  });


});