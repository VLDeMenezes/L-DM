import CardCaso from "./CardCaso";
import { dbCasos } from "../../helpers/casos";
import { Link } from "react-router-dom";

const CardList = () => {
  return (
    <>
      {dbCasos.map((caso) => {
        return (
          <Link
            to={`/nuestra-labor/${caso.id}`}
            key={caso.id}
            style={{ textDecoration: "none" }}
          >
            <CardCaso key={caso.id} caso={caso} />
          </Link>
        );
      })}
    </>
  );
};

export default CardList;
