
$(document).ready(function () {

	let formulario = $('#FormularioContacto');
	// validaciones
	let Correo = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/

	let alertEmail = $('#alertEmail');
	let alertCamp = $('#alertTextCamp');
	let alertEnviado = $('#alertEnviado');

	const mensajeConfirmacion = () => {
		$(alertEnviado).removeClass("d-none");
	}


	$(formulario).submit(function(e) {
		e.preventDefault();
		let Email = $('#email').val();
		let textCamp = $('#campoTexto').val();

		$(alertEnviado).addClass("d-none");

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
		mensajeConfirmacion();
	})

});

