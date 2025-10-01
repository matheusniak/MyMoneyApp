import React from "react";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <div className="wrapper">
      <Header />

      {/* barra lateral */}
      <Sidebar />

      {/* conteudo principal */}
      <div className="content-wrapper">
        {}
        <Outlet />
      </div>

      <Footer />

      {/* notificação toast */}
      <Messages />
    </div>
  );
}
