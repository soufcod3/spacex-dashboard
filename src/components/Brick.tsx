import { Card } from "react-bootstrap";

type BrickProps = {
  md?: number;
  mb?: number;
  children: any;
  style?: any;
};

export const Brick = ({ md = 4, mb = 1, children, style }: BrickProps) => {
  return (
    <Card className={`col-12 col-md-${md} mb-${mb} mb-${1} p-0`} style={style}>
      <Card.Body className="p-2 rounded text-white">{children}</Card.Body>
    </Card>
  );
};
