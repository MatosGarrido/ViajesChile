$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  
  
  
$("#enviar").click(function () {
    alert("¡Gracias por ponerte en contacto con Viajes Chile! Tu mensaje ha sido enviado correctamente.")
  });  

  
  $(document).scroll(function(){
    const y = $("html").scrollTop();

    y > 300 ? $("nav").addClass("nav-black") : $("nav").removeClass("nav-black");
  })


})

$(document).scroll(function () {
    const y = $("html").scrollTop();
  
    y > 300 ? $(".navbar").addClass("nav-black") : $(".navbar").removeClass("nav-black");
  });