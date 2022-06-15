
$(document).ready(function () {

	let formulario = $('#FormularioContacto');
	// validaciones
	let Correo = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/

	const expresiones = {
		usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
		nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
		password: /^.{4,12}$/, // 4 a 12 digitos.
		
		telefono: /^\d{7,14}$/ // 7 a 14 numeros.
	}

	const ValidarForm = (e) => {
		console.log(Correo.test(e.target.email))
		if  (Correo.test(e.target.email)) {
			alert("email valido");
			console.log("correcto");
		}
		if ( (Correo.test(e.target.email)) === false ) {
			console.log("error");
		}
		// if (textCamp.value.length > 20 ) {
		// 	console.log("20")
		// }
	}


	$(formulario).submit(function(e) {
		e.preventDefault();
		let Email = $('#email').val();
		let textCamp = $('#campoTexto').val();

		if  (!Correo.test(Email)) {
			console.log("Email invalido");
			return;
		}

		console.log("Formulario enviado")
	})

});

