

 var writeUsButton = document.querySelector(".write-us-button");
 var writeUsModal = document.querySelector(".modal-write-us");
 var userName = document.querySelector(".user-name");
 var  modalCloseButton = document.querySelector(".modal-close");

writeUsButton.addEventListener("click", function(evt) {
    evt.preventDefault();
    writeUsModal.classList.add("modal-show");
    userName.focus();
  });

 modalCloseButton.addEventListener("click", function(evt){
    evt.preventDefault();
    writeUsModal.classList.remove("modal-show");
  });

$(document).ready(function(){
   $('.single-item').slick({
    infinite: true,
    dots: true,
    autoplay: true,
    arrows: false,
   });
 });

/* === shop section ranged slider ===*/

$( function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 25000,
      values: [ 0, 15000 ],
       slide: function( event, ui ) {
          $( "#amount-from" ).val(  ui.values[ 0 ] );
          $( "#amount-to" ).val( ui.values[ 1 ] );
        }
      });
      $( "#amount-from" ).val( $( "#slider-range" ).slider( "values", 0 ));
      $( "#amount-to" ).val( $( "#slider-range" ).slider( "values", 1 ));
  } );


