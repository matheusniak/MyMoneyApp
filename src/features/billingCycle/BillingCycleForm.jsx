import React, { useEffect } from "react";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  createBillingCycle,
  updateBillingCycle,
  removeBillingCycle,
  setFormValues,
  clearForm,
} from "./billingCycleSlice";
import LabelAndInput from "../../common/form/LabelAndInput";
import ItemList from "./ItemList";
import Summary from "./Summary";

export default function BillingCycleForm({
  onSubmitType = "create",
  readOnly = false,
}) {
  const dispatch = useDispatch();
  const initial = useSelector((state) => state.billingCycle.formInitialValues);
  const { control, handleSubmit, reset, watch, register } = useForm({
    defaultValues: initial,
  });

  useEffect(() => {
    reset(initial);
  }, [initial, reset]);

  const {
    fields: credits,
    append: appendCredit,
    remove: removeCredit,
  } = useFieldArray({ control, name: "credits" });
  const {
    fields: debts,
    append: appendDebt,
    remove: removeDebt,
  } = useFieldArray({ control, name: "debts" });

  const watchedCredits = watch("credits") || [];
  const watchedDebts = watch("debts") || [];

  function submit(values) {
    if (onSubmitType === "create") {
      dispatch(createBillingCycle(values));
    } else if (onSubmitType === "update") {
      dispatch(updateBillingCycle(values));
    } else if (onSubmitType === "remove") {
      dispatch(removeBillingCycle(values));
    }
    // optionally clear form
    dispatch(clearForm());
  }

  // summary calc
  const sum = (arr) =>
    (arr || []).map((x) => +x.value || 0).reduce((t, v) => t + v, 0);
  const sumOfCredits = sum(watchedCredits);
  const sumOfDebts = sum(watchedDebts);

  return (
    <form onSubmit={handleSubmit(submit)} role="form">
      <div className="box-body">
        <LabelAndInput
          name="name"
          label="Nome"
          register={register}
          readOnly={readOnly}
          placeholder="Informe o nome"
        />
        <LabelAndInput
          name="month"
          type="number"
          label="Mês"
          register={register}
          readOnly={readOnly}
          placeholder="Informe o mês"
        />
        <LabelAndInput
          name="year"
          type="number"
          label="Ano"
          register={register}
          readOnly={readOnly}
          placeholder="Informe o ano"
        />

        <Summary credit={sumOfCredits} debt={sumOfDebts} />

        <ItemList
          cols="12 6"
          list={credits}
          readOnly={readOnly}
          fieldName="credits"
          append={appendCredit}
          remove={removeCredit}
          register={register}
          control={control}
          legend="Créditos"
        />

        <ItemList
          cols="12 6"
          list={debts}
          readOnly={readOnly}
          fieldName="debts"
          append={appendDebt}
          remove={removeDebt}
          register={register}
          control={control}
          legend="Débitos"
          showStatus
        />
      </div>

      <div className="box-footer">
        <button
          type="submit"
          className={`btn btn-${
            onSubmitType === "create"
              ? "primary"
              : onSubmitType === "update"
              ? "info"
              : "danger"
          }`}
        >
          {onSubmitType === "create"
            ? "Incluir"
            : onSubmitType === "update"
            ? "Alterar"
            : "Excluir"}
        </button>
        <button
          type="button"
          className="btn btn-default"
          onClick={() => dispatch(clearForm())}
        >
          Cancelar
        </button>
      </div>
    </form>
  );
}
