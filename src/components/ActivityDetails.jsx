// src/components/ActivityDetails.jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ActivityDetails.css'; // Asegúrate de crear este archivo para los estilos

export const ActivityDetails = ({ activities }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const activity = activities.find(act => act.id === parseInt(id));

  if (!activity) {
    return <div>Actividad no encontrada.</div>;
  }

  const handlePaymentSimulation = (e) => {
    e.preventDefault();
    // Simula la confirmación de la reserva
    console.log(`Simulando pago para "${activity.title}".`);
    alert("¡Reserva confirmada con éxito! Su pago ha sido procesado.");

    // Redirigir al usuario a la página de éxito o principal
    navigate('/');
  };

  return (
    <div className="activity-details-container">
      <img src={activity.photoUrl} alt={activity.title} className="details-image" />
      <h1>{activity.title}</h1>
      <p>{activity.description}</p>
      <p>Precio: ${activity.price}</p>
      <p>Disponibilidad: {activity.availability}</p>

      {/* Formulario de Pago de Prueba */}
      <form onSubmit={handlePaymentSimulation} className="payment-form">
        <h3>Detalles de Pago</h3>
        <input type="text" placeholder="Número de tarjeta de prueba" required />
        <input type="text" placeholder="Fecha de vencimiento (MM/AA)" required />
        <input type="text" placeholder="CVC" required />
        <button type="submit" className="pay-button">
          Proceder al Pago
        </button>
      </form>
    </div>
  );
};