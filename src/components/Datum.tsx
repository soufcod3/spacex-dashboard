import { IDatum } from "./interfaces";

type DatumProps = {
  datum: IDatum;
};

export const Datum = ({ datum }: DatumProps) => {
  return (
    <div className="datum text-center">
      <p className="datum-datum fw-bold">{datum.datum}</p>
      <small className="">{datum.title}</small>
    </div>
  );
};
