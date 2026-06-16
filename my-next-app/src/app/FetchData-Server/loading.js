import React from "react";

export default function Loading() {
  return (
    <div className="shimmer-container">
      <h2>Loading Todos...</h2>

      <ul className="shimmer-list">
        {Array.from({ length: 5 }).map((_, i) => (
          <li key={i} className="shimmer-item">
            <div className="shimmer-line"></div>
          </li>
        ))}
      </ul>
    </div>
  );
}
