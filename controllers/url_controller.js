const { nanoid } = require("nanoid");
const URL = require("../models/url");
async function generateNewShortURL(req, res) {
  const body = req.body;
  if (!body || !body.url)
    return res.status(400).json({ error: "url is required" });
  const shortId = nanoid(8);
  if (!body.url.startsWith("http://") && !body.url.startsWith("https://")) {
    body.url = "https://" + body.url;
  }
  await URL.create({
    shortId: shortId,
    redirectUrl: body.url,
    visitHistroy: [],
  });

  return res.status(200).json({ id: shortId });
}

module.exports = { generateNewShortURL };
