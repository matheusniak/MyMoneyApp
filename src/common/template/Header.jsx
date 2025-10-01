// src/common/template/Header.jsx
import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);
  const btnRef = useRef(null);
  const menuRef = useRef(null);
  const location = useLocation();

  // Fecha o menu ao navegar
  useEffect(() => {
    setOpen(false);
  }, [location]);

  // Fecha ao clicar fora ou pressionar Esc
  useEffect(() => {
    function handleDocumentClick(e) {
      if (
        open &&
        menuRef.current &&
        btnRef.current &&
        !menuRef.current.contains(e.target) &&
        !btnRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    }

    function handleEsc(e) {
      if (e.key === "Escape") setOpen(false);
    }

    document.addEventListener("mousedown", handleDocumentClick);
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("mousedown", handleDocumentClick);
      document.removeEventListener("keydown", handleEsc);
    };
  }, [open]);

  const toggle = (e) => {
    e.preventDefault();
    setOpen((v) => !v);
  };

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

      <nav
        className="navbar navbar-static-top"
        role="navigation"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        {/* Botão hamburger */}
        <a
          href="#"
          ref={btnRef}
          className="sidebar-toggle"
          onClick={toggle}
          aria-haspopup="true"
          aria-expanded={open}
          aria-label="Toggle menu"
          role="button"
          style={{
            background: "none",
            border: "none",
            padding: "0.375rem 0.75rem",
            color: "inherit",
            fontSize: "1.25rem",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span className="sr-only">Toggle navigation</span>
          {}
        </a>

        {/* Dropdown menu que aparece ao lado do botão */}
        <div
          ref={menuRef}
          className={`dropdown-menu-sidebar ${open ? "open" : ""}`}
          role="menu"
          aria-hidden={!open}
          style={{
            position: "absolute",
            top: "56px",
            right: "10px",
            width: "220px",
            zIndex: 1200,
          }}
        >
          <nav>
            <ul style={{ listStyle: "none", margin: 0, padding: "8px 0" }}>
              <li>
                <Link to="/" style={menuLinkStyle}>
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/billingCycles" style={menuLinkStyle}>
                  Ciclos de Pagamentos
                </Link>
              </li>
              <li>
                <Link to="/other" style={menuLinkStyle}>
                  Outros
                </Link>
              </li>
              {}
            </ul>
          </nav>
        </div>
      </nav>
    </header>
  );
}

// estilo inline simples para os links
const menuLinkStyle = {
  display: "block",
  padding: "10px 16px",
  color: "#fff",
  textDecoration: "none",
};
