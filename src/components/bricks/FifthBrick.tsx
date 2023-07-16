import useAxios from "../../hooks/useAxios";
import { Brick } from "../Brick";
import { News } from "../News";

export const FifthBrick = () => {
  const { response: allNews, error, loading } = useAxios("/v4/history");
  return (
    <Brick mb={0} style={{ height: "300px" }}>
      <div className="box p-2">
        <div className="box-title">Bon à savoir</div>
        <div className="box-body py-2 overflow-y-scroll" style={{ height: "250px" }}>
          {
            allNews && allNews.map((news, idx) => {
          return <News news={news} key={} />
            })
          }
        </div>
      </div>
    </Brick>
  );
};
