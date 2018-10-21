import axios from "axios";

const BASE_URL = "https://api.unsplash.com/photos/";
const ACC_KEY = "1b7c6a4fc60537946402771ed99da19afa9e662b8f4fcf5f80dfc6256e41f34d";
const PARAM1 = "client_id=" + ACC_KEY;
const PHOTOS_PER_PAGE = 12;
const PARAM2 = "per_page=" + PHOTOS_PER_PAGE;

export default axios.get(BASE_URL + "?" + PARAM1 + "&" + PARAM2);