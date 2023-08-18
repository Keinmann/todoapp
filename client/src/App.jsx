import React from "react";
import Auth from "./components/Auth/Auth";

function App() {

  const authToken = false;

  return (
    <div className="app-container">
      {authToken &&
        <>
          authorized!
        </>}
      {!authToken &&
        <Auth />
      }

    </div>
  );
}

export default App
