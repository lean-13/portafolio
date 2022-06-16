
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
	const mensajeError = (Errores) => {
		Errores.forEach(item => {
			$(item.tipo).removeClass("d-none");
			$(item.tipo).text(item.msg);

		})
	}
	const resetForm = () => {
		$(formulario)[0].reset()
	}


	$(formulario).submit(function(e) {
		e.preventDefault();
		let Email = $('#email').val();
		let textCamp = $('#campoTexto').val();

		$(alertEnviado).addClass("d-none");

		const Errores = [];

		if  (!Correo.test(Email) || !Email.trim()) {
			
			Errores.push({
				tipo: alertEmail,
				msg: "Email no valido"
			})
		}
		if (!(textCamp.length > 20) || (!textCamp.trim())) {
			Errores.push({
				tipo: alertCamp,
				msg: "Texto demasiado corto"
			})
		}
		
		if (Errores.length !== 0 ) {
			mensajeError(Errores)
			return
		}
		console.log("Formulario enviado")
		mensajeConfirmacion();
		resetForm();
	})

});

