import React from "react";
import { Outlet } from "react-router-dom";

import Header from "../common/template/Header";
import Sidebar from "../common/template/SideBar";
import Footer from "../common/template/Footer";
import Messages from "../common/template/Messages";

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
