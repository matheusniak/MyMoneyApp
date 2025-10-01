import React from "react";
import { useSelector } from "react-redux";

export default function BillingCycleList({ onEdit, onDelete }) {
  const list = useSelector((state) => state.billingCycle.list) || [];

  function renderRows() {
    return list.map((bc) => (
      <tr key={bc._id}>
        <td>{bc.name}</td>
        <td>{bc.month}</td>
        <td>{bc.year}</td>
        <td>
          <button className="btn btn-warning" onClick={() => onEdit(bc)}>
            <i className="fa fa-pencil"></i>
          </button>
          <button className="btn btn-danger" onClick={() => onDelete(bc)}>
            <i className="fa fa-trash-o"></i>
          </button>
        </td>
      </tr>
    ));
  }

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
        <tbody>{renderRows()}</tbody>
      </table>
    </div>
  );
}
