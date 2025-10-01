import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import ContentHeader from "../../common/template/ContentHeader";
import Content from "../../common/template/Content";
import Tabs from "../../common/tab/tabs";
import TabsHeader from "../../common/tab/tabsHeader";
import TabsContent from "../../common/tab/tabsContent";
import TabHeader from "../../common/tab/tabHeader";
import TabContent from "../../common/tab/tabContent";

import BillingCycleList from "./BillingCycleList";
import BillingCycleForm from "./BillingCycleForm";
import {
  fetchBillingCycles,
  setFormValues,
  clearForm,
} from "./billingCycleSlice";

export default function BillingCycle() {
  // componente básico (sem lógica local/handlers ainda)
  return (
    <div>
      <ContentHeader title="Ciclos de Pagamentos" small="Cadastro" />
      <Content>
        {/* Tabs e conteúdo serão adicionados nos commits seguintes */}
        <Tabs />
      </Content>
    </div>
  );
}
