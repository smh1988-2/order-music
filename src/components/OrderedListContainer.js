import React from "react";
import Song from "./Song";

function OrderedListContainer({ board, drop }) {
  return (
    <div className="Board" ref={drop}>
      {board.map((song) => {
        return <Song name={song.trackName} id={song.trackId} />;
      })}
    </div>
  );
}

export default OrderedListContainer;
