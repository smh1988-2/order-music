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
    <div ref={drag} className="song-card">
      <div className="card">
        <div className="row no-gutters">
          <div className="col-auto">
            <img src={artworkUrl100} className="img-fluid" alt="album cover" />
          </div>
          <div className="col">
            <div className="card-block">
              <h5 className="card-title">{name}</h5>
              <p className="card-text">{collectionName}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Song;

// style={{ border: isDragging ? "5px solid pink" : "0px" }}
