const sendAPI = require("./graphAPI");
const actions = require("./actions");
const textoNLP = require('../mockupData/npl.json');



//Método para manejar todas los distintos tipos de mensajes que recibimos
exports.handleMessage = (webhookEvent) => {
    let responses;
    try {
      if (webhookEvent.message) {
        let message = webhookEvent.message;
        if (message.quick_reply) {
          handleQuickReplies(webhookEvent);
        } else if (message.attachments) {
          let coordenadas = webhookEvent.message.attachments[0].payload.coordinates;
          if(coordenadas){
            console.log(`Las coordenadas del usuario son: ${JSON.stringify(coordenadas)}`);
            actions.stores(webhookEvent);  
          }      
        } else if (message.text) {
          console.log("Recibiendo mensaje de texto");
          handleNLP(webhookEvent);
        }
      } else if (webhookEvent.postback) {
        handlePostback(webhookEvent);
        console.log("postback");
      }
    } catch (error) {
      console.error(error);
      responses = {
        text: `An error has occured: '${error}'. We have been notified and \
        will fix the issue shortly!`
      };
    }
    
  }

//Método para el manejo de Quick Replies
  handleQuickReplies = (webhookEvent)=>{
      let reply = webhookEvent.message.quick_reply.payload;
      const response = {
        texto:'¿Recomendarias nuestro servicio?',
        replies:[
        {
            content_type:"text",
            title:'Si',
            payload:'siRecomienda',
        },
        {
            content_type:"text",
            title:'No',
            payload:'noRecomienda',
        }]};
      if(reply == 'rapidez' || reply == 'ubicacion' || reply == 'servicio'){
        console.log(`Reply ${reply}`);
        actions.quickReplies(webhookEvent, response);
      }else{
        actions.sendTextMessage("Gracias por ayudarnos a mejorar", webhookEvent);
      }
  }
//Método para la detección del envío de postbacks
handlePostback = (webhookEvent) => {
    let evento = webhookEvent.postback.payload; 
    switch(evento){
      case 'survey':
        actions.quickReplies(webhookEvent);
      break;
      case 'find':
          handleLocation(webhookEvent);
      break;
      case 'iniciar':
          sendAPI.getPorfile(webhookEvent.sender.id);
          actions.sendTextMessage("Hola soy el robot de Platzi y Developer Circle", webhookEvent);
          actions.sendTextMessage("Te puedo ayudar con algunas dudas o encontrando sucursales cerca", webhookEvent);
      break;
    }
}

//Método para recibir ubicación
handleLocation = (webhookEvent) => {
  const repliesLocation = {
    texto:'Por favor compartenos tu ubicación para encontrar sucursales cercanas a ti',
    replies:[
    {
        content_type:"location",
        title:'Enviar ubicación',
        payload:'ubicacion',
    }
  ]};
  actions.quickReplies(webhookEvent,repliesLocation); 
}

//Método para consumir servicios del procesador de lenguaje natural
handleNLP =  (webhookEvent)=>{
    let nlp = webhookEvent.message.nlp;
    let texto = '';
    const saludos = textoNLP.saludo;
    if(nlp.entities.saludo){
      texto = saludos[Math.floor(Math.random()*saludos.length)].texto;
      actions.sendTextMessage(texto,webhookEvent);
     }
     if(nlp.entities.tiempoEntrega){
       texto = textoNLP.tiempoEntrega[0].texto;
       actions.sendTextMessage(texto,webhookEvent);
     }
}
