import { Button } from "antd";
import { useEffect, useState } from "react";

function More() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("./../../data")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <section className="more container">
      <div className="more__info">
        <h3 className="more__info-title">Newcomer Tools</h3>
        <p className="more__info-text">
          Wow! see the latest update of the most recommended tools from reliable
          designers and developers
        </p>
        <Button>Explore More</Button>
      </div>
      <div className="more__tools"></div>
    </section>
  );
}

export default More;
