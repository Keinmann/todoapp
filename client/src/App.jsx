import Auth from "./components/Auth/Auth";
import { useCookies } from 'react-cookie';

import MainMenu from "./components/MainMenu/MainMenu";


function App() {
  const [cookies, setCookie, removeCookie] = useCookies(null);

  return (
    <div className="app-container">
      {cookies['AuthToken'] &&
        <MainMenu />}
      {!cookies['AuthToken'] &&
        <Auth />
      }

    </div>
  );
}

export default App
