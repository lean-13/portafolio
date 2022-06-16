
$(document).ready(function () {

	let formulario = $('#FormularioContacto');
	// validaciones
	let Correo = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/
	let Text = /^[a-zA-Z0-9\_\-]{4,16}$/



	$(formulario).submit(function(e) {
		e.preventDefault();
		let Email = $('#email').val();
		let textCamp = $('#campoTexto').val();

		if  (!Correo.test(Email)) {
			console.log("Email invalido");
			return;
		}
		if (!(textCamp.length > 20)) {
			console.log(textCamp.length)
			console.log("Texto demasiado corto");
			return;
		}
		
		console.log("Formulario enviado")
	})

});

