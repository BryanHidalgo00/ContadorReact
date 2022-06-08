import React, { Fragment, useState } from "react";

export const Body = () => {
  const [contador, setContador] = useState("")
  return (
    <>
      <div className="hola">Hola ñiña JohannaUwu♡ </div>
      <div className="content">
        <p className="pe">Toca el botón que quieras</p>
        <button className="btn" onClick={()=>setContador(contador+"♡ sos lo mejor  | ")}> Tocame</button>
        <button className="btn" onClick={()=>setContador(contador+"♡ te quiero ver | ")}> Tocame</button>
        <p>{contador}</p>
      </div>
    </>
  );
};
