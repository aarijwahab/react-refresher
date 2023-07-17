import MeetupList from "../components/meetups/MeetupList";
import FavouritesContext from "../store/favourites-context";
import { useContext } from "react";

const FavouritesPage = () => {
  const favouritesCtx = useContext(FavouritesContext);

  return (
    <section>
      <h1>Favourites</h1>
      {favouritesCtx.totalFavourites === 0 && (
        <p>You got no favourites yet. Start adding some?</p>
      )}
      <MeetupList meetups={favouritesCtx.favourites} />
    </section>
  );
};

export default FavouritesPage;
