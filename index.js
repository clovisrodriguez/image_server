const express = require("express");
const path = require("path");
const { expressSharp, FsAdapter } = require("express-sharp");
const multer = require("multer");
const bodyParser = require("body-parser");
const UPLOAD_PATH = "uploads";
const cors = require("cors");
const upload = multer({ dest: __dirname + "/" + UPLOAD_PATH });

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(cors());

app.post("/" + UPLOAD_PATH, upload.array("photos"), (req, res) => {
  res.json({ data: req.files });
});

app.use(
  "/images",
  expressSharp({
    imageAdapter: new FsAdapter(path.join(__dirname, UPLOAD_PATH)),
  })
);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
