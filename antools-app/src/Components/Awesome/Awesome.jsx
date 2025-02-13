import illustration from "./image/Illustration.png";
import Button from "../Button";
import searchIcon from "./icon/search.svg";
import facebookIcon from "./icon/facebook.svg";
import instIcon from "./icon/instagram.svg";
import twitIccon from "./icon/twitter.svg";
function Awesome() {
  return (
    <section className="awesome container">
      <div className="awesome-wrapper ">
        <div className="awesome_stay-con">
          <div className="awesome__info">
            <h2 className="awesome__info-title title">
              Awesome tools for <br /> Designer & Developer<span>.</span>
            </h2>
            <p className="awesome__info-text">
              Antool is a web collection of information on paid or <br /> free
              Design and Development tools
            </p>
            <form className="awesome__info-form" action="">
              <div className="awesome__info-form__con">
                <span>
                  <img src={searchIcon} alt="" />
                </span>
                <input type="text" placeholder="find more than 430+ tools..." />
              </div>
              <Button btnClass="awesome__btn" color={"#fff"} active>
                Search
              </Button>
            </form>
          </div>
          <div className="awesome__socials">
            <ul className="awesome__socials-list">
              <li className="awesome__socials-item">
                <a href="" className="awesome__socials-link">
                  <img
                    className="awesome__socials-icon"
                    src={facebookIcon}
                    alt=""
                  />
                </a>
              </li>
              <li className="awesome__socials-item">
                <a href="" className="awesome__socials-link">
                  <img
                    className="awesome__socials-icon"
                    src={instIcon}
                    alt=""
                  />
                </a>
              </li>
              <li className="awesome__socials-item">
                <a href="" className="awesome__socials-link">
                  <img
                    className="awesome__socials-icon"
                    src={twitIccon}
                    alt=""
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <img className="awesome__image" src={illustration} alt="" />
    </section>
  );
}

export default Awesome;
