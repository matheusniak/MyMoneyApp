import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import App from "../app/App.jsx";
import Dashboard from "../features/dashboard/Dashboard.jsx";
import BillingCycle from "../features/billingCycle/BillingCycle";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Dashboard />} />
        <Route path="billingCycles" element={<BillingCycle />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
