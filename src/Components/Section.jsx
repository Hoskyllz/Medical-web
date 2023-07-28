import React from "react";
import { Link } from "react-router-dom";
import covidbot from "../assets/covidbot.png";
import "../styles/Section.css";

const Section = () => {
  return (
    <div className="section">
      <div className="container d-flex vaccine">
        <div className="covid">
          <h4>COVID-19 VACCINE ADMINISTRATION</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur. Dictum massa feugiat feugiat{" "}
            <br />
            mauris ipsum risus. Vulputate elit vel dui fames auctor ultrices.
            Quis <br /> pellentesque amet massa sed purus adipiscing. Ornare
            faucibus sed id <br /> scelerisque odio habitant urna in nibh.
            Gravida nulla elit arcu <br /> scelerisque. Viverra lectus
            ullamcorper duis sed leo habitasse. Ac <br /> venenatis eget lacinia
            netus eros amet nunc. Vitae blandit nunc velit <br /> pretium et
            vitae morbi consequat. Id mi amet dui non leo tellus nunc <br />{" "}
            pulvinar. Tortor in justo a in egestas proin ipsum. <br />
            Lectus ut lobortis quam egestas consequat et aliquet ipsum vel.
            Risus <br /> eu pharetra cras gravida. Nunc in eget semper maecenas
            ligula amet <br /> et. Mattis ullamcorper amet at metus. Diam
            pretium pulvinar mattis <br /> rutrum nunc risus. Ut ipsum duis
            egestas non. Dictum nunc sodales <br /> nisi senectus adipiscing
            feugiat. Sed arcu pellentesque urna dolor <br /> ultrices
            condimentum risus. Interdum morbi mauris in a morbi felis <br />{" "}
            tincidunt. Aenean enim sed pellentesque arcu. Lorem posuere elit est
            in <br /> interdum tempus.
          </p>

          <Link to="/Sign">
            <button>Register Now</button>
          </Link>
        </div>
        <div className="mobilep">
          <h4>COVID-19 VACCINE ADMINISTRATION</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur. Dictum massa feugiat feugiat
            mauris ipsum risus. Vulputate elit vel dui fames auctor ultrices.
            Quis pellentesque amet massa sed purus adipiscing. Ornare faucibus
            sed id scelerisque odio habitant urna in nibh. Gravida nulla elit
            arcu scelerisque. Viverra lectus ullamcorper duis sed leo habitasse.
            Ac venenatis eget lacinia netus eros amet nunc. Vitae blandit nunc
            velit pretium et vitae morbi consequat. Id mi amet dui non leo
            tellus nunc pulvinar. Tortor in justo a in egestas proin ipsum.
            Lectus ut lobortis
          </p>

          <Link to="/Sign">
            <button>Register Now</button>
          </Link>
        </div>

        <div className="bottle">
          <img src={covidbot} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Section;
