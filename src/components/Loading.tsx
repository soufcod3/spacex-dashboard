import { Spinner } from "react-bootstrap";

export const Loading = () => {
  return (
    <div className="d-flex justify-content-center align-items-center text-center">
      <p className="d-flex justify-content-center align-items-center text-center">
        <Spinner className="mx-2" />
        <small>Chargement</small>
      </p>
    </div>
  );
};
