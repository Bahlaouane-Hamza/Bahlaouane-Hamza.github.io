[].slice.call( document.querySelectorAll('.grid a') ).forEach( function(el) {
				el.onclick = function() { return false; }
} );

var projectView = false,
currentID = -1,
currentPageHeight = -1,
is_mobile = false;

jQuery(document).ready(function($){
	currentPageHeight = $(document).height();
	if ($(".mobileClass").css("float") == "none" ){
		is_mobile = true;
	}
	console.log(is_mobile);
});

jQuery(window).resize(function(){
	is_mobile = false;
	if (jQuery(".mobileClass").css("float") == "none" ){
		is_mobile = true;
	}
});


jQuery(document).ready(function($){
			if(!is_mobile)
				$("#content").height(currentPageHeight);		
});
jQuery(window).load(function () {
		currentPageHeight = $(document).height();
	  	if(!is_mobile)
	  		jQuery("#content").height(currentPageHeight);
});

jQuery(window).resize(function() {
		 if(!is_mobile)
		 	jQuery("#content").height(jQuery(document).height());
});

jQuery(document).ready(function($){
	if ($(".mobileClass").css("float") == "none" ){
		is_mobile = true;
		$("#content").css("height","auto");
	}
	
			$("a.view-project").click(function(e){
				currentID = parseInt($(this).data('id'));
				var w  = $("#left-col").width()+50,
					el = $('div.project-view[id="p'+currentID+'"]');

				if(!is_mobile) el.width($(document).width()-w);
				el.height($(document).height());
				if(!is_mobile) el.css("left",w);
				el.slideDown('slow',function(){
					el.height($(document).height());
					jQuery("#content").height(jQuery(document).height());
					$('body').animate({scrollTop:0}, '500', 'swing', function() { 
					   
					});
				});
				projectView = true;
				
				e.preventDefault();
			});	

			$("div.project-view a.close").click(function(e){
				if (projectView) {
					$('div.project-view').slideUp('up');
					projectView = false;
					jQuery("#content").height(currentPageHeight);
				}   // esc
				e.preventDefault();
			});
});

$(document).keyup(function(e) {
	if (e.keyCode == 27 && projectView) {
		$('div.project-view[id="p'+currentID+'"] a.close').trigger('click');
	}   // esc
});



