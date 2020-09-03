const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const handle = require("./services/handleMessage");

//Configuraciones generales de la aplicación 

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.set('port', process.env.PORT);

// Rutas

app.get('/', (req,res)=>{
    res.send('Hello world');
});

//Ruta para validar webhook
app.get("/webhook", (req, res) => {
    //Parametros para validar el webhook
    const mode = req.query['hub.mode'];
    const challenge = req.query['hub.challenge'];
    const token = req.query['hub.verify_token'];
    // Revisamos que mode y token se encuentren en la solicitud
    if (mode && token) {
      // Validamos que el mode y token sean correctos
      if (mode === "subscribe" && token === process.env.VERIFY_TOKEN) {
        // Respondemos con el token de la petición
        console.log("WEBHOOK_VERIFIED");
        res.status(200).send(challenge);
      } else {
        // Repondemos con 403 en caso de que el token no coincida
        res.sendStatus(403);
      }
    }
});

  //Ruta para recibir mensaje
app.post("/webhook", (req, res) => {
    const body = req.body;
    // Revisamos si es un evento desde la suscricpción de página
    if (body.object === "page") {
      // Respondemos con 200 para indicar que la solicitud llegó correctamente
      res.status(200).send("EVENT_RECEIVED");
      // Iteramos sobre la información enviada ya que podría ser multiple
      body.entry.forEach(function(entry) {
        // Obtenemos el contenido del mensaje enviado
        let webhookEvent = entry.messaging[0];
        handle.handleMessage(webhookEvent);
        console.log(webhookEvent);
      });
    } else {
      // Respondemos 404 en caso de que el evento no venga desde la suscripción de la página
      res.sendStatus(404);
    }
});
  
//Inicializamos servidor
app.listen(app.get('port'), () => {
        console.log(`Servidor iniciado en  el puerto ${process.env.PORT}`);
});