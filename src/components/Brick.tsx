import { Card } from "react-bootstrap";

type BrickProps = {
  md?: number;
  mb?: number;
  children: any;
  style?: any;
  lastBrick?: boolean;
};

export const Brick = ({
  md = 4,
  mb = 1,
  children,
  style,
  lastBrick = false,
}: BrickProps) => {
  return (
    <Card className={`${lastBrick && 'mb-xs-10'} col-12 col-md-${md} p-0 `} style={style}>
      <Card.Body className="p-2 rounded text-white">{children}</Card.Body>
    </Card>
  );
};
