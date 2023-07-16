import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { INews } from "./interfaces";
import spaceXLogo from "../assets/spacex-logo.png";

type NewsProps = {
  news: INews;
};

function truncate(str) {
  return str.length > 100 ? str.substring(0, 95) + "..." : str;
}

export const News = ({ news }: NewsProps) => {
  return (
    <div className="box mb-2">
      <div className="box-body p-2">
        <div className="d-flex p-0">
          <div className="news-image d-flex justify-content-center text-center align-items-center px-2">
            <img
              src={spaceXLogo}
              alt=""
              style={{ width: "4rem", height: "fit-content" }}
            />
          </div>
          <div className="d-flex flex-column p-2">
            <small className="news-title">{news.title}</small>
            <br />
            <p className="news-date">Le 23 Juillet 2020</p>
            <p className="news-description p-1 text-light">
              {truncate(news.details)}
            </p>
            {news.links.article && (
              <small className="text-end pointer fw-bold">
                <a href={news.links.article} target="blank">
                  En savoir plus <FontAwesomeIcon icon={faArrowRight} />
                </a>
              </small>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
