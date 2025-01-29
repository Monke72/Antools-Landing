import React from "react";
import Ronald from "./Image/ronald.png";
import { Carousel } from "antd";

function Dev() {
  return (
    <section className="dev container">
      <Carousel arrows infinite={false}>
        <div className="dev__slide">
          <div className="dev__slide-people">
            <img className="dev__slide-people__image" src={Ronald} alt="" />
            <span className="dev__slide-people__name">
              <h4 className="dev__slide-people__name-all">Ronald Richards</h4>
              <p className="dev__slide-people__name-prof">Product Manager</p>
            </span>
          </div>
          <div className="dev__slide-info">
            <div className="dev__slide-info__text">
              Incididunt cillum do sint sint enim ullamco id deserunt mollit qui
              reprehenderit do. Velit ex tempor cillum ad sint occaecat. Do
              nulla velit labore occaecat do deserunt Lorem magna officia
              incididunt consectetur amet. Sunt consectetur veniam minim ex
              commodo sint non. Occaecat aute officia excepteur non laboris id
              qui ad.
            </div>
          </div>
        </div>
        <div className="dev__slide">
          <div className="dev__slide-people">
            <img className="dev__slide-people__image" src={Ronald} alt="" />
            <span className="dev__slide-people__name">
              <h4 className="dev__slide-people__name-all">Ronald Richards</h4>
              <p className="dev__slide-people__name-prof">Product Manager</p>
            </span>
          </div>
          <div className="dev__slide-info">
            <div className="dev__slide-info__text">
              Incididunt cillum do sint sint enim ullamco id deserunt mollit qui
              reprehenderit do. Velit ex tempor cillum ad sint occaecat. Do
              nulla velit labore occaecat do deserunt Lorem magna officia
              incididunt consectetur amet. Sunt consectetur veniam minim ex
              commodo sint non. Occaecat aute officia excepteur non laboris id
              qui ad.
            </div>
          </div>
        </div>
        <div className="dev__slide">
          <div className="dev__slide-people">
            <img className="dev__slide-people__image" src={Ronald} alt="" />
            <span className="dev__slide-people__name">
              <h4 className="dev__slide-people__name-all">Ronald Richards</h4>
              <p className="dev__slide-people__name-prof">Product Manager</p>
            </span>
          </div>
          <div className="dev__slide-info">
            <div className="dev__slide-info__text">
              Incididunt cillum do sint sint enim ullamco id deserunt mollit qui
              reprehenderit do. Velit ex tempor cillum ad sint occaecat. Do
              nulla velit labore occaecat do deserunt Lorem magna officia
              incididunt consectetur amet. Sunt consectetur veniam minim ex
              commodo sint non. Occaecat aute officia excepteur non laboris id
              qui ad.
            </div>
          </div>
        </div>
      </Carousel>
    </section>
  );
}

export default Dev;
