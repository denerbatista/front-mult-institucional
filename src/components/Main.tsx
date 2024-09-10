import React from "react";
import "./Main.css";

const Main: React.FC = () => {
  return (
    <main className="main-content">
      <div className="background-image"/>
      <div className="content">
        <h1>SLOGAN EM CAIXA ALTA</h1>
        <p>Nós oferecemos soluções inovadoras para melhorar a sua empresa.</p>
        <button className="cta-button">Faça um Orçamento</button>
      </div>
    </main>
  );
};

export default Main;
