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
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState("tabList");

  useEffect(() => {
    dispatch(fetchBillingCycles());
    // inicializar form com valores em branco
    dispatch(clearForm());
  }, [dispatch]);

  function showCreate() {
    setActiveTab("tabCreate");
    dispatch(clearForm());
  }

  function showUpdate(item) {
    setActiveTab("tabUpdate");
    dispatch(setFormValues(item));
  }

  function showDelete(item) {
    setActiveTab("tabDelete");
    dispatch(setFormValues(item));
  }

  return (
    <div>
      <ContentHeader title="Ciclos de Pagamentos" small="Cadastro" />
      <Content>
        <Tabs>
          <TabsHeader>
            <TabHeader
              label="Listar"
              icon="bars"
              target="tabList"
              active={activeTab === "tabList"}
              onClick={() => setActiveTab("tabList")}
            />
            <TabHeader
              label="Incluir"
              icon="plus"
              target="tabCreate"
              active={activeTab === "tabCreate"}
              onClick={showCreate}
            />
            <TabHeader
              label="Alterar"
              icon="pencil"
              target="tabUpdate"
              active={activeTab === "tabUpdate"}
            />
            <TabHeader
              label="Excluir"
              icon="trash-o"
              target="tabDelete"
              active={activeTab === "tabDelete"}
            />
          </TabsHeader>
          <TabsContent>
            <TabContent id="tabList" visible={activeTab === "tabList"}>
              <BillingCycleList onEdit={showUpdate} onDelete={showDelete} />
            </TabContent>
            <TabContent id="tabCreate" visible={activeTab === "tabCreate"}>
              <BillingCycleForm onSubmitType="create" />
            </TabContent>
            <TabContent id="tabUpdate" visible={activeTab === "tabUpdate"}>
              <BillingCycleForm onSubmitType="update" />
            </TabContent>
            <TabContent id="tabDelete" visible={activeTab === "tabDelete"}>
              <BillingCycleForm onSubmitType="remove" readOnly />
            </TabContent>
          </TabsContent>
        </Tabs>
      </Content>
    </div>
  );
}
