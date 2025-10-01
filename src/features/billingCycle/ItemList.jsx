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
              <tr key={item.id}>
                <td>
                  <Input
                    {...register(`${fieldName}.${index}.name`)}
                    placeholder="Informe o nome"
                    readOnly={readOnly}
                  />
                </td>
                <td>
                  <Input
                    {...register(`${fieldName}.${index}.value`)}
                    placeholder="Informe o valor"
                    readOnly={readOnly}
                  />
                </td>
                {showStatus && (
                  <td>
                    <Input
                      {...register(`${fieldName}.${index}.status`)}
                      placeholder="Informe o status"
                      readOnly={readOnly}
                    />
                  </td>
                )}
                <td>
                  <button
                    type="button"
                    className="btn btn-success"
                    onClick={() => append({ name: "", value: 0 })}
                  >
                    <i className="fa fa-plus"></i>
                  </button>
                  <button
                    type="button"
                    className="btn btn-warning"
                    onClick={() => append({ ...item })}
                  >
                    <i className="fa fa-clone"></i>
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => remove(index)}
                  >
                    <i className="fa fa-trash-o"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </fieldset>
    </Grid>
  );
}
