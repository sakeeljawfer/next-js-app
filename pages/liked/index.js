import { useContext } from 'react';

import FavoritesContext from "../../store/favorites-context";
import MeetupList from '../../components/meetups/MeetupList';
import Layout from "../../components/layout/Layout";
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
          <Layout> {content}</Layout>

        </section>

    );
}
export default Favourites;