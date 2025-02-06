import iconHeader from "./Icon/headerIcon.svg";
import strDown from "./Icon/Vector.svg";
import Buttonn from "../Button";
import { Menu } from "antd";
import { AppstoreOutlined } from "@ant-design/icons";
import React, { useRef, useState } from "react";
import { Button, Modal } from "antd";

const items = [
  {
    key: "sub1",
    label: "Navigation",
    icon: <AppstoreOutlined />,
    children: [
      {
        key: "1",
        label: "Home",
      },
      {
        key: "2",
        label: "Categories",
      },

      {
        key: "4",
        label: "Blog",
      },
    ],
  },
];

function Header() {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [logValue, setLogValue] = useState("");
  const [inputError, setInputError] = useState(false);
  const inputLog = useRef();

  // const [modalText, setModalText] = useState("Content of the modal");
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    if (inputLog.current.value.length < 3) {
      setInputError(true);
      return;
    } else {
      setConfirmLoading(true);
      setTimeout(() => {
        setOpen(false);
        setConfirmLoading(false);
      }, 2000);
    }
  };
  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };

  const width = window.innerWidth;

  const onClick = (e) => {
    console.log("click ", e);
  };

  return (
    <section className="header container">
      <div className="header__name">
        <img src={iconHeader} className="header__name-image" alt="" />
        <p className="header__name-title">antools.</p>
      </div>
      <div className="header__burger">
        {width > 1149 ? (
          <ul className="header__list">
            <li className="header__item">
              <a href="" className="header__link">
                Home
              </a>
            </li>
            <li className="header__item">
              <a href="" className="header__link">
                Categories
              </a>
            </li>
            <li className="header__item header__item-menu">
              <a href="" className="header__link">
                My Collections
              </a>
              <span>
                <img src={strDown} alt="" />
              </span>
            </li>
            <li className="header__item">
              <a href="" className="header__link">
                Blog
              </a>
            </li>
          </ul>
        ) : (
          <Menu
            onClick={onClick}
            style={{
              width: 256,
            }}
            defaultSelectedKeys={["1"]}
            // defaultOpenKeys={["sub1"]}
            mode="inline"
            items={items}
          />
        )}
      </div>
      <div className="header__buttons">
        <Buttonn color={"var(--color-gray)"} showModal={showModal}>
          Login
        </Buttonn>
        <Buttonn active color={"#FDF5FF"}>
          Sign Up
        </Buttonn>
      </div>
      <Modal
        title="Ввойдите в аккаунт"
        open={open}
        okText={"Войти"}
        cancelText={"Выйти"}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <form action="login__form">
          <p className="field">
            <label className="label__for" htmlFor="login">
              Введите логин
            </label>
            <input
              onChange={(e) => setLogValue(e.target.value)}
              value={logValue}
              type="text"
              ref={inputLog}
              id="login"
              name="login"
              className={`input__class ${inputError && "input__error"}`}
              required
              minLength={5}
              maxLength={12}
            />
          </p>
          <p className="field">
            <label className="label__for" htmlFor="password">
              Введите пароль
            </label>
            <input
              type="text"
              id="password"
              name="password"
              className="input__class"
              required
              minLength={5}
              maxLength={12}
            />
          </p>
        </form>
        <div className="input__buttons">
          <a href="." className="input__new">
            Забыли пароль?
          </a>
          <button className="input__sign">Нету аккаунта?</button>
        </div>
      </Modal>
    </section>
  );
}

export default Header;
