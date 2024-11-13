import Loader from "./components/Loader";
import Header from "./components/Header";
import Cards from "./components/Cards";

import { useState, useEffect } from "react";
import SubCards from "./components/SubCards";

const url =
  "https://api.coincap.io/v2/assets/?ids=bitcoin,ethereum,tether,dogecoin";

function App() {
  // States
  const [isLoading, setIsLoading] = useState(true);
  const [exchange, setExchange] = useState([]);
  const [theme, setTheme] = useState("dark-theme");

  // Fetch from API
  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const cryptoData = await response.json();
      // console.log(data);
      setExchange(cryptoData.data);
    } catch (error) {
      console.log(error);
    }

    setIsLoading(false);
  };

  // Switch theme function
  const toggleTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
      return;
    }
    setTheme("light-theme");
  };

  // Invoke Fetch
  useEffect(() => {
    fetchData();
  }, []);

  // Load initial color theme
  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  // While loading/fetching
  if (isLoading) {
    return (
      <>
        <div className="bg-top" aria-hidden="true"></div>
        <main>
          <Loader />
        </main>
      </>
    );
  }

  // When ready show dashboard
  return (
    <>
      <div className="bg-top" aria-hidden="true"></div>
      <main>
        <Header toggleTheme={toggleTheme} theme={theme} />
        <Cards exchange={exchange} />
        <SubCards exchange={exchange} />
      </main>
    </>
  );
}

export default App;
