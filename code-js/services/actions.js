const sendAPI = require("./graphAPI");


const repliesSurvey = {
    texto:'Por favor llena esta encuesta para que podamos mejorar',
    replies:[
    {
        content_type:"text",
        title:'Servicio',
        payload:'servicio',
    },
    {
        content_type:"text",
        title:'Rapidez',
        payload:'rapidez',
    },
    {
        content_type:"text",
        title:'Ubicaciones',
        payload:'ubicacion',
    },
]};


exports.quickReplies = (webhookEvent, replies) => {
    if(!replies){
        replies = repliesSurvey;
    }
    let response = {
        recipient:{
          id: webhookEvent.sender.id
        },
        message:{
          text:replies.texto,
          quick_replies:replies.replies
      }   
    };
    sendAPI.callSendAPI(response);
}

//Enviar lista de tiendas
exports.stores = (webhookEvent) =>{
    let response = {
        recipient:{
          id: webhookEvent.sender.id
        },
        message:{
            attachment:{
            type:"template",
            payload: {
                template_type:"generic",
                elements:[
                {
                    title:"Tienda del centro",
                    image_url:"https://media4.s-nbcnews.com/i/newscms/2017_26/2053956/170627-better-grocery-store-main-se-539p_80a9ba9c8d466788799ca27568ee0d43.jpg",
                    subtitle:"Dirección corta de la tienda",
                    default_action: {
                        type: "web_url",
                        url: "https://goo.gl/maps/J5LQfLPy1s3zvtQZ6",
                        messenger_extensions: "FALSE",
                        webview_height_ratio: "COMPACT"
                    },
                    buttons:[{
                            type:"web_url",
                            url:"https://goo.gl/maps/J5LQfLPy1s3zvtQZ6",
                            title:"Mostrar el mapa"
                          },{
                            "type":"phone_number",
                            "title":"Llama a la tienda",
                            "payload":"+5215525250000"
                    } ]      
                }
            ]
            }
        }
        }
    }
    sendAPI.callSendAPI(response);
}
exports.sendTextMessage = (texto,webhookEvent)=>{
    let response = {
        recipient:{
          id: webhookEvent.sender.id
        },
        message:{
          text:texto
      }   
    };
    sendAPI.callSendAPI(response);
  }