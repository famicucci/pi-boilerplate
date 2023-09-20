import * as yup from "yup";

export default yup.object().shape({
  name: yup.string().required("El campo email es requerido"),
  age: yup.number().typeError("El campo edad es requerido"),
  city: yup.string().required("El campo ciudad es requerido"),
});
