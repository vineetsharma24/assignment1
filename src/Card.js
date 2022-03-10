import * as React from "react";
import "./Card.css";
import { Link } from "react-router-dom";
export default function MediaCard({ img, title, url }) {
  return (
    <div className="card">
      <img src={img} alt="hi" />
      <div className="card-body">
        <h2>{title}</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>
        <Link to={`/player?url=${url}`}>Play</Link>
      </div>
    </div>
  );
}
