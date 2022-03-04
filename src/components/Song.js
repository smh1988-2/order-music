import React from "react";
import { useDrag } from "react-dnd";

function Song({ id, name, artworkUrl100, collectionName }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "image",
    item: {
      id: id,
      trackName: name,
      artworkUrl100: artworkUrl100,
      collectionName: collectionName,
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div ref={drag}>
      <div>
        <div>
          <img
            src={artworkUrl100}
            alt="album-cover"
            style={{ width: "100%" }}
          />
        </div>

        <div>
          <h4>
            <b>{name}</b>
          </h4>
          <p>{collectionName}</p>
        </div>
      </div>
    </div>
  );
}

export default Song;

// style={{ border: isDragging ? "5px solid pink" : "0px" }}
