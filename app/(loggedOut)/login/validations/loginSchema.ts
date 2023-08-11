import * as yup from 'yup';

export default yup.object().shape({
	email: yup
		.string()
		.email('Debe ser un email válido')
		.required('El campo email es requerido'),
	password: yup.string().required('El campo contraseña es requerido'),
});
