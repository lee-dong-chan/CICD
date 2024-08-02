import { FC } from "react";
import { StoreList as Store } from "../../../lib/storelist";
import { useParams } from "react-router-dom";
import StoreList from "../../storelist/storelist";
interface IProps {
  storelist: Store[];
}

const Star: FC<IProps> = ({ storelist }) => {
  let { id } = useParams();
  const storeId: number = Number(id);
  const StarScore: number = storelist[storeId - 1].getStar();

  return (
    <div>
      {StarScore < 1 ? (
        <div className="text-gray-200">★★★★★</div>
      ) : 1 <= StarScore && StarScore < 2 ? (
        <div className="text-gray-200">
          <span className="text-yellow-200">★</span>★★★★
        </div>
      ) : 2 <= StarScore && StarScore < 3 ? (
        <div className="text-gray-200">
          <span className="text-yellow-200">★★</span>★★★
        </div>
      ) : 3 <= StarScore && StarScore < 4 ? (
        <div className="text-gray-200">
          <span className="text-yellow-200">★★★</span>★★
        </div>
      ) : 4 <= StarScore && StarScore < 5 ? (
        <div className="text-gray-200">
          <span className="text-yellow-200">★★★★</span>★
        </div>
      ) : (
        <div className="text-yellow-200">★★★★★</div>
      )}
    </div>
  );
};

export default Star;
