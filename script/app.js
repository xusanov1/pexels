import axios from "./axios.js";
import { rederPotoIngrit, rederVideoIngrit } from "./render.js";
import { searchInput, searchButton, searchTypeSelect } from "./elements.js";

const APIkey = "gNmvSlQY6yU4Z2Z4vmxIkmNI1RhDdA3uonxDMrjP5gfQpqwAhOb89Dba";
localStorage.setItem("key", APIkey);

const loadData = async (query, type) => {
  try {
    const response = await axios(`/search?query=${query}&per_page=80&${type === 'image' ? 'type=photo' : 'type=video'}`);

    if (!response.status || response.status !== 200) {
      throw new Error(response);
    }

    const data = response.data;
    if (type === "image") {
      rederPotoIngrit(data.photos);
    } else {
      rederVideoIngrit(data.videos);
    }
  } catch (error) {
    console.log(error.message);
  }
};


searchButton.addEventListener("click", () => {
  const query = searchInput.value;
  const type = searchTypeSelect.value;
  loadData(query, type);
});

loadData("nature", "image");

const instance = axios.create({
  baseURL: "https://api.pexels.com/v1",
  headers: {
    "Content-Type": "application/json",
    Authorization: localStorage.getItem("key"),
  },
  timeout: 10000,
});



export default instance;