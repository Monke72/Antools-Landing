import iconHeader from "./Icon/headerIcon.svg";
import strDown from "./Icon/Vector.svg";
import Buttonn from "../Button";
import { Menu } from "antd";
import { AppstoreOutlined } from "@ant-design/icons";
import React, { useEffect, useRef, useState } from "react";
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
  // login modal
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [inputError, setInputError] = useState(false);
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPAsswordDirty] = useState(false);
  const [emailError, setEmailError] = useState("Емаил не может быть пустым");
  const [passwordlError, setPasswordError] = useState(
    "Пароль не может быть пустым"
  );
  const [formValid, setFormValid] = useState(false);
  //sign up modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openSign, setOpenSign] = useState(false);
  const [confirmLoadingSign, setConfirmLoadingSign] = useState(false);
  const [loginSignDirty, setLoginSignDirty] = useState(false);
  const [passwordSignDirty, setPasswordSignDirty] = useState(false);
  const [dateSignDirty, setDateSignDirty] = useState(false);
  const [nameSignDirty, setNameSignDirty] = useState(false);

  const showModalSign = () => {
    setOpenSign(true);
  };

  useEffect(() => {
    if (emailError || passwordlError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, passwordlError]);

  const emailHandler = (e) => {
    setEmail(e.target.value);
    var re = /\S+@\S+\.\S+/;
    if (!re.test(e.target.value)) {
      setEmailError("Неккоректный емаил");
    } else {
      setEmailError("");
    }
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 3 || e.target.value.length > 8) {
      console.log(e.target.value.length);

      setPasswordError("Пароль должен быть длиннее 3 и меньше 8 символов");
    } else if (!e.target.value) {
      setPasswordError("Пароль не может быть пустым");
    } else {
      setPasswordError("");
    }
  };

  const blurHndler = (e) => {
    switch (e.target.name) {
      case "email":
        setEmailDirty(true);
        break;
      case "password":
        setPAsswordDirty(true);
        break;
      case "sign__name":
        setLoginSignDirty(true);
        break;
      case "sign__password":
        setPasswordSignDirty(true);
        break;
      case "sign__date":
        setDateSignDirty(true);
        break;
      case "sign__name":
        setNameSignDirty(true);
        break;
    }
  };

  // const [modalText, setModalText] = useState("Content of the modal");
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setInputError(false);
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 500);
  };
  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };

  const width = window.innerWidth;

  const onClick = (e) => {
    console.log("click ", e);
  };

  const handleCancelSign = () => {
    setOpenSign(false);
  };
  const handleOkSign = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setOpenSign(false);
      setConfirmLoading(false);
    }, 1500);
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
        <Buttonn active color={"#FDF5FF"} showModal={showModalSign}>
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
            {emailDirty && emailError && <span>{emailError}</span>}
            <input
              value={email}
              onBlur={(e) => blurHndler(e)}
              onChange={(e) => emailHandler(e)}
              type="text"
              id="login"
              name="email"
              className={`input__class ${inputError && "input__error"}`}
              required
            />
          </p>
          <p className="field">
            <label className="label__for" htmlFor="password">
              Введите пароль
            </label>
            {passwordDirty && passwordlError && <span>{passwordlError}</span>}
            <input
              onBlur={(e) => blurHndler(e)}
              type="text"
              id="password"
              name="password"
              value={password}
              className="input__class"
              onChange={(e) => passwordHandler(e)}
              required
            />
          </p>
        </form>
        <div className="input__buttons">
          <a href="." className="input__new">
            Забыли пароль?
          </a>
          <button className="input__sign">Нету аккаунта?</button>
        </div>

        <div className="header__footer-form">
          <button className="form__cancel" onClick={handleCancel}>
            Выйти
          </button>
          <button
            className="form__entry"
            disabled={!formValid}
            onClick={handleOk}
          >
            Вoйти
          </button>
        </div>
      </Modal>
      <Modal
        title="Зарегестрируйте аккаунт!"
        open={openSign}
        onCancel={handleCancelSign}
        onOk={handleOkSign}
        confirmLoading={confirmLoadingSign}
      >
        <form action="sign">
          <p className="field">
            <label className="label__for" htmlFor="sign__name">
              Введите имя
            </label>
            <input
              onBlur={(e) => blurHndler(e)}
              className="input__class"
              type="text"
              name="sign__name"
              id="sign__name"
            />
          </p>
          <p className="field">
            <label className="label__for" htmlFor="sign__date">
              Введите дату рождения
            </label>
            <input
              onBlur={(e) => blurHndler(e)}
              className="input__class"
              type="text"
              name="sign__date"
              id="sign__date"
            />
          </p>
          <p className="field">
            <label className="label__for" htmlFor="sign__login">
              Введите логин
            </label>
            <input
              onBlur={(e) => blurHndler(e)}
              className="input__class"
              type="text"
              name="sign__login"
              id="sign__login"
            />
          </p>
          <p className="field">
            <label className="label__for" htmlFor="sign__password">
              Придумайте пароль
            </label>
            <input
              onBlur={(e) => blurHndler(e)}
              className="input__class"
              type="text"
              name="sign__password"
              id="sign__password"
            />
          </p>
        </form>
        <div className="header__footer-form">
          <button
            className="sign__close form__cancel"
            onClick={handleCancelSign}
          >
            Выйти
          </button>
          <button className="sign__close form__entry" onClick={handleOkSign}>
            Зарегестрировать аккаунт
          </button>
        </div>
      </Modal>
    </section>
  );
}

export default Header;
