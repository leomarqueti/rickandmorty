"use client";
export const dynamic = "force-dynamic";
import Card from "../components/card";
import { useState, useEffect } from "react";

export default function Home() {
  const [ido, setId] = useState("11");
  const [busca, setBusca] = useState("1");

  function Buscar() {
    const id = busca;
    setId(id);
  }

  console.log(busca);
  return (
    <>
      <div className="min-h-screen bg-[url('/bg/fundo.png')] bg-cover bg-center w-auto flex items-center justify-center ">
        <div
          className="w-[600px] flex gap-5  p-5 flex-col text-[#9affc6]
    font-mono
    tracking-wide

    border border-[#3cff8f]
    rounded-md

    bg-[#04110a]/90
    shadow-[0_0_30px_rgba(60,255,143,0.25)]"
        >
          <h2
            className="font-mono text-[#9affc6]
    tracking-widest"
          >
            SEARCH ID:
          </h2>
          <input
            type="texto"
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            className="
  w-[260px]
  h-[30px]
  px-4

  font-mono
  text-[#9affc6]
  tracking-widest

  bg-gradient-to-r
  from-[#0f3d25]
  via-[#2cff88]
  to-[#0f3d25]

  border border-[#3cff8f]/80
  rounded-sm

  shadow-[inset_0_0_10px_rgba(0,0,0,0.7),0_0_12px_rgba(44,255,136,0.6)]

  placeholder:text-[#7dffb1]/40

  focus:outline-none
  focus:shadow-[0_0_22px_rgba(44,255,136,0.9)]

  caret-[#2cff88]
  translate-y-[1px]

"
          />
          {busca && <Card id={busca} valor={busca} />}

          <p className="text-[10px] opacity-30 mt-3">
            NOTE: DATABASE BUILT BY RICK. RESULTS MAY BE WRONG.
          </p>
        </div>
      </div>
    </>
  );
}
