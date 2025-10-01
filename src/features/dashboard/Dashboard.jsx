// src/features/dashboard/Dashboard.jsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSummary } from "./dashboardSlice";
import ContentHeader from "../../common/template/ContentHeader";
import Content from "../../common/template/Content";
import ValueBox from "../../common/widget/ValueBox";
import Row from "../../common/layout/Row";

export default function Dashboard() {
  const dispatch = useDispatch();
  const summary = useSelector(
    (state) => state.dashboard.summary || { credit: 0, debt: 0 }
  );

  useEffect(() => {
    dispatch(fetchSummary());
  }, [dispatch]);

  const { credit = 0, debt = 0 } = summary;

  return (
    <div>
      <ContentHeader title="Dashboard" small="Finanças" />
      <Content>
        <Row>
          <ValueBox
            cols="12 4"
            color="green"
            icon="bank"
            value={`R$ ${credit}`}
            text="Total de Créditos"
          />
          <ValueBox
            cols="12 4"
            color="red"
            icon="credit-card"
            value={`R$ ${debt}`}
            text="Total de Débitos"
          />
          <ValueBox
            cols="12 4"
            color="blue"
            icon="money"
            value={`R$ ${credit - debt}`}
            text="Valor Consolidado"
          />
        </Row>
      </Content>
    </div>
  );
}
