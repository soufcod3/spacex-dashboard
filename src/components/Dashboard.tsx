import { FirstBrick } from "./bricks/FirstBrick";
import { SecondBrick } from "./bricks/SecondBrick";
import { ThirdBrick } from "./bricks/ThirdBrick";
import { ForthBrick } from "./bricks/ForthBrick";
import { FifthBrick } from "./bricks/FifthBrick";
import { Row } from "react-bootstrap";

import sky from '../assets/bgspace.jpg'

export const Dashboard = () => {
  return (
    <section className="dashboard d-flex flex-column p-2 px-4 gap-2" style={{ backgroundImage: `url(${sky})` }}>
      <Row className="">
        <FirstBrick />
        <SecondBrick />
        <ThirdBrick />
      </Row>
      <Row className="">
        <ForthBrick />
        <FifthBrick />
      </Row>
    </section>
  );
};
