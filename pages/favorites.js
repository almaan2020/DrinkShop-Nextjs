import { useEffect, useState } from "react";
import { getMapProducts } from "../services/productService";
import { useFavContext } from "../contexts/FavoriteProvider";
import FavoriteItem from "../components/favoriteList/FavoriteItem";
import PageTitle from "../components/layouts/PageTitle";

const FavoriteList = () => {
    const [favProducts, setFavProducts] = useState([]);
    const { favoriteIds, fillFavIds } = useFavContext();

    useEffect(() => {
        fillFavIds();
    }, [fillFavIds]);

    useEffect(() => {
        getMapProducts(favoriteIds, setFavProducts);
    }, [favoriteIds]);

    return (
        <div className="row pt-4 d-block">
            <PageTitle title="Favorites" />
            <div className="row mt-4">
                <div className="col-2"></div>
                <div className="col-8">
                    <div className="row">
                        {favProducts &&
                            favProducts.map((p) => (
                                <FavoriteItem
                                    key={p[0].id}
                                    name={p[0].name}
                                    image_url={p[0].image_url}
                                    srm={p[0].srm}
                                    tagline={p[0].tagline}
                                    abv={p[0].abv}
                                />
                            ))}
                        {favProducts.length === 0 && <div className="col-12 text-center">No Favorites!</div>}
                    </div>
                </div>
                <div className="col-2"></div>
            </div>
            <br></br>
        </div>
    );
};

export default FavoriteList;
