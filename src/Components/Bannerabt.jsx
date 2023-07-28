import React from "react";
import "../styles/Bannerabt.css";

const Bannerabt = () => {
  return (
    <div>
      <section
        id="hero"
        class="container-fluid d-flex justify-content-center align-items-center"
      >
        <div class="text-center hiw">
          <h1 class="text-white my-3">Health is Wealth</h1>
          <p className="text-white">
            Health is most important in your daily life. We <br /> strive to offer
            nothing but quality healthcare. <br /> You are rest assured your wellbeing
            and health <br /> are in safe hands.
          </p>
          <button>Find a Doctor</button>
        </div>
      </section>
    </div>
  );
};

export default Bannerabt;
