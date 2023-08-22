import Auth from "./components/Auth/Auth";
import { useCookies } from 'react-cookie';

import Menu from "./components/Menu/Menu";


function App() {
  const [cookies, setCookie, removeCookie] = useCookies(null);

  return (
    <div className="app-container">
      {cookies['AuthToken'] &&
        <Menu />}
      {!cookies['AuthToken'] &&
        <Auth />
      }

    </div>
  );
}

export default App
