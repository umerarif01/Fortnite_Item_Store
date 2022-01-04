import { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [infos, setInfos] = useState([]);

  useEffect(() => {
    fetchdata();
  }, []);

  async function fetchdata() {
    let response = await fetch(
      "https://fortnite-api.theapinetwork.com/store/get"
    );
    let data = await response.json();
    console.log(data.data);
    setInfos(data.data);
  }

  return (
    <div className="App">
      <h1>Fortnite Items Today</h1>
      {/* <button onClick={fetchdata}>Fetch</button> */}

      {infos.map((info) => (
        <div key={info.itemId}>
          <h2 className="element">{info.item.name}</h2>
          <img
            alt={info.item.name}
            className="img"
            src={info.item.images.icon}
          ></img>
        </div>
      ))}
    </div>
  );
}
