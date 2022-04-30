//https://blog.betrybe.com/desenvolvimento-web/yup/
import React from "react";
import ReactDOM from "react-dom";
import { useFormik } from "formik";
import "./styles.css";
import * as yup from "yup";
 
const ExemploTrybe = () => {
  const formik = useFormik({
    initialValues: {
      nome: "",
      email: "",
      idade: "",
    },
    validationSchema: yup.object({
      nome: yup.string().required("O campo é obrigatório."),
      email: yup
        .string()
        .email("E-mail inválido.")
        .required("O campo é obrigatório."),
      idade: yup
        .number()
        .required("O campo é obrigatório.")
        .positive("O campo deve ser positivo.")
        .integer("O campo deve ser um número inteiro."),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="nome">Nome</label>
      <input
        id="nome"
        name="nome"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.nome}
      />
      {formik.touched.nome && formik.errors.nome ? (
        <div>{formik.errors.nome}</div>
      ) : null}
      <label htmlFor="email">E-mail</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? (
        <div>{formik.errors.email}</div>
      ) : null}
      <label htmlFor="idade">Idade</label>
      <input
        id="idade"
        name="idade"
        type="number"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.idade}
      />
      {formik.touched.idade && formik.errors.idade ? (
        <div>{formik.errors.idade}</div>
      ) : null}
      <button type="submit">Enviar</button>
    </form>
  );
};
 
function App() {
  return <ExemploTrybe />;
}
 
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
