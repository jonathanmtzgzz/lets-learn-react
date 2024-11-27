import { useState } from "react";

export const Counter = ({ value }) => {
  const [contador, setContador] = useState(value);

  const handleClick = () => {
    setContador(contador + 1);
  };

  return (
    <>
      <h1>Contador:</h1>
      <p>{contador}</p>
      <button onClick={handleClick}>Soy un boton</button>
    </>
  );
};
