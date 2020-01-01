import React from "react";
import { Link } from "react-router-dom";
import ServicesPreview from "./ServicesPreview";

export default function({ OurServices }) {
  return (
    <ul className="robot-list">
      {OurServices.map(service => {
        return (
          <li key={service._id}>
            <Link to={`/service/${service._id}`}>
              <ContactPreview service={service} />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
