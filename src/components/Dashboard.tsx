import React from "react";
import { FirstBrick } from "./bricks/FirstBrick";
import { SecondBrick } from "./bricks/SecondBrick";
import { ThirdBrick } from "./bricks/ThirdBrick";
import { ForthBrick } from "./bricks/ForthBrick";
import { FifthBrick } from "./bricks/FifthBrick";
import { Row } from "react-bootstrap";

import bg1 from '../assets/bg-1.webp'

export const Dashboard = () => {
  return (
    <section className="dashboard d-flex flex-wrap p-2 px-4" style={{ backgroundImage: `url(${bg1})` }}>
      <Row className="brick-row d-flex">
        <FirstBrick />
        <SecondBrick />
        <ThirdBrick />
      </Row>
      <Row className="brick-row">
        <ForthBrick />
        <FifthBrick />
      </Row>
    </section>
  );
};
