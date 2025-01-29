import { useEffect, useState } from "react";
import Awesome from "./Components/Awesome/Awesome";
import Header from "./Components/Header/Header";
import Popular from "./Components/Popular/Popular";
import Trusted from "./Components/Trusted/Trusted";
import More from "./Components/More/More";
import Dev from "./Components/Dev/Dev";
import Join from "./Components/Join/Join";
import Footer from "./Components/Footer/Footer";

function App() {
  const [data, setData] = useState([]);
  const [limit, setLimit] = useState(3);
  const [uploaded, setUploaded] = useState(false);

  useEffect(() => {
    setUploaded(false);
    fetch(
      `https://6790b4e0af8442fd73775266.mockapi.io/data?page=1&limit=${limit}`
    )
      .then((res) => res.json())
      .then((json) => setData(json))
      .finally(() => setUploaded(true));
  }, [limit]);

  return (
    <>
      <Header />
      <Awesome />
      <Popular data={data} setLimit={setLimit} uploaded={uploaded} />
      <Trusted />
      <More />
      <Dev />
      <Join />
      <Footer />
    </>
  );
}

export default App;
