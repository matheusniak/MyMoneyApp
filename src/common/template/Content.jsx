import React from "react";

export default function Content({ children }) {
  return (
    <section className="content">
      <div className="row">
        <div className="col-xs-12">{children}</div>
      </div>
    </section>
  );
}
