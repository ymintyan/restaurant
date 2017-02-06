$(document).ready(function(){
     $(".navbar a, a[href='#myPage']").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function(){
   
        window.location.hash = hash;
      });
    } 
  });

     $("#gallery img").addClass('img-thumbnail');

     var images = "<div class='row'><div class='col-sm-4 slide'><img src='images/13.jpg' alt=''></div><div class='col-sm-4 slide'>\
     <img src='images/17.jpg' alt=''></div><div class='col-sm-4 slide'><img src='images/18.jpg' alt=''></div></div>\
     <div class='row'><div class='col-sm-4 slide'><img src='images/img5.jpg' alt=''></div><div class='col-sm-4 slide'>\
     <img src='images/header.jpg' alt=''></div><div class='col-sm-4 slide'><img src='images/img4.jpg' alt=''></div></div>";


     $("#gallery button").click(function(){
     	if($(this).text() == 'Больше фото'){
	     	$(images).insertBefore('#gallery button');
	     	$(this).text('Свернуть');
     	} else {
     		$("#gallery .row").not($("#gallery .row").eq(0)).remove();
     		$(this).text('Больше фото');
     	}
     	$("#gallery img").addClass('img-thumbnail');

     });
});     

function myMap() {
		  var myCenter = new google.maps.LatLng(50.508742,30.520850);
		  var mapCanvas = document.getElementById("map");
		  var mapOptions = {center: myCenter, zoom: 5};
		  var map = new google.maps.Map(mapCanvas, mapOptions);
		  var marker = new google.maps.Marker({position:myCenter});
		  marker.setMap(map);
		}