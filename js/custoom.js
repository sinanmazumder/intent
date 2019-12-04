
// start jquery//

$(document).ready(function(){
	

//main slider//

$('.bxslider').bxSlider({
    auto: true,
	speed:2000,
  buildPager: function(slideIndex){
     
    switch(slideIndex){
	   
      case 0:
        return '<img src="images/2.jpg">';
      case 1:
        return '<img src="images/3.jpg">';
      case 2:
        return '<img src="images/4.jpg">';
	  case 3:
	    return '<img src="images/5.jpg">';
	  case 4:
	    return '<img src="images/6.jpg">';	
	  case 5:
        return '<img src="images/7.jpg">';
      case 6:
        return '<img src="images/8.jpg">';
      case 7:
        return '<img src="images/9.jpg">';
	  case 8:
	    return '<img src="images/10.jpg">';
	  case 9:
	    return '<img src="images/11.jpg">';		
    }
  }
});//end main slider//

//jquery tabs//
       
		     $( "#tabs" ).tabs({
            show: { effect: "clip",duration: 1500}
            });
	
//blog slider//
     
			$('#myslider').bxSlider({
			  mode: 'fade',
			  captions: true
			});
			
			
	});		

   //google map//
   
    $(document).ready(function(){
      var map = new GMaps({
        el: '#map',
        lat: 52.1359289,
        lng: -106.6520503
      });

      GMaps.geolocate({
        success: function(position){
          map.setCenter(position.coords.latitude, position.coords.longitude);
        },
        error: function(error){
          //alert('Geolocation failed: '+error.message);
        },
        not_supported: function(){
          //alert("Your browser does not support geolocation");
        },
        always: function(){
          //alert("Done!");
        }
      });
    });
   
   
   
   
