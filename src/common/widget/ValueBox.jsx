import React from "react";
import Grid from "../layout/Grid";

export default function ValueBox({ cols, color, icon, value, text }) {
  return (
    <Grid cols={cols}>
      <div className={`small-box bg-${color}`}>
        <div className="inner">
          <h3>{value}</h3>
          <p>{text}</p>
        </div>
        <div className="icon">
          <i className={`fa fa-${icon}`}></i>
        </div>
      </div>
    </Grid>
  );
}
