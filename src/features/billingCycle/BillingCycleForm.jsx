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

  return (
    <form onSubmit={handleSubmit(() => {})} role="form">
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
        {/* ItemList e Summary serão integrados nos commits seguintes */}
      </div>
      <div className="box-footer">{/* botões serão adicionados depois */}</div>
    </form>
  );
}
