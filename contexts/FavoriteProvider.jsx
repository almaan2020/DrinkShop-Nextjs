import { createContext, useContext, useState, useCallback } from "react";
import { pull } from "lodash";

export const FavContext = createContext();

const FavoriteProvider = (props) => {
  const [favoriteIds, setFavIds] = useState([]);

  const fillFavIds = useCallback(() => {
    let favIds = localStorage.getItem("favProducts");
    //convert localStorage to array of numbers:
    favIds = favIds ? favIds.split(",").map((item) => parseInt(item)) : [];
    setFavIds([...favIds]); //destruction cause new state and rerender
  }, [setFavIds]);

  const handleFavorite = (id) => {
    let favIds = favoriteIds;
    if (favIds.includes(id)) {
      pull(favIds, id);
    } else {
      favIds.push(id);
    }
    localStorage.removeItem("favProducts");
    localStorage.setItem("favProducts", favIds);
    setFavIds([...favIds]);
  };

  return (
    <FavContext.Provider
      value={{
        favoriteIds,
        fillFavIds,
        handleFavorite,
      }}
    >
      {props.children}
    </FavContext.Provider>
  );
};

export default FavoriteProvider;

// Export useContext Hook.
export function useFavContext() {
  return useContext(FavContext);
}
