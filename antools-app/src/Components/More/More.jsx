import Button from "./../Button";
import { useEffect, useState } from "react";
import dataJson from "../../data.json";
import Tools from "../Tools";
console.log(dataJson);
import php from "./Icon/phpstorm.svg";
import proCreate from "./Icon/procreate.svg";
import toolbox from "./Icon/toolbox_app.svg";
import zeplin from "./Icon/zeplin.svg";
const array = [
  {
    name: "Zeplin",

    src: zeplin,
  },
  {
    name: "PHPStorm",

    src: php,
  },
  {
    name: "Toolbox",
    src: toolbox,
  },
  {
    name: "Procreate",
    src: proCreate,
  },
];
const moreClass = "more--tools";

function More() {
  return (
    <section className="more container">
      <div className="more__info">
        <h3 className="more__info-title">Newcomer Tools</h3>
        <p className="more__info-text">
          Wow! see the latest update of the most recommended tools from reliable
          designers and developers
        </p>
        <Button active color="#fff" btnClass="more__btn">
          Explore More
        </Button>
      </div>
      <div className="more__tools">
        <Tools data={dataJson} array={array} classN={moreClass} />
      </div>
    </section>
  );
}

export default More;
