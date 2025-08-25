import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ActivitiesList } from './components/ActivitiesList';
import { activities } from './data';
import { ActivityDetails } from './components/ActivityDetails'; // Componente que crearás a continuación

import './App.css'; // Estilos globales

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          {/* Ruta para la lista de actividades */}
          <Route path="/" element={<ActivitiesList activities={activities} />} />

          {/* Ruta para el detalle de una actividad */}
          <Route path="/activity/:id" element={<ActivityDetails activities={activities} />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;