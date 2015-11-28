(function ( $ ) {
$.fn.presentation = function(params){
	var settings = $.extend({time: 3000}, params);
	$(this).each(function(index){
		var self = this;
		var presentationElements = $(self).find(".presentation-element");
		var maxOuterHeight = 0;
		presentationElements.each(function(index2){
			if($(this).outerHeight() > maxOuterHeight){
				maxOuterHeight = $(this).outerHeight();
			}
		});
		$(self).height(maxOuterHeight);
		$(window).resize(function(){
			var maxOuterHeight = 0;
			presentationElements.each(function(index2){
				if($(this).outerHeight() > maxOuterHeight){
					maxOuterHeight = $(this).outerHeight();
				}
			});
			$(self).height(maxOuterHeight);
		});
		setInterval(function(){
			var visibleElementPos = null;
				presentationElements.each(function(index2){
				if(visibleElementPos != null){
					$(this).removeClass("show-out");
					$(this).addClass("show-in");
					return false;
				}
				if($(this).hasClass("show-in")){
						$(this).removeClass("show-in");
					$(this).addClass("show-out");
				visibleElementPos = index2;
				}
			});
			if(visibleElementPos == (presentationElements.length - 1)){
				presentationElements.first().removeClass("show-out");
				presentationElements.first().addClass("show-in");
			}
		}, settings.time);
	});
	return this;
};
}( jQuery ));
