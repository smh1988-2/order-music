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
  const [searchTerm, setSearchTerm] = useState("lover")

  useEffect(() => {
    fetch(`https://itunes.apple.com/search?term=${searchTerm}&limit=5`)
      .then((r) => r.json())
      .then((r) => {
        console.log(r.results);
        setTracks(r.results);
      });
  }, [searchTerm, loading]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  },[searchTerm]);

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
        {searchTerm.length > 0 ? (
          <div className="App">
            <DragDrop tracks={tracks} loading={loading} searchTerm={searchTerm} />
          </div>
        ) : (
          "loading"
        )}
      </DndProvider>
    </>
  );
}

export default App;
