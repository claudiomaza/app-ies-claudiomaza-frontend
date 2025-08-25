// src/components/ActivitiesList.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './ActivitiesList.css'; 

export const ActivitiesList = ({ activities }) => {
  return (
    <div className="activities-list-container">
      <h2>Actividades Disponibles</h2>
      <div className="activities-grid">
        {activities.map(activity => (
          <div key={activity.id} className="activity-card">
            <img src={activity.photoUrl} alt={activity.title} className="activity-image" />
            <div className="activity-info">
              <h3>{activity.title}</h3>
              <p className="activity-description">{activity.description}</p>
              <p className="activity-price">Precio: ${activity.price}</p>
              <p className="activity-availability">{activity.availability}</p>
              <Link to={`/activity/${activity.id}`} className="select-button">
                Seleccionar
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

