import axios from "./axios.js";
import { renderPrevImg } from "./render.js";
import { imageElement } from "./elements.js";

const URL = location.search;
const IMAGE_ID = new URLSearchParams(URL).get("image-id");

const loadSinPhoto = async (id) => {
  try {
    const response = await axios(`/photos/${id}`);
    renderPrevImg(response.data);
    console.log(response.data.src.original);
    imageElement.src = response.data.src.tiny;
  } catch (error) {
    console.log(error);
  }
};

loadSinPhoto(IMAGE_ID);