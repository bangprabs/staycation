import React from "react";
import IconTraveler from "assets/images/icons/ic_traveler.svg";
import ImageHero from "assets/images/img-hero.jpg";
import ImageHero_ from "assets/images/img-hero-frame.jpg";
import IconCities from "assets/images/icons/ic_cities.svg";
import IconTreasure from "assets/images/icons/ic_treasure.svg";
import Button from "elements/Button";
import formatNumber from "utils/formatNumber";

import Fade from "react-reveal/Fade";

export default function Hero(props) {
  function showMostPicked() {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 30,
      behavior: "smooth",
    });
  }

  return (
    <Fade bottom>
      <section className="container pt-4">
        <div className="row align-item-center">
          <div className="col-auto pr-5" style={{ width: 530 }}>
            <h1 className="h2 font-weight-bold line-height-1 mb-3">
              Forget Busy Work, <br />
              Start Next Vacation
            </h1>
            <p
              className="mb-4 font-weight-light text-gray-500 w-75"
              style={{ lineHeight: "170%" }}
            >
              We provide what you need to enjoy your holiday with family. Time
              to make another memorable moments. Your money can return, but your
              time is not What are you thinking ?
            </p>
            <Button
              className="btn px-5"
              hasShadow
              isPrimary
              onClick={showMostPicked}
            >
              Show Me Now
            </Button>

            <div className="row" style={{ marginTop: 80 }}>
              <div className="col-auto" style={{ marginRight: 35 }}>
                <img
                  width="100%"
                  height="40"
                  src={IconTraveler}
                  alt={`${props.data.travelers} Travelers`}
                  className="mx-auto"
                />
                <h6 className="mt-3 mx-auto">
                  {formatNumber(props.data.travelers)}{" "}
                  <span className="text-gray-500 font-weight">Travelers</span>
                </h6>
              </div>
              <div className="col-auto" style={{ marginRight: 35 }}>
                <img
                  width="100%"
                  height="40"
                  src={IconTreasure}
                  className="mx-auto"
                  alt={`${props.data.treasure} Travelers`}
                />
                <h6 className="mt-3">
                  {formatNumber(props.data.treasures)}{" "}
                  <span className="text-gray-500 font-weight">Treasure</span>
                </h6>
              </div>
              <div className="col-auto mx-auto">
                <img
                  width="100%"
                  height="40"
                  className="mx-auto"
                  src={IconCities}
                  alt={`${props.data.cities} Cities`}
                />
                <h6 className="mt-3">
                  {formatNumber(props.data.cities)}{" "}
                  <span className="text-gray-500 font-weight">Cities</span>
                </h6>
              </div>
            </div>
          </div>
          <div className="col-6 pl-5 mt-4">
            <div style={{ width: 540, height: 390 }}>
              <img
                src={ImageHero}
                alt="Room with couches"
                className="img-fluid position-absolute"
                style={{ margin: "-50px 0 0 -30px", zIndex: 1 }}
              />
              <img
                src={ImageHero_}
                alt="Room with couches frame"
                className="img-fluid position-absolute"
                style={{ margin: "0px -15px -15px 0" }}
              />
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
}
