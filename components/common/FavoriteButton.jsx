import { includes } from "lodash";
import { useFavContext } from "../../contexts/FavoriteProvider";

const FavoriteButton = (props) => {
  const { id } = props;
  const { favoriteIds, handleFavorite } = useFavContext();

  const getClassFont = () => {
    const isFavorite = includes(favoriteIds, id) ? true : false;
    if (isFavorite) return "cardButton fa fa-star";
    return "cardButton fa fa-star-o";
  };

  return (
    <i
      onClick={() => handleFavorite(id)}
      className={getClassFont()}
      aria-hidden="true"
    ></i>
  );
};

export default FavoriteButton;
