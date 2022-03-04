import { useEffect, useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DragDrop from "./components/DragDrop";
import SearchForm from "./components/SearchForm";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    fetch(`https://itunes.apple.com/search?term=taylor+swift&limit=5`)
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
      <Container>
        <Row>
          <Col></Col>
          <Col>
            <h1>Music Orderer</h1>
          </Col>
          <Col></Col>
        </Row>
      </Container>

      <SearchForm searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <DndProvider backend={HTML5Backend}>
        {loading === false > 0 ? (
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
