const BASE_URL = "http://localhost:3000";

function upload() {
  const formdata = new FormData();
  const fileInput = document.getElementById("input-loader");

  Object.keys(fileInput.files).map((fileKey) => {
    formdata.append("photos", fileInput.files[fileKey], `image-0${fileKey}`);
  });

  fetch(`${BASE_URL}/uploads`, {
    method: "POST",
    body: formdata,
    redirect: "follow",
  })
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
}
