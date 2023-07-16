import useAxios from "../../hooks/useAxios";
import { Brick } from "../Brick";
import { Loading } from "../Loading";
import { News } from "../News";

export const FifthBrick = () => {
  const { response: allNews } = useAxios("/v4/history");
  return (
    <Brick style={{ height: "300px" }} lastBrick>
      <div className="box p-2">
        <div className="box-title">Bon à savoir</div>
        <div
          className="box-body py-2 overflow-y-scroll"
          style={{ height: "250px" }}
        >
          {allNews ? (
            allNews.map((news, idx) => {
              return <News news={news} key={idx} />;
            })
          ) : (
            <Loading />
          )}
        </div>
      </div>
    </Brick>
  );
};
