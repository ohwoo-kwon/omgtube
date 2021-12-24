const videoContainer = document.querySelector("#videoContainer");
const form = document.querySelector("#commentForm");

const addComment = (text, id) => {
  const videoComments = document.querySelector(".video__comments ul");
  const newComment = document.createElement("li");
  const icon = document.createElement("i");
  const span = document.createElement("span");
  const span2 = document.createElement("span");
  newComment.className = "video__comment";
  icon.className = "fas fa-comment";
  span.innerText = ` ${text}`;
  span2.innerText = " ❌";
  newComment.appendChild(icon);
  newComment.appendChild(span);
  newComment.appendChild(span2);
  newComment.dataset.id = id;
  videoComments.prepend(newComment);
};

const handleSubmit = async (event) => {
  event.preventDefault();
  const textarea = form.querySelector("textarea");
  const text = textarea.value;
  const videoId = videoContainer.dataset.id;
  if (text === "") {
    return;
  }
  const response = await fetch(`/api/videos/${videoId}/comment`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text }),
  });
  if (response.status === 201) {
    const { newCommentId } = await response.json();
    addComment(text, newCommentId);
    textarea.value = "";
  }
};

if (form) {
  form.addEventListener("submit", handleSubmit);
}
