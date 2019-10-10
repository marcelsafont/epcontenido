$(window).load(function() {
	$('.flexslider').flexslider({
		animation: "fade",
	    start: function (slider) {
	    	$('.content-slide .box-checkbox').click(function(event){
	        	$('.flexslider').flexslider('next')
	    	})
	  	}
	})
});

$(document).ready(function(){
	$('#colaborador-btn').click(function(){
		$('#responsable').hide();
		$('#colaborador').show(100, function(){
			let pos = $('#colaborador .box-info-no-image').position();
			window.scrollTo(0, pos.top);
		});
		
	})

	$('#responsable-btn').click(function(){
		$('#colaborador').hide();
		$('#responsable').show(100, function(){
			let pos = $('#responsable .box-info-no-image').position();
			window.scrollTo(0, pos.top);
		});
	})	

	$('.box-checkbox').click(function(){
		$(this).toggleClass('checked');
	})
	$("#container-video").fitVids();
	$('.enviar-btn').click(function(){
		if($('#enigma').val() == 'caixabank'){
			$('.message-wrong').removeClass('visible');
			$('.message-ok').addClass('visible');
		}else{
			$('.message-wrong').addClass('visible');
			$('.message-ok').removeClass('visible');
		}
	})
});
