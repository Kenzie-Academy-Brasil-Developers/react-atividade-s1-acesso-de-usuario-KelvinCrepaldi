import "./App.css";
import { useState } from "react";
import RestrictedPage from "./components/RestrictedPage";

function App() {
  const user = "Kelvin Crepaldi";
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logIn = () => {
    setIsLoggedIn(true);
  };
  const logOut = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <RestrictedPage
          isLoggedIn={isLoggedIn}
          user={user}
          Login={logIn}
          Logout={logOut}
        />
      </header>
    </div>
  );
}

export default App;
