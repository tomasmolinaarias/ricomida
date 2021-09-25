// tooltlip
//$(function(){
//   var tooltipList =[].slice.call( document.querySelectorAll('[data-bs-toggle="tooltip"]')
//    );
//    tooltipTriggerList.map(function(tooltipTriggerEl) {
//        return new boostrap.tooltip(tooltipTriggerEl);
//    })
//});
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})