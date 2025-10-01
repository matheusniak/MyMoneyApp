import React from "react";

export default function ContentHeader({ title, small }) {
  return (
    <section className="content-header">
      <h1>
        {title} <small>{small}</small>
      </h1>
    </section>
  );
}
