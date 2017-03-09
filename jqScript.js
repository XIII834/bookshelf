//Позволяет сортировать объекты в равмах <div id="bookshelf">
$(function() {  
  $('#bookShelf').sortable();
});

//Это осуществляет движение зрачка за курсором мышки
$( document ).on( "mousemove", function( event ) {

  var p = $("#eyeBox");
  var offset = p.offset();
  var horLine = offset.left + 70;
  var verLine = offset.top + 70;

  var max = 35;
  var cof = 15;

  	if ((event.pageX - horLine) / cof > max) {
  		$("#paint").css("margin-left", max);
  	} else if ((event.pageX - horLine) / cof < -max) {
  		$("#paint").css("margin-left", -max);
  	} else {
  		$("#paint").css("margin-left", (event.pageX - horLine) / cof );
  	}
  
	if ((event.pageY - verLine) / cof > max) {
	 	$("#paint").css("margin-top", max);
	} else if ((event.pageY - verLine) / cof < -max) {
	 	$("#paint").css("margin-top", -max);
	} else {
	 	$("#paint").css("margin-top", (event.pageY - verLine) / cof);
	}
});