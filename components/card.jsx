"use client";
import { useState, useEffect } from "react";

function Card({ id, valor }) {
  const [personagem, setPersonagem] = useState(null);

  const texto = "text-[#7dffb1]/70 text-xs";

  useEffect(() => {
    async function BuscaDados() {
      const resposta = await fetch(
        `https://rickandmortyapi.com/api/character/${id}`
      );
      const dados = await resposta.json();
      setPersonagem(dados);
    }

    BuscaDados();
  }, [id]);

  if (!personagem) return <p>Carregando...</p>;

  console.log(personagem.error);
  if (personagem.error == "Character not found") {
    return <h1>VARIANT DOES NOT EXIST IN THIS REALITY</h1>;
  }

  if (valor != "") {
    return (
      <div className="flex justify-between">
        <div>
          <p className={texto}>Name //</p>
          <h2 className="text-[#9affc6]">{personagem.name}</h2>
          <p className={texto}>Species //</p>
          <p className="text-[#9affc6]">{personagem.species}</p>
          <p className={texto}>Localization //</p>
          <p className="text-[#9affc6]">{personagem.location?.name}</p>
        </div>
        
        <img
          width={120}
          height={120}
          src={personagem.image}
          alt=""
          className="
    relative
    z-10
    opacity-90
    contrast-110
    saturate-110
  shadow-[inset_0_0_10px_rgba(0,0,0,0.7),0_0_12px_rgba(44,255,136,0.6)] "
        />
      </div>
    );
  }
}

export default Card;
