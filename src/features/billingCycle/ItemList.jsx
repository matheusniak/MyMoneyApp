import React from "react";
import Grid from "../../common/layout/Grid";
import Input from "../../common/form/Input";

export default function ItemList({
  cols,
  list = [],
  readOnly,
  fieldName,
  legend,
  append,
  remove,
  register,
  control,
  showStatus,
}) {
  return (
    <Grid cols={cols}>
      <fieldset>
        <legend>{legend}</legend>
        <table className="table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Valor</th>
              {showStatus && <th>Status</th>}
              <th className="table-actions">Ações</th>
            </tr>
          </thead>
          <tbody>
            {(list || []).map((item, index) => (
              <tr key={index}>
                <td>{/* placeholder para Input */}</td>
                <td>{/* placeholder para Input */}</td>
                {showStatus && <td>{/* placeholder */}</td>}
                <td>{/* botões serão adicionados no próximo commit */}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </fieldset>
    </Grid>
  );
}
