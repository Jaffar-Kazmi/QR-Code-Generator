import express from "express";
import qr from "qr-image";

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(process.cwd() + "/public/index.html");
});

app.post("/generate", (req, res) => {
  const url = req.body.url;

  const qr_png = qr.imageSync(url, { type: "png" });
  const qr_base64 = qr_png.toString("base64");

  res.send(`
    <html>
    <head>
        <title>QR Code Result</title>
        <link rel="stylesheet" href="result.css">
    </head>
    <body>
        <div class="container">
        <h1>QR Code Generated</h1>
        <p>URL: ${url}</p>
        <img src="data:image/png;base64, ${qr_base64}" alt="QR Code"/>
        <br/>
        <a href="data:image/png;base64, ${qr_base64}" download="qrcode.png">
        <button>Download QR Code</button>
        </a>
        <br/>
        <a href="/">Generate Another QR Code</a>  
        </div>      
    </body>
    </html>
    `);
});


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
