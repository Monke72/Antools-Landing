import { useState } from "react";
import Tools from "../Tools";
import { LoadingOutlined } from "@ant-design/icons";
import { Flex, Spin } from "antd";
import figma from "../../images/figma.svg";
import invision from "../../images/invision.svg";
import notion from "../../images/notion.svg";
import sketch from "../../images/sketch.svg";
import slack from "../../images/slack.svg";
import vs from "../../images/vs.svg";

const iconMass = [
  {
    name: "Figma",
    src: figma,
  },
  {
    name: "Invision",
    src: invision,
  },
  {
    name: "Notion",
    src: notion,
  },
  {
    name: "Sketch",
    src: sketch,
  },
  {
    name: "Slack",
    src: slack,
  },
  {
    name: "Visual Studio Code",
    src: vs,
  },
];

function Popular({ data, setLimit, uploaded }) {
  const [visible, setVisible] = useState(true);
  function handleClickDel() {
    setLimit(6);
    setVisible(false);
  }
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
        {uploaded ? (
          <Tools data={data} array={iconMass} />
        ) : (
          <div
            style={{
              position: "absolute",
              top: "50%",
              width: "100%",
            }}
          >
            <Spin indicator={<LoadingOutlined spin />} size="large" />
          </div>
        )}
      </div>
      {visible && uploaded ? (
        <button className="popular__button" onClick={handleClickDel}>
          Load more
        </button>
      ) : (
        <></>
      )}
    </section>
  );
}

export default Popular;
