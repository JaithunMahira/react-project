import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    {
      title: "I want",
      duration: "2:30",
    },
    {
      title: "No yes",
      duration: "4:30",
    },
    {
      title: "jaithun",
      duration: "3:00",
    },
    {
      title: "Mahira",
      duration: "2:00",
    },
    {
      title: "Jumana",
      duration: "7:30",
    },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
