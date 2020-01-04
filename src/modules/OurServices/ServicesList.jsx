import React from "react";
import { Link } from "react-router-dom";
import ServicesPreview from "./ServicesPreview";

export default function({ ourServices }) {
  return (
    <ul className="ourService-container">
      {ourServices.map(ourService => {
        return (
          <li key={ourService._id}>
            <Link to={`/service/${ourService._id}`}>
              <ServicesPreview ourService={ourService} />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
