import '../styles/globals.css'
import { FavoritesContextProvider } from "../store/favorites-context";

function MyApp({ Component, pageProps }) {
  return <FavoritesContextProvider><Component {...pageProps} /></FavoritesContextProvider>
}

export default MyApp
