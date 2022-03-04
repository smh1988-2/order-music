import React from "react";
import Song from "./Song";

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function SongContainer({ tracks }) {
  return (
    <div>

<Container>
        <Row>
          <Col></Col>
          <Col>
            <h4>Tracks</h4>
          </Col>
          <Col></Col>
        </Row>
      </Container>

      {tracks.map((song) => {
        return (
          <Song
            name={song.trackName}
            id={song.trackId}
            key={song.trackId}
            artworkUrl100={song.artworkUrl100}
            collectionName={song.collectionName}
          />
        );
      })}
    </div>
  );
}

export default SongContainer;
