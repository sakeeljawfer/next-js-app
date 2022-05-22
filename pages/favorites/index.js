import { useContext } from 'react';

import FavoritesContext from "../../store/favorites-context";
import MeetupList from '../../components/meetups/MeetupList';

 function Favourites(){
    const favoritesCtx = useContext(FavoritesContext);

    let content;

    if (favoritesCtx.totalFavorites === 0) {
      content = <p>You got no Likes yet. Start adding some?</p>;
    } else {
      content = <MeetupList meetups={favoritesCtx.favorites} />;
    }
    return(
        <section>
 {content}
        </section>

    );
}
export default Favourites;