import React from "react";

export default function Footer() {
  return (
    <footer className="main-footer">
      <strong>
        Copyright &copy; {new Date().getFullYear()}{" "}
        <a href="#" target="_blank" rel="noreferrer">
          MyMoneyApp
        </a>
        .
      </strong>{" "}
      Todos os direitos reservados.
    </footer>
  );
}
