import { imgGrid } from "./elements.js";

export const rederPotoIngrit = (data) => {
  const imgGrids = imgGrid.children;
  const imgGridArry = Array.from(imgGrids);
  let index = 0;
  let chengLimit = Math.floor(data.length / 3);
  imgGridArry.forEach((imgGridContainer) => {
    const photoDataGroup = data.slice(index, index + chengLimit);
    const photoFragment = document.createDocumentFragment();
    photoDataGroup.forEach((photo) => {
      const img = document.createElement("img");
      img.src = photo.src.tiny;
      img.alt = photo.alt;
      img.className = "imag-item";
      photoFragment.appendChild(img);
    });
    index += chengLimit;
    imgGridContainer.appendChild(photoFragment);
  });
};

export const rederVideoIngrit = (data) => {
  const imgGrids = imgGrid.children;
  const imgGridArry = Array.from(imgGrids);
  let index = 0;
  let chengLimit = Math.floor(data.length / 3);
  imgGridArry.forEach((imgGridContainer) => {
    const videoDataGroup = data.slice(index, index + chengLimit);
    const videoFragment = document.createDocumentFragment();
    if(imgGridContainer.firstChild.remove()){
        imgGridContainer.lastChild.add();
    }
    videoDataGroup.forEach((video) => {
      const a = document.createElement("a");
      a.href = `./imag.html?video-id=${video.id}`;
      a.className = "imag-item";
      a.innerHTML = `
        <video controls>
          <source src="${video.video_files[0].link}" type="video/mp4">
        </video>
        <a href="${video.video_files[0].link}" download class="download-btn">Download</a>
      `;
      videoFragment.appendChild(a);
    });
    index += chengLimit;
    imgGridContainer.appendChild(videoFragment);
  });
};
