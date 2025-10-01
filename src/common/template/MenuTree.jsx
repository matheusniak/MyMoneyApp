import React, { useState } from "react";

export default function MenuTree({ label, icon, children }) {
  const [open, setOpen] = useState(false);

  return (
    <li className={`treeview ${open ? "menu-open" : ""}`}>
      <a href="#!" onClick={() => setOpen(!open)}>
        <i className={`fa fa-${icon}`} /> <span>{label}</span>
        <span className="pull-right-container">
          <i className="fa fa-angle-left pull-right" />
        </span>
      </a>
      <ul
        className="treeview-menu"
        style={{ display: open ? "block" : "none" }}
      >
        {children}
      </ul>
    </li>
  );
}
