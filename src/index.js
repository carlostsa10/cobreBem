import React from "react";
import ReactDOM from "react-dom/client";
import "./estilos/index.css";
import RotasPrincipais from "./rotas";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

   <React.StrictMode>
      <BrowserRouter>
         <RotasPrincipais />
      </BrowserRouter>
   </React.StrictMode>
);
