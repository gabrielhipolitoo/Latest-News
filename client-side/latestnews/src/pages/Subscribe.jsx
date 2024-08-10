import React, { useEffect } from "react";
import UseValidationForm from "../hooks/useValidationForm";
import UseFetch from "../hooks/useFetch";
import { useNavigate } from "react-router-dom";
function Subscribe() {
  const navigate = useNavigate();
  const { response, fetchApi, setResponse } = UseFetch();
  const {
    register,
    handleSubmit: onSubmit,
    errors,
    setError,
    clearErrors,
  } = UseValidationForm();

  const handleForm = (data) => {
    fetchApi(data, "sendMail");
  };
  console.log(response);
  useEffect(() => {
    return () => setResponse("");
  }, [errors]);

  // useEffect(() => {
  //   fetchApi();
  //   console.log(response);
  // }, []);
  return (
    <main className="content-main">
      <h1>LatestNews</h1>
      <p>
        Não perca nenhuma novidade! Receba as últimas notícias diretamente no
        seu email. Mantenha-se informado de tudo o que acontece assinando nosso
        serviço de envio de noticia
      </p>
      <p>Junte-se aos 2 inscritos</p>
      <form onSubmit={onSubmit(handleForm)}>
        <label>
          <input
            type="text"
            placeholder="Digite seu email"
            name="email"
            {...register("email")}
          />
        </label>
        <button type="submit">Inscrever-se</button>
      </form>
      <span className="error">{errors ? errors.email?.message : ""}</span>
      <span className="error">{response ? response?.errorcode : ""}</span>
    </main>
  );
}

export default Subscribe;
