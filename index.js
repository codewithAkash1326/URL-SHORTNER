const express = require("express");
const urlRoute = require("./routes/url_route");
const connectDb = require("./connection");
const URL = require("./models/url");
require("dotenv").config();
const url = process.env.MONGOURL;

const app = express();
const PORT = 8001;

app.use(express.json());
connectDb(url)
  .then(() => console.log("MongoDb connected"))
  .catch((err) => console.log("Error in connecting" + err));

app.use("/url", urlRoute);

app.get("/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  console.log("short id", shortId);
  console.log("short id", typeof shortId);
  const entry = await URL.findOneAndUpdate(
    { shortId },
    { $push: { visitHistroy: { timestamp: Date.now() } } },
  );
  console.log("redirectUrl ", entry.redirectUrl);
  res.redirect(entry.redirectUrl);
});
app.listen(PORT, () => console.log(`server started at ${PORT}`));
