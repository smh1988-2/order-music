import React from "react";
import Song from "./Song";

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function OrderedListContainer({ board, drop }) {

    console.log("board is", board)

  return (
    <div className="board" ref={drop}>
        

<Container>
        <Row>
          <Col></Col>
          <Col>
            <h4>My Ranking</h4>
          </Col>
          <Col></Col>
        </Row>
      </Container>

      {board.length > 0 ? board.map((song) => {
          console.log("song is ", song)
        return <Song
        name={song.trackName}
        id={song.trackId}
        key={song.trackId}
        artworkUrl100={song.artworkUrl100}
        collectionName={song.collectionName}
      />
      }) : "no tracks"}

      {/* {board.map((song) => {
        return <Song
        name={song.trackName}
        id={song.trackId}
        key={song.trackId}
        artworkUrl100={song.artworkUrl100}
        collectionName={song.collectionName}
      />
      })} */}
    </div>
  );
}

export default OrderedListContainer;
