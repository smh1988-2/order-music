import React from "react";
import Song from "./Song";

function SongContainer({ tracks }) {
  return (
    <div className="song-container">
      {tracks.map((song) => {
        return (
          <Song
            name={song.trackName}
            id={song.trackId}
            artworkUrl100={song.artworkUrl100}
            collectionName={song.collectionName}
          />
        );
      })}
    </div>
  );
}

export default SongContainer;
