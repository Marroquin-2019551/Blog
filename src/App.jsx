import React, { useState } from 'react';
import { Informacion } from './Pages/Informacion';
import "./App.css";
import { useRoutes } from "react-router-dom";
import { routes } from "./routes";

function App() {
  
  const [isLoading, setIsLoading] = useState(false);

  
  const routesElements = useRoutes(routes);

  return (
    <>
     
      <div className='main-content'>
        
        {isLoading && <p>Cargando...</p>}
       
        {routesElements}
      </div>
    </>
  );
}

export default App;
