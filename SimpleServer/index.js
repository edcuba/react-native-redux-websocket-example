const express  = require("express");
const app = express();
const expressWs = require("express-ws")(app);

app.ws("/", (ws, req) => {
  console.log("Connected");

  const sender = () => {
    if (ws.readyState === ws.OPEN) {
      const msg = {
        type: "message",
        payload: "Message: " + Date.now(),
      };
      ws.send(JSON.stringify(msg));
    }
    setTimeout(sender, 1000 + Math.random()*5000);
  }

  ws.on("message", (msg) => {
    console.log(msg);
    const request = JSON.parse(msg);
    if (request.type === "subscribe") {
      sender();
    }
  });

  ws.on("close", () => {
    console.log("Disconnected");
  });
});

app.listen(8000);
