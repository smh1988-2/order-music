import React, { useState } from "react";
import SongContainer from "./SongContainer";
import OrderedListContainer from "./OrderedListContainer";

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

  const addImageToBoard = (item) => {
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

      <div class="flex-container">
        <div class="flex-child">
          <SongContainer tracks={tracks} />
        </div>

        <div class="flex-child">
          <OrderedListContainer board={board} drop={drop} />
        </div>
      </div>

  );
}

export default DragDrop;
