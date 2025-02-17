import "./Hero.scss";

const Hero = () => {
  return (
    <main>
      <div className="container">
        <img
          src="../../../public/1285314_164733-OVURTD-372-removebg-preview.png"
          alt=""
        />
        <div className="hero__text">
          <h1>At Home Fine Dining</h1>
          <p>
            Experience fine dining at its best at the comfort of your home minus
            the expensive bill.
          </p>
          <button className="btn-box">
            <span>Login / Sign Up</span>
          </button>
        </div>
      </div>
    </main>
  );
};

export default Hero;
