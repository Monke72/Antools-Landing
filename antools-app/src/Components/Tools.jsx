import { useEffect, useRef, useState } from "react";
import React from "react";
import ReactDOM from "react-dom";

function Tools({ data, array, classN }) {
  const [like, setLike] = useState([]);
  console.log(data);
  console.log(classN);

  function handleLike(index) {
    if (like.includes(index)) {
      setLike(like.filter((i) => i !== index)); //оставляя только те элементы, которые не равны index
    } else {
      setLike([...like, index]);
    }
  }
  return (
    <>
      {data.map((el, index) => (
        <div
          key={index}
          className={`tools_con ${classN !== undefined ? classN : ""} ${
            like.includes(index) ? "tools__opacity" : ""
          }`}
        >
          <div className="tools--overlay"></div>
          <div className="top__info">
            <img
              className="top__info-img"
              src={array
                .filter((img) => img.name === el.name)
                .map((img) => img.src)}
              alt=""
            />
            <div className="top__info-head">
              <p className="top__info-head__name">{el.name}</p>
              <span className="top__info-head__payment">{el.pay}</span>
            </div>
          </div>
          <div className="tools__text">
            <p className="tools__text-info">{el.text}</p>
          </div>
          <div className="tools__buttons">
            <div className="tools__buttons-main">
              <button
                className={`tools__buttons-main__like ${
                  like.includes(index) ? "button__like-selected" : ""
                }`}
                onClick={() => handleLike(index)}
              >
                <svg
                  width="26"
                  height="22"
                  viewBox="0 0 26 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.8333 0.25C16.3833 0.25 14.225 1.475 13 3.4C11.775 1.475 9.61667 0.25 7.16667 0.25C3.31667 0.25 0.166672 3.4 0.166672 7.25C0.166672 14.1917 13 21.25 13 21.25C13 21.25 25.8333 14.25 25.8333 7.25C25.8333 3.4 22.6833 0.25 18.8333 0.25Z"
                    fill={like.includes(index) ? "#FD3B41" : "white"}
                    fillOpacity={like.includes(index) ? 1 : 0.38}
                  />
                </svg>
              </button>
              <button className="tools__buttons-main__folder">
                <svg
                  width="26"
                  height="22"
                  viewBox="0 0 26 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.5 12.25H14.25V11C14.25 10.6685 14.1183 10.3505 13.8839 10.1161C13.6495 9.8817 13.3315 9.75 13 9.75C12.6685 9.75 12.3505 9.8817 12.1161 10.1161C11.8817 10.3505 11.75 10.6685 11.75 11V12.25H10.5C10.1685 12.25 9.85054 12.3817 9.61612 12.6161C9.3817 12.8505 9.25 13.1685 9.25 13.5C9.25 13.8315 9.3817 14.1495 9.61612 14.3839C9.85054 14.6183 10.1685 14.75 10.5 14.75H11.75V16C11.75 16.3315 11.8817 16.6495 12.1161 16.8839C12.3505 17.1183 12.6685 17.25 13 17.25C13.3315 17.25 13.6495 17.1183 13.8839 16.8839C14.1183 16.6495 14.25 16.3315 14.25 16V14.75H15.5C15.8315 14.75 16.1495 14.6183 16.3839 14.3839C16.6183 14.1495 16.75 13.8315 16.75 13.5C16.75 13.1685 16.6183 12.8505 16.3839 12.6161C16.1495 12.3817 15.8315 12.25 15.5 12.25Z"
                    fill="white"
                    fillOpacity="0.38"
                  />
                  <path
                    d="M22.375 4.81249H13.625L10.3375 0.837489C10.2212 0.694097 10.0745 0.578254 9.90812 0.498286C9.7417 0.418318 9.55963 0.37621 9.375 0.374989H3.625C2.80826 0.364962 2.02083 0.678982 1.43512 1.24829C0.849416 1.8176 0.513166 2.59579 0.5 3.41249V18.5875C0.513166 19.4042 0.849416 20.1824 1.43512 20.7517C2.02083 21.321 2.80826 21.635 3.625 21.625H22.375C23.1917 21.635 23.9792 21.321 24.5649 20.7517C25.1506 20.1824 25.4868 19.4042 25.5 18.5875V7.84999C25.4868 7.03329 25.1506 6.2551 24.5649 5.68579C23.9792 5.11648 23.1917 4.80246 22.375 4.81249ZM23 18.5625C22.9953 18.6392 22.9753 18.7142 22.9411 18.783C22.9069 18.8518 22.8593 18.9131 22.801 18.9632C22.7427 19.0133 22.675 19.0512 22.6019 19.0747C22.5287 19.0982 22.4515 19.1068 22.375 19.1H3.625C3.54846 19.1068 3.47132 19.0982 3.39815 19.0747C3.32498 19.0512 3.25726 19.0133 3.199 18.9632C3.14073 18.9131 3.0931 18.8518 3.05892 18.783C3.02474 18.7142 3.00471 18.6392 3 18.5625V3.41249C3.00471 3.33578 3.02474 3.2608 3.05892 3.19197C3.0931 3.12315 3.14073 3.06187 3.199 3.01176C3.25726 2.96165 3.32498 2.92373 3.39815 2.90024C3.47132 2.87675 3.54846 2.86816 3.625 2.87499H8.7875L12.0375 6.84999C12.1538 6.99338 12.3005 7.10922 12.4669 7.18919C12.6333 7.26916 12.8154 7.31127 13 7.31249H22.375C22.4515 7.30566 22.5287 7.31425 22.6019 7.33774C22.675 7.36123 22.7427 7.39915 22.801 7.44926C22.8593 7.49937 22.9069 7.56065 22.9411 7.62948C22.9753 7.6983 22.9953 7.77328 23 7.84999V18.5625Z"
                    fill="white"
                    fillOpacity="0.38"
                  />
                </svg>
              </button>
            </div>
            <div className="tools__buttons-visit">
              <button
                sx={{
                  ":hover": { bgColor: "dark" },
                }}
                className="tools__button"
              >
                Visit
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Tools;
