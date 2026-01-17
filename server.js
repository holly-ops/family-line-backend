const express = require("express");
const twilio = require("twilio");

const app = express();

// Twilio sends x-www-form-urlencoded by default
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Family Line backend is running ✅");
});

app.get("/health", (req, res) => {
  res.status(200).json({ ok: true });
});

app.post("/twilio/inbound", (req, res) => {
  const response = new twilio.twiml.VoiceResponse();
  response.say("Hello. Family Line is working. We will be with you shortly.");
  response.hangup();

  res.type("text/xml");
  res.send(response.toString());
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Family Line backend listening on port ${port}`);
});
