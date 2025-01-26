import { useState } from "react";
import Tools from "../Tools";

function Popular({ data }) {
  return (
    <section className="popular container">
      <div className="popular__info">
        <h3 className="popular__info-title title">Most Popular Tools</h3>
        <p className="popular__info-text">
          Tools for the best Designers and Developers <br /> most popularly used
          in the world
        </p>
      </div>
      <div className="popular__tools">
        <Tools data={data} />
      </div>
    </section>
  );
}

export default Popular;
