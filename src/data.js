import axios from "axios";

const BASE_URL = "https://api.giphy.com/v1/gifs/search";
const API_KEY = "2MnPgQlfrGbyTj7jZyIqCk6SdjMeFSPE";
const PARAM1 = "api_key=" + API_KEY;
const NUM_OF_PHOTOS = 12;
const PARAM2 = "limit=" + NUM_OF_PHOTOS;
const QUERY_TERM = "nature";
const PARAM3 = "q=" + QUERY_TERM;

export default axios.get(BASE_URL + "?" + PARAM1 + "&" + PARAM2 + "&" + PARAM3);