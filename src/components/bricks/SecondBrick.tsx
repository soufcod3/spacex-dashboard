import { Brick } from "../Brick";
import Countdown from "react-countdown";
import { Datum } from "../Datum";

const Completionist = () => <span>Lancement imminent !</span>;

type RendererProps = {
  days: number,
  hours: number,
  minutes: number,
  seconds: number,
  completed: boolean
}


const nextLaunch = 1690081440000
const options = {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
  hour: "numeric",
  minute: "numeric"
};
const frenchDate = new Date(nextLaunch).toLocaleString("fr-FR", options);

export const SecondBrick = () => {
  // const { response, error, loading } = useAxios('/v4/launches/next')


  const renderer = ({ days, hours, minutes, seconds, completed }: RendererProps) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <div className="d-flex gap-3">
          <div className="box">
            <Datum datum={{title: 'Jours', datum: days}}></Datum>
          </div>
          <div className="box">
            <Datum datum={{title: 'Heures', datum: hours}}></Datum>
          </div>
          <div className="box">
            <Datum datum={{title: 'Minutes', datum: minutes}}></Datum>
          </div>
          <div className="box">
            <Datum datum={{title: 'Secondes', datum: seconds}}></Datum>
          </div>
        </div>
      );
    }
  };
  return (
    <Brick style={{ maxHeight: "285px" }}>
      <div className="box p-2">
        <p className="box-title">Prochain lancement</p>
        <div className="box-body p-2 text-center">
          <div className="box p-2">
            <div className="box-title text-start">Contenu</div>
            <div className="box-body p-2">fusee + capsule</div>
          </div>
          <small className="text-center">{frenchDate} (heure de Paris)</small>
          <Countdown date={nextLaunch} renderer={renderer} className=""/>
        </div>
      </div>
    </Brick>
  );
};
