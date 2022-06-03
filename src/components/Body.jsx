import React, { Fragment, useState } from "react";

export const Body = () => {
  const [contador, setContador] = useState(0)
  return (
    <>
      <div className="hola">Contador React</div>
      <div className="content">
        <p className="pe">Cantidad de click</p>
        <button className="btn" onClick={()=>setContador(contador+1)}> Click</button>
        <button className="btn" onClick={()=>setContador(contador-1)}> Click</button>
        <p>{contador}</p>
      </div>
    </>
  );
};
