import React from "react";
import MenuItem from "./MenuItem";
import MenuTree from "./MenuTree";

export default function Menu() {
  return (
    <ul className="sidebar-menu" data-widget="tree">
      <MenuItem path="/" label="Dashboard" icon="dashboard" />
      <MenuTree label="Cadastro" icon="edit">
        <MenuItem
          path="/billingCycles"
          label="Ciclos de Pagamento"
          icon="usd"
        />
      </MenuTree>
    </ul>
  );
}
