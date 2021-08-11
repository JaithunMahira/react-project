import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID Oh4rdc3cQIgTrL61tJvq-18VusPK5N1e8jSuyOzbPjQ",
  },
});
