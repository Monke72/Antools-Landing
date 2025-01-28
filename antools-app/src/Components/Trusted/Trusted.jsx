import google from "./Icon/google.png";
import microsoft from "./Icon/microsoft.png";
import slack from "./Icon/slack.png";
import wordpress from "./Icon/google.png";

function Trusted() {
  return (
    <section className="trusted container">
      <div className="trusted__wrapper">
        <h3 className="trusted__title">Trusted more than 150+ brand</h3>
        <div className="trusted__brands">
          <ul className="trusted__brands-list">
            <li className="trusted__brands-item">
              <img src={google} alt="" />
            </li>
            <li className="trusted__brands-item">
              <img src={microsoft} alt="" />
            </li>
            <li className="trusted__brands-item">
              <img src={slack} alt="" />
            </li>
            <li className="trusted__brands-item">
              <img src={wordpress} alt="" />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Trusted;
