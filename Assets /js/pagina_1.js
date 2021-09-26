/*cambio de color*/
$(document).ready(function(){
  $("#titulo_ingrediente").click(function(){
    $(this).css("color","red");
  });
});

$(document).ready(function(){
  $("#titulo_preparacion").click(function(){
    $(this).css("color","red");
  });
});

$(document).ready(function(){
  $(".tarjetas").click(function(){
    $(this).toggle("hide");
  });
});

/*tooltip*/
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
/*poopovers*/
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})