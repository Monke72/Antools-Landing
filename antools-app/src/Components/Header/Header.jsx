import iconHeader from "./Icon/headerIcon.svg";
import strDown from "./Icon/Vector.svg";
import Button from "../Button";

function Header() {
  return (
    <section className="header container">
      <div className="header__name">
        <img src={iconHeader} className="header__name-image" alt="" />
        <p className="header__name-title">antools.</p>
      </div>

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

      <div className="header__buttons">
        <Button color={"var(--color-gray)"}>Login</Button>
        <Button active color={"#FDF5FF"}>
          Sign Up
        </Button>
      </div>
    </section>
  );
}

export default Header;
