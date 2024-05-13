import { Info } from "../Components/Info" 
import { Content } from "../Components/Content"
import { Navbar } from "../Components/Navbar"
import { Taller } from "./Taller"
import { Tecnologia } from "./Tecnologia"
import { Practica } from "./Practica"

import { useState } from "react";

export const Informacion = () => {
  const [selectedMateria, setSelectedMateria] = useState("Taller");

  const handleMaterias = (materia) => {
    setSelectedMateria(materia);
    console.log(`Cambiando a ${materia}`);
  };

  return (
    <>
      <div className="informacion-container">
        <Navbar />
        <Content handleMaterias={handleMaterias} />
        <Info handleMaterias={handleMaterias} />
        {selectedMateria === "Taller" && <Taller />}
        {selectedMateria === "Tecnología" && <Tecnologia />}
        {selectedMateria === "Practica" && <Practica />}
      </div>
    </>
  );
};