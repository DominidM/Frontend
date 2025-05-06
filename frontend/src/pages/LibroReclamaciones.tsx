//import { Outlet } from 'react-router-dom';
//import React from 'react';
import { Hero } from "../components/Hero";
import  {LibroReclamacionesForm}  from "../components/Reclamos/LibroReclamaciones";

function LibroReclamaciones() {
    return (
      <div className="min-h-screen bg-gray-100">
        <Hero />  
        <LibroReclamacionesForm/>
      </div>
    );
}

export default LibroReclamaciones;
