const videoContainer = document.querySelector("#videoContainer");
const form = document.querySelector("#commentForm");
const textarea = form.querySelector("textarea");
const btn = form.querySelector("button");

const handleSubmit = (event) => {
  event.preventDefault();
  const text = textarea.value;
  const video = videoContainer.dataset.id;
  console.log(video);
};

form.addEventListener("submit", handleSubmit);
