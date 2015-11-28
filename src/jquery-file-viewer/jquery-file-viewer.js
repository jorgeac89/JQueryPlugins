(function( $ ) {
	$.fn.fileViewer = function (action) {
		var self = this;
		if(action === null){
			$(self).click(function() {
				$(self).addClass("hidden");
				$(self).find("iframe").addClass("hidden");
				//$(self).find("iframe").attr("src", null);
			});
			$(self).find("iframe").click(function() {
				event.stopPropagation();
			});
			$(self).find("iframe").load(function() {
				if ($(this).attr("src") != null) {
					$(this).removeClass("hidden");
					$(self).removeClass("hidden");
				}
			});
		}else if(action === "open"{
			$(this).removeClass("hidden");
			$(self).removeClass("hidden");
		}else if(action === "safeOpen"{
			if ($(this).attr("src") != null) {
				$(this).removeClass("hidden");
				$(self).removeClass("hidden");
			}
		}else if(typeof action === "object"){
			if(action.src != null){
				$(self).find("iframe").attr("src", action.src);
			}
		}
	}
}( jQuery ));
