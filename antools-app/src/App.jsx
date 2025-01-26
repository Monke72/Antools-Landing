import { useEffect, useState } from "react";
import Awesome from "./Components/Awesome/Awesome";
import Header from "./Components/Header/Header";
import Popular from "./Components/Popular/Popular";
function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://6790b4e0af8442fd73775266.mockapi.io/data")
      .then((res) => res.json())
      .then((json) => setData(json));
    console.log(data);
  }, []);

  return (
    <>
      <Header />
      <Awesome />
      <Popular data={data} />
    </>
  );
}

export default App;
