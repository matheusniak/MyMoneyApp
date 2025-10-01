import React from "react";
export default function TabContent({ id, visible, children }) {
  if (!visible) return null;
  return (
    <div id={id} className={`tab-pane active`}>
      {children}
    </div>
  );
}
