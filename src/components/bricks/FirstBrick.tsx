import React from "react";
import { Brick } from "../Brick";
import { Datum } from "../Datum";
import { IDatum, IRocket } from "../interfaces";
import { Form } from "react-bootstrap";
import starshipImg from "../../assets/rockets/starship.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo, faInfo, faInfoCircle } from "@fortawesome/free-solid-svg-icons";

const DATA: IDatum[] = [
  { title: "Employés", datum: 1234 },
  { title: "Valeur", datum: "$123B" },
  { title: "Lancements/an", datum: 123 },
  { title: "Fusées", datum: 884 },
  { title: "Capsules", datum: 144 },
];

const ROCKETS: IRocket[] = [
  {
    name: "Falcon Heavy",
    active: true,
    firstFlight: "2018-02-06",
    description: "With the ability to lift into orbit over 54 metric tons (119,000 lb)--a mass equivalent to a 737 jetliner loaded with passengers, crew, luggage and fuel--Falcon Heavy can lift more than twice the payload of the next closest operational vehicle, the Delta IV Heavy, at one-third the cost.",
    wikipedia: "https://en.wikipedia.org/wiki/Falcon_Heavy",
    image: starshipImg,
  },  {
    name: "Falcon Heavy",
    active: true,
    firstFlight: "2018-02-06",
    description: "With the ability to lift into orbit over 54 metric tons (119,000 lb)--a mass equivalent to a 737 jetliner loaded with passengers, crew, luggage and fuel--Falcon Heavy can lift more than twice the payload of the next closest operational vehicle, the Delta IV Heavy, at one-third the cost.",
    wikipedia: "https://en.wikipedia.org/wiki/Falcon_Heavy",
    image: starshipImg,
  },  {
    name: "Falcon Heavy",
    active: true,
    firstFlight: "2018-02-06",
    description: "With the ability to lift into orbit over 54 metric tons (119,000 lb)--a mass equivalent to a 737 jetliner loaded with passengers, crew, luggage and fuel--Falcon Heavy can lift more than twice the payload of the next closest operational vehicle, the Delta IV Heavy, at one-third the cost.",
    wikipedia: "https://en.wikipedia.org/wiki/Falcon_Heavy",
    image: starshipImg,
  },
  {
    name: "Falcon Heavy",
    active: true,
    firstFlight: "2018-02-06",
    description: "With the ability to lift into orbit over 54 metric tons (119,000 lb)--a mass equivalent to a 737 jetliner loaded with passengers, crew, luggage and fuel--Falcon Heavy can lift more than twice the payload of the next closest operational vehicle, the Delta IV Heavy, at one-third the cost.",
    wikipedia: "https://en.wikipedia.org/wiki/Falcon_Heavy",
    image: starshipImg,
  },
];

export const FirstBrick = () => {
  return (
    <Brick style={{ maxHeight: "285px" }}>
      <div className="box p-2 mb-2">
        <p className="box-title">Informations générales</p>
        <div className="box-body p-2">
          <div className="data w-100 d-flex justify-content-between gap-2">
            {DATA.map((datum, idx) => {
              return <Datum key={idx} datum={datum} />;
            })}
          </div>
        </div>
      </div>
      <div className="box p-2">
        <div className="d-flex w-100">
          <p className="box-title col-3">Fusées</p>
          <div className="filters d-flex justify-content-between col-9">
            <div className="col-12 d-flex justify-content-end">
              <Form.Check
                className=""
                type="switch"
                id="test"
                name={"active"}
                checked={false}
                onChange={() => null}
              />
                <small className="white-space-nowrap active-label">actives</small>
            </div>
          </div>
        </div>
        <div className="box-body">
          <div className="d-flex gap-2 overflow-x-auto">
            {ROCKETS.map((rocket, idx) => {
              return (
                <div className="box text-center p-2" key={idx}>
                  <span className="circle-info"><FontAwesomeIcon icon={faInfo} /></span>
                  <img src={rocket.image} alt="" width={"25px"} />
                  <small className="rocket-name">{rocket.name}</small>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Brick>
  );
};
