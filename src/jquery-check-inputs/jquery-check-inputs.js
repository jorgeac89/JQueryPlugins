(function ( $ ) {
/**
 * @version: 1.0.0
 * @author Jorge Antón Caballero <jorgeac@gmail.com>
 * @requires: jQuery 1.10.2+
 *
 * Método jQuery encargado de comprobar la validez de los datos introducidos en
 * función de los atributos añadidos a dichos campos. Pueden ser los siguientes:
 * -data-check-required: el campo es obligatorio
 * -data.check-format: el valor ha de cumplir con la expresión regular pasada
 *    en este atributo.
 *
 * @param params {Object}
 *		Objeto que almacena los de configuración de la función:
 *			-params.callback: función que se ejecutará al realizar la comprobación de
 *				cada campo. Dicha función recibirá dos parámetros:
 *				-flag: booleano que en estado true si el campo ha
 *					pasado la comprobación y en estado false en caso contrario.
 *				-element: objeto jQuery sobre el que se ha realizado la comprobación.
 * @returns {Boolean}
 *    True en caso de que todos los campos superen la validación, false en caso
 *    de de alguno no la supere.
 */
jQuery.prototype.checkInputs = function(params){
	var ok = true;
	$(this.selector).each(function(){
		var flag = true;
		if($(this).attr("data-check-required") != undefined && ($(this).val() == null || $(this).val() == "")){
			flag = false;
			ok = false;
		}
		if($(this).attr("data-check-format") != undefined && $(this).val() != "" && $(this).val() != null && !$(this).val().match($(this).attr("data-check-format"))){
			flag = false;
			ok = false;
		}
		if(typeof params.callback == 'function'){
			params.callback(flag, $(this));
		}
	});
	return ok;
};
}( jQuery ));
