import { useEffect, useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DragDrop from "./components/DragDrop";
import Button from 'react-bootstrap/Button';


function App() {
  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://itunes.apple.com/search?term=jack+johnson&limit=5")
      .then((r) => r.json())
      .then((r) => {
        console.log(r.results);
        setTracks(r.results);
      });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  });

  return (
    <>
      <h1>Music Orderer</h1>

      
      <DndProvider backend={HTML5Backend}>
        {loading === false ? (
          <div className="App">
            <DragDrop tracks={tracks} />
          </div>
        ) : (
          "loading"
        )}
      </DndProvider>
    </>
  );
}

export default App;
