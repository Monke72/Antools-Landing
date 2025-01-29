import Button from "../Button";

function Join() {
  return (
    <section className="join container">
      <h3 className="join__title title">Become a contributor?</h3>
      <p className="join__unfo">
        Join us and get tips & tricks to become a great Designer and Developer
      </p>
      <div className="join__input">
        <input type="text" placeholder="Enter your email..." />
        <Button color={"#fff"} active btnClass={"join__btn"}>
          Join Us
        </Button>
      </div>
    </section>
  );
}

export default Join;
