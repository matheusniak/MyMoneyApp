import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="main-header">
      <a href="/" className="logo" aria-label="Home">
        <span className="logo-mini">
          <b>M</b>y
        </span>
        <span className="logo-lg">
          <b>My</b>App
        </span>
      </a>

      <nav className="navbar navbar-static-top" role="navigation">
        {/* Botão hamburger – sem lógica ainda */}
        <a href="#" className="sidebar-toggle" role="button">
          <span className="sr-only">Toggle navigation</span>
        </a>

        {/* Dropdown menu vazio */}
        <div className="dropdown-menu-sidebar" role="menu" aria-hidden="true">
          <nav>
            <ul style={{ listStyle: "none", margin: 0, padding: "8px 0" }}>
              <li>
                <Link to="/">Dashboard</Link>
              </li>
              <li>
                <Link to="/billingCycles">Ciclos de Pagamentos</Link>
              </li>
              <li>
                <Link to="/other">Outros</Link>
              </li>
            </ul>
          </nav>
        </div>
      </nav>
    </header>
  );
}
