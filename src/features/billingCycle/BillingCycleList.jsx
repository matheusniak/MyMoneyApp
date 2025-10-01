import React from "react";
import { useSelector } from "react-redux";

export default function BillingCycleList({ onEdit, onDelete }) {
  const list = useSelector((state) => state.billingCycle.list) || [];

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Mês</th>
            <th>Ano</th>
            <th className="table-actions">Ações</th>
          </tr>
        </thead>
        <tbody>{/* rows serão gerados no commit seguinte */}</tbody>
      </table>
    </div>
  );
}
