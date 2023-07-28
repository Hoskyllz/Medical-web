import React from "react";
import "../styles/secabt.css";
import micro from "../assets/micro.png";
import check from "../assets/check.png";
import blk from "../assets/blk.png";
import roundpic from "../assets/roundpic.png";

const Secabt = () => {
  return (
    <div>
      <div className="container aboutus">
        <div className="bm container">
          <div className="micro">
            <img src={micro} alt="" />
          </div>
          <div className="blk">
            <img src={blk} alt="" />
          </div>
        </div>
        <div className="container">
          <div className="uss">
            <h5>About Us</h5>
            <h4>
              We Are Thoroughly Committed To <br /> Making Your Health Our
              Priority
            </h4>
            <p>
              Lorem ipsum dolor sit amet consectetur. Sed nec ornare vitae
              <br /> duis leo lacus pellentesque sit. Turpis amet ut tortor
              scelerisque <br />
              risus adipiscing et non. Interdum ac integer pretium aliquam auc.
              <br />
              Tristique aliquet nisl odio risus diam. Morbi pellentesque
              ultricis <br /> id faucibus aliquam sed sit sed. Proin fermentum
              mauris mi <br /> aliquet sed vel. Quam id sed congue diam
              tincidunt enim.
            </p>
            <button>Learn More</button>
          </div>
          <div className="formob">
            <h5>About Us</h5>
            <h4>
              We Are Thoroughly <br />
              Committed To Making <br /> Your Health Our Priority
            </h4>
            <p>
              Lorem ipsum dolor sit <br /> amet consectetur. Sed <br /> nec
              ornare vitae.Morbi <br /> pellentesque ultricis id <br /> faucibus
              aliquam sed <br /> sit sed. Proiermentum <br /> mauris mi aliquet
              sed <br /> vel. Quam id secongue <br />
              diam tincidunt enim.
            </p>
            <button>Learn More</button>
          </div>
          <div>
            <hr />
          </div>
          <div className="check">
            <h4 className="checkam">Why Patients Choose Our Hospital?</h4>
            <div className="checked">
              <img src={check} alt="" />
              <p>Lorem ipsum dolor sit amet consectetur vestibulum.</p>
            </div>
            <div className="checked">
              <img src={check} alt="" />
              <p>Lorem ipsum dolor sit amet consectetur vestibulum.</p>
            </div>
            <div className="checked">
              <img src={check} alt="" />
              <p>Lorem ipsum dolor sit amet consectetur vestibulum.</p>
            </div>
            <div className="checked">
              <img src={check} alt="" />
              <p>Lorem ipsum dolor sit amet consectetur vestibulum.</p>
            </div>
            <div className="checked">
              <img src={check} alt="" />
              <p>Lorem ipsum dolor sit amet consectetur vestibulum.</p>
            </div>
            <div className="checked">
              <img src={check} alt="" />
              <p>Lorem ipsum dolor sit amet consectetur vestibulum.</p>
            </div>
            <div className="checked">
              <img src={check} alt="" />
              <p>Lorem ipsum dolor sit amet consectetur vestibulum.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container d-flex bothos">
        <div className="os">
          <h4>Our Story</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur. Cras viverra vulputate{" "}
            <br />
            scelerisque sem. Nullam lectus mauris malesuada rhoncus. Risus{" "}
            <br /> quis penatibus sodales cursus. Velit massa dolor leo
            fermentia amet <br /> sit mattis. Sit praesent imperdiet pretium
            enim ut bibendum in dolor. <br />
            Integer arcu cursus morbi mauris posuere. Risus pulvinar et nulla in{" "}
            <br />
            dignissim lacus suscipit maecenas luctus. Non orci ornare nulla ut
            sit <br /> gravida dui fermentum sed. Semper pharetra urna pretium
            massa ut <br />
            fermentum etiam amet. Elementum a sollicitudin viverra tempus a mi{" "}
            <br />
            nibh aliquam nisl.
          </p>
          <button>Learn More</button>
        </div>

        <div className="osmobile">
          <h4>Our Story</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur. Cras viverra vulputate
            scelerisque sem. Nullam lectus mauris malesuada rhoncus. Risus quis
            penatibus sodales cursus. Velit massa dolor leo fermentia amet sit
            mattis. Sit praesent imperdiet pretium enim ut bibendum in dolor.
          </p>
          <button>Learn More</button>
        </div>
        <div className="om">
          <div>
            <h4>Our Vision</h4>
            <hr />
            <p>
              Lorem ipsum dolor sit amet consectetur. <br /> Velit massa dolor
              leo fermentia amet sit mattis. Sit <br /> praesent imperdiet
              pretium <br /> enim ut bibendum in.
            </p>
          </div>
          <div>
            <h4>Mission</h4>
            <hr />
            <p>
              Lorem ipsum dolor sit amet consectetur. <br /> Velit massa dolor
              leo fermentia amet sit <br /> mattis. Sit praesent imperdiet
              pretium <br /> enim ut bibendum in.
            </p>
          </div>
        </div>
      </div>
      <div className="container numpic d-flex">
        <div className="fourr">
          <div className="four d-flex">
            <div className="meji">
              <div className="meji1">
                <h4>98%</h4> <p>Satisfied Patients</p>{" "}
              </div>
              <div className="meji2">
                <h4>20 +</h4> <p>Team Members</p>{" "}
              </div>
            </div>
            <div className="meji">
              <div className="meji3">
                <h4>15 +</h4> <p>Merit Awards</p>{" "}
              </div>
              <div className="meji4">
                <h4>10 +</h4> <p>Experience</p>{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="roundpic">
          <img src={roundpic} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Secabt;
