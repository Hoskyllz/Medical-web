import React from "react";
import "../styles/Bannerserv.css";
import optician from "../assets/optician.png";
import mumbabe from "../assets/mumbabe.png";
import ultra from "../assets/ultra.png";
import carambulance from "../assets/carambulance.png";
import bottlevaccine from "../assets/bottlevaccine.png";
import drinject from "../assets/drinject.png";

const Bannerserv = () => {
  return (
    <div>
      <section
        id="hero2"
        class="container-fluid d-flex justify-content-center align-items-center"
      >
        <div class="text-center serv">
          <h1 class="my-3">Service</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Ac tellus sed proin <br />
            ullamcorper arcu ut eget augue. Fermentum eget id massa <br /> morbi
            risus.
          </p>
        </div>

        
      </section>
      <div className="container d-flex align-items-center gap-- ab justify-content-around">
        <div className="admin ">
          <hr />
          <h3>COVID-19 Vaccine Administration</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur. Ullamcorper sodales <br />{" "}
            ut netus dictum tellus nunc ullamcorper quisque. Lectus in <br />{" "}
            nisl viverra nisl faucibus. Id pharetra nisl a amet leo non <br />{" "}
            mollis. Phasellus lectus ut suspendisse tortor eget sit <br />{" "}
            senectus.
          </p>
          <button>See Details</button>
        </div>
        <div className="bottlevaccine">
          <img src={bottlevaccine} alt="" />
        </div>
      </div>
      <div className="container d-flex align-items-center gap-- ab justify-content-around">
        <div className="bottlevaccine">
          <img src={carambulance} alt="" />
        </div>
        <div className="admin ">
          <hr />
          <h3>Ambulance</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur. Ullamcorper sodales ut netus
            dictum tellus nunc ullamcorper quisque. Lectus in nisl viverra nisl
            faucibus. Id pharetra nisl a amet leo non mollis. Phasellus lectus
            ut suspendisse tortor eget sit senectus.
          </p>
          <button>See Details</button>
        </div>
      </div>
      <div className="container d-flex align-items-center gap-- ab justify-content-around">
        <div className="admin ">
          <hr />
          <h3>Gynecology</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur. Ullamcorper sodales ut netus
            dictum tellus nunc ullamcorper quisque. Lectus in nisl viverra nisl
            faucibus. Id pharetra nisl a amet leo non mollis. Phasellus lectus
            ut suspendisse tortor eget sit senectus.
          </p>
          <button>See Details</button>
        </div>
        <div className="bottlevaccine">
          <img src={ultra} alt="" />
        </div>
      </div>
      <div className="container d-flex align-items-center gap-- ab justify-content-around">
        <div className="bottlevaccine">
          <img src={mumbabe} alt="" />
        </div>
        <div className="admin ">
          <hr />
          <h3>Paediatrics</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur. Ullamcorper sodales ut netus
            dictum tellus nunc ullamcorper quisque. Lectus in nisl viverra nisl
            faucibus. Id pharetra nisl a amet leo non mollis. Phasellus lectus
            ut suspendisse tortor eget sit senectus.
          </p>
          <button>See Details</button>
        </div>
      </div>
      <div className="container d-flex align-items-center gap-- ab justify-content-around">
        <div className="admin ">
          <hr />
          <h3>Optometry</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur. Ullamcorper sodales ut netus
            dictum tellus nunc ullamcorper quisque. Lectus in nisl viverra nisl
            faucibus. Id pharetra nisl a amet leo non mollis. Phasellus lectus
            ut suspendisse tortor eget sit senectus.
          </p>
          <button>See Details</button>
        </div>
        <div className="bottlevaccine">
          <img src={optician} alt="" />
        </div>
      </div>
      <div className="container d-flex align-items-center gap-- ab justify-content-around">
        <div className="bottlevaccine">
          <img src={drinject} alt="" />
        </div>
        <div className="admin ">
          <hr />
          <h3>General Physician</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur. Ullamcorper sodales ut netus
            dictum tellus nunc ullamcorper quisque. Lectus in nisl viverra nisl
            faucibus. Id pharetra nisl a amet leo non mollis. Phasellus lectus
            ut suspendisse tortor eget sit senectus.
          </p>
          <button>See Details</button>
        </div>
      </div>
    </div>
  );
};

export default Bannerserv;
