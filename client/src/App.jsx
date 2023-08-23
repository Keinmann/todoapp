import Auth from "./components/Auth/Auth";
import { useCookies } from 'react-cookie';
import Main from "./components/Main/Main";

function App() {
  const [cookies, setCookie, removeCookie] = useCookies(null);

  return (
    <div className="app-container">
      {cookies['AuthToken'] &&
        <Main />}
      {!cookies['AuthToken'] &&
        <Auth />
      }

    </div>
  );
}

export default App
