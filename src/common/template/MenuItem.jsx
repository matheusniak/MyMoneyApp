import React from "react";
import { Link } from "react-router-dom";

export default function MenuItem({ path, label, icon }) {
  return (
    <li>
      <Link to={path}>
        <i className={`fa fa-${icon}`} /> <span>{label}</span>
      </Link>
    </li>
  );
}
