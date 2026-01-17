import express from "express";
import { twiml as Twiml } from "twilio";

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post("/twilio/inbound", (req, res) => {
  const response = new Twiml.VoiceResponse();
  response.say("Hello. Family Line is working. We will be with you shortly.");
  response.hangup();
  res.type("text/xml");
  res.send(response.toString());
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Family Line backend running");
});
