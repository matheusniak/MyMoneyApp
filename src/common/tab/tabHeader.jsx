import React from "react";
export default function TabHeader({ label, icon, onClick, active }) {
  return (
    <li className={active ? "active" : ""}>
      <a href="#!" onClick={onClick} className="tab-header-link">
        <i className={`fa fa-${icon}`}></i> {label}
      </a>
    </li>
  );
}
