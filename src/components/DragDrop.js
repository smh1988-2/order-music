import React, { useState } from "react";
import SongContainer from "./SongContainer";
import OrderedListContainer from "./OrderedListContainer";

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { useDrop } from "react-dnd";
import "../App.css";

function DragDrop({ tracks }) {
  const [board, setBoard] = useState([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "image",
    drop: (item) => addImageToBoard(item),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  console.log("tracks is", tracks)

  const addImageToBoard = (item) => {
    console.log("item is", item)
    console.log("tracks is", tracks)
    const track = tracks.filter((track) => {
      return item.id === track.trackId;
    });
    setBoard((board) => {
      if (!board.includes(track[0])) {
        return [...board, track[0]];
      } else {
        // console.log("NO THANK YOU");
        return [...board];
      }
    });
  };
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <SongContainer tracks={tracks} />
          </Col>
          <Col>
            <OrderedListContainer board={board} drop={drop} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default DragDrop;
