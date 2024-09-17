import { useEffect, useState } from "react";
import Anime from "./Components/Anime";
import NewAnimeForm from "./Components/NewAnimeForm";
import "./App.css";

function App() {
  const [animes, setAnimes] = useState([]);
  const [newAnime,setNewAnime] = useState({
    id: 0,
    name: "",
    description: ""
})

  useEffect(() => {
    fetch("http://localhost:3333/animes")
      .then((response) => response.json())
      .then((data) => {
        setAnimes(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [newAnime.id]);

  // useEffect(()=>{
  //   fetch("http://localhost:3333/animes")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setAnimes(data);
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
  // }, [newAnime.id] )

  return (
    <>
    <section className="index">
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {animes.map((anime) => {
            return <Anime key={anime.id} anime={anime}/>;
          })}
        </tbody>
      </table>
      {/* <button
        onClick={() => {
          navigate(`/animes/new`);
        }}
      >
        Add Anime
      </button> */}
    </section>
    <NewAnimeForm newAnime={newAnime} setNewAnime={setNewAnime}/>
    </>
  );
}

export default App;
