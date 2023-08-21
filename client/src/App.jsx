import React from "react";
import Auth from "./components/Auth/Auth";
import { useCookies } from 'react-cookie';

function App() {
  const [cookies, setCookie, removeCookie] = useCookies(null);

  return (
    <div className="app-container">
      {cookies['AuthToken'] &&
        <>
          authorized!
          {cookies['Email']}
        </>}
      {!cookies['AuthToken'] &&
        <Auth />
      }

    </div>
  );
}

export default App
