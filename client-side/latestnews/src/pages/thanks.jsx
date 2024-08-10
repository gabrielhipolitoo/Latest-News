import React from "react";
import { Link } from "react-router-dom";
function Thanks() {
  return (
    <main className="content-main">
      <h1>LatestNews</h1>
      <p>Obrigado por assinar nosso canal de noticas</p>
      <Link to="/">Voltar para o inicio</Link>
    </main>
  );
}

export default Thanks;
