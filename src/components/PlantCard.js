import React from "react";

function PlantCard({ plant, markSoldOut }) {
  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {plant.soldOut ? (
        <button>Out of Stock</button>
      ) : (
        <button className="primary" onClick={() => markSoldOut(plant.id)}>
          In Stock
        </button>
      )}
    </li>
  );
}

export default PlantCard;