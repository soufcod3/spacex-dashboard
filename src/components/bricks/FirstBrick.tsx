import { Brick } from "../Brick";
import { Datum } from "../Datum";
import { Form, OverlayTrigger, Tooltip } from "react-bootstrap";
import starshipImg from "../../assets/rockets/starship.png";
import falcon1 from "../../assets/rockets/falcon1.png";
import falcon9 from "../../assets/rockets/falcon9.png";
import falconheavy from "../../assets/rockets/falconheavy.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo } from "@fortawesome/free-solid-svg-icons";
import useAxios from "../../hooks/useAxios";
import numbro from "numbro";
import { useEffect, useState } from "react";
import { IRocket } from "../interfaces";
import { Loading } from "../Loading";

enum ROCKET_IMG {
  "Falcon 1" = falcon1,
  "Falcon 9" = falcon9,
  "Falcon Heavy" = falconheavy,
  "Starship" = starshipImg,
}

const tooltip = (rocket: IRocket) => {
  return (
    <Tooltip id="tooltip">
      <strong>{rocket.name}</strong>
      <br />
      <p>{rocket.description}</p>
    </Tooltip>
  );
};

export const FirstBrick = () => {
  const { response: companyInfo } = useAxios("/v4/company");

  const { response: rockets } = useAxios("/v4/rockets");

  const [locRockets, setLocRockets] = useState([]);

  useEffect(() => {
    if (rockets) {
      setLocRockets(
        rockets.map((rocket) => ({
          name: rocket.name,
          image: ROCKET_IMG[rocket.name],
          description: rocket.description,
          firstFlight: rocket.first_flight,
          active: rocket.active,
          wikipedia: rocket.wikipedia,
        }))
      );
    }
  }, [rockets]);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (isActive) {
      setLocRockets(locRockets.filter((rocket) => rocket.active === true));
    } else {
      if (rockets) {
        // Restore the original list of rockets when isActive is false
        setLocRockets(
          rockets.map((rocket) => ({
            name: rocket.name,
            image: ROCKET_IMG[rocket.name],
            description: rocket.description,
            firstFlight: rocket.first_flight,
            active: rocket.active,
            wikipedia: rocket.wikipedia,
          }))
        );
      }
    }
  }, [isActive, rockets]);

  return (
    <Brick style={{ maxHeight: "285px" }}>
      <div className="box p-2 mb-2">
        <p className="box-title">Informations générales</p>
        <div className="box-body p-2">
          {companyInfo ? (
            <div className="data w-100 d-flex justify-content-between gap-2">
              <Datum
                datum={{ title: "Employés", datum: companyInfo.employees }}
              />
              <Datum
                datum={{
                  title: "Valeur",
                  datum: `${numbro(companyInfo.valuation).formatCurrency()}`,
                }}
              />
              <Datum
                datum={{
                  title: "Sites de lancement",
                  datum: companyInfo.launch_sites,
                }}
              />
              <Datum
                datum={{
                  title: "Sites de test",
                  datum: companyInfo.test_sites,
                }}
              />
            </div>
          ) : (
            <Loading />
          )}
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
                checked={isActive}
                onChange={() => setIsActive(!isActive)}
              />
              <small className="white-space-nowrap active-label">
                actives seulement
              </small>
            </div>
          </div>
        </div>
        <div className="box-body">
          {locRockets ? (
            <div className="d-flex gap-2 overflow-x-auto">
              {locRockets.map((rocket, idx) => {
                return (
                  <div
                    className="box text-center p-2"
                    key={idx}
                    style={{ height: "7rem" }}
                  >
                    <OverlayTrigger placement="right" overlay={tooltip(rocket)}>
                      <span className="circle-info">
                        <FontAwesomeIcon icon={faInfo} />
                      </span>
                    </OverlayTrigger>
                    <img
                      src={rocket.image}
                      alt=""
                      className="mx-4"
                      style={{ maxHeight: "5rem" }}
                    />{" "}
                    <br />
                    <small className="rocket-name">{rocket.name}</small>
                  </div>
                );
              })}
            </div>
          ) : (
            <Loading />
          )}
        </div>
      </div>
    </Brick>
  );
};
