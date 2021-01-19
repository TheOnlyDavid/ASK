// Lambda Function code for Alexa.
// Paste this into your index.js file. 

const Alexa = require("ask-sdk");
const https = require("https");



const invocationName = "habla con sparky";

// Session Attributes 
//   Alexa will track attributes for you, by default only during the lifespan of your session.
//   The history[] array will track previous request(s), used for contextual Help/Yes/No handling.
//   Set up DynamoDB persistence to have the skill save and reload these attributes between skill sessions.

function getMemoryAttributes() {   const memoryAttributes = {
       "history":[],

        // The remaining attributes will be useful after DynamoDB persistence is configured
       "launchCount":0,
       "lastUseTimestamp":0,

       "lastSpeechOutput":{},
       "nextIntent":[]

       // "favoriteColor":"",
       // "name":"",
       // "namePronounce":"",
       // "email":"",
       // "mobileNumber":"",
       // "city":"",
       // "state":"",
       // "postcode":"",
       // "birthday":"",
       // "bookmark":0,
       // "wishlist":[],
   };
   return memoryAttributes;
};

const maxHistorySize = 20; // remember only latest 20 intents 


// 1. Intent Handlers =============================================

const AMAZON_CancelIntent_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'AMAZON.CancelIntent' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

    const factArr1 = canceldata;
    const factIndex1 = Math.floor(Math.random() * factArr1.length);
    const randomFact1 = factArr1[factIndex1];
    const speechOutput1 = randomFact1;

        let say = speechOutput1;

        return responseBuilder
            .speak(say)
            .withShouldEndSession(true)
            .getResponse();
    },
};

const AMAZON_HelpIntent_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'AMAZON.HelpIntent' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let intents = getCustomIntents();
        let sampleIntent = randomElement(intents);

    const factArr = data;
    const factIndex = Math.floor(Math.random() * factArr.length);
    const randomFact = factArr[factIndex];
    const speechOutput = randomFact;

        let say = 'Puedes pedirle a Sparky que te cante una canción, que te cante las mañanitas o, simplemente, hablar con el. Te gusta esta skill? Te recomiendo probar otra de mis skills, Primeros auxilios, te ayudará mucho ';
        let say1 = 'Qué quieres hacer?'

        // let previousIntent = getPreviousIntent(sessionAttributes);
        // if (previousIntent && !handlerInput.requestEnvelope.session.new) {
        //     say += 'Your last intent was ' + previousIntent + '. ';
        // }
        // say +=  'I understand  ' + intents.length + ' intents, '

        //say += ' Here something you can ask me, ' + getSampleUtterance(sampleIntent);

        return responseBuilder
            .speak(say)
            .reprompt(say1)
            .getResponse();
    },
};

const AMAZON_StopIntent_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'AMAZON.StopIntent' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

    const factArr1 = canceldata;
    const factIndex1 = Math.floor(Math.random() * factArr1.length);
    const randomFact1 = factArr1[factIndex1];
    const speechOutput1 = randomFact1;

        let say = speechOutput1;

        return responseBuilder
            .speak(say)
            .withShouldEndSession(true)
            .getResponse();
    },
};

const AMAZON_NavigateHomeIntent_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'AMAZON.NavigateHomeIntent' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

    const factArr = data;
    const factIndex = Math.floor(Math.random() * factArr.length);
    const randomFact = factArr[factIndex];
    const speechOutput = randomFact;

        let say = speechOutput;


        return responseBuilder
            .speak(say)
            .reprompt(say)
            .getResponse();
    },
};

const HablartIntent_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'HablartIntent' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

    const factArr = data;
    const factIndex = Math.floor(Math.random() * factArr.length);
    const randomFact = factArr[factIndex];
    const speechOutput = randomFact;

        let say = speechOutput;


        return responseBuilder
            .speak(say)
            .reprompt(say)
            .getResponse();
    },
};

const TruenoIntent_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'TruenoIntent' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = '<audio src="https://hablaconpikachu.s3.amazonaws.com/pikachu07-trueno.mp3"/>';


        return responseBuilder
            .speak(say)
            .getResponse();
    },
};

const SongIntent_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'SongIntent' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

    const factArr2 = songdata;
    const factIndex2 = Math.floor(Math.random() * factArr2.length);
    const randomFact2 = factArr2[factIndex2];
    const speechOutput2 = randomFact2;

        let say = speechOutput2;


        return responseBuilder
            .speak(say)
            .getResponse();
    },
};

const CumpleIntent_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'CumpleIntent' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = '<audio src="https://hablaconpikachu.s3.amazonaws.com/pikachuHBD.mp3"/>';


        return responseBuilder
            .speak(say)
            .getResponse();
    },
};

const LaunchRequest_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'LaunchRequest';
    },
    handle(handlerInput) {
        const responseBuilder = handlerInput.responseBuilder;
        
    const factArr = data;
    const factIndex = Math.floor(Math.random() * factArr.length);
    const randomFact = factArr[factIndex];
    const speechOutput = randomFact;

        let say = speechOutput;

        let skillTitle = capitalize(invocationName);

    if (supportsAPL(handlerInput)) {
    handlerInput.responseBuilder
      .addDirective({
        type: 'Alexa.Presentation.APL.RenderDocument',
        document: require('./main.json')
      });
}

        return responseBuilder
            .speak(say)
            .reprompt(say)
            .withStandardCard('Habla Con Pikachu' , '¡Pika!')
            .getResponse();
    },
};

const SessionEndedHandler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        console.log(`Session ended with reason: ${handlerInput.requestEnvelope.request.reason}`);
        return handlerInput.responseBuilder.getResponse();
    }
};

const ErrorHandler =  {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        const request = handlerInput.requestEnvelope.request;

        console.log(`Error handled: ${error.message}`);
        // console.log(`Original Request was: ${JSON.stringify(request, null, 2)}`);

        return handlerInput.responseBuilder
            .speak('Ocurrió un error')
            .reprompt('Ocurrió un error')
            .getResponse();
    }
};


// 2. Constants ===========================================================================

    // Here you can define static data, to be used elsewhere in your code.  For example: 
    //    const myString = "Hello World";
    //    const myArray  = [ "orange", "grape", "strawberry" ];
    //    const myObject = { "city": "Boston",  "state":"Massachusetts" };

const APP_ID = undefined;  // TODO replace with your Skill ID (OPTIONAL).

const canceldata =[
  '<audio src="https://hablaconpikachu.s3.amazonaws.com/pikachu13-bye.mp3"/>',
  ]
  
const songdata =[
  '<audio src="https://hablaconpikachu.s3.amazonaws.com/pikachum1.mp3"/>',
  '<audio src="https://hablaconpikachu.s3.amazonaws.com/pikachum2.mp3"/>',
  ]

const data = [

  '<audio src="https://hablaconpikachu.s3.amazonaws.com/S01.mp3"/>',
  '<audio src="https://hablaconpikachu.s3.amazonaws.com/S02.mp3"/>',
  '<audio src="https://hablaconpikachu.s3.amazonaws.com/S03.mp3"/>',
  '<audio src="https://hablaconpikachu.s3.amazonaws.com/S04.mp3"/>',
  '<audio src="https://hablaconpikachu.s3.amazonaws.com/S05.mp3"/>',
  '<audio src="https://hablaconpikachu.s3.amazonaws.com/S06.mp3"/>',
  '<audio src="https://hablaconpikachu.s3.amazonaws.com/S07.mp3"/>',
  '<audio src="https://hablaconpikachu.s3.amazonaws.com/S08.mp3"/>',
  '<audio src="https://hablaconpikachu.s3.amazonaws.com/S09.mp3"/>',
  '<audio src="https://hablaconpikachu.s3.amazonaws.com/S10.mp3"/>',
  '<audio src="https://hablaconpikachu.s3.amazonaws.com/S11.mp3"/>',
  '<audio src="https://hablaconpikachu.s3.amazonaws.com/S12.mp3"/>',
  '<audio src="https://hablaconpikachu.s3.amazonaws.com/S13.mp3"/>',
  '<audio src="https://hablaconpikachu.s3.amazonaws.com/S14.mp3"/>',
  '<audio src="https://hablaconpikachu.s3.amazonaws.com/S15.mp3"/>',
  '<audio src="https://hablaconpikachu.s3.amazonaws.com/S16.mp3"/>',
  '<audio src="https://hablaconpikachu.s3.amazonaws.com/S17.mp3"/>',
  '<audio src="https://hablaconpikachu.s3.amazonaws.com/S18.mp3"/>',
  '<audio src="https://hablaconpikachu.s3.amazonaws.com/S19.mp3"/>',
  '<audio src="https://hablaconpikachu.s3.amazonaws.com/S20.mp3"/>',
  '<audio src="https://hablaconpikachu.s3.amazonaws.com/S21.mp3"/>',
  '<audio src="https://hablaconpikachu.s3.amazonaws.com/S22.mp3"/>',
  '<audio src="https://hablaconpikachu.s3.amazonaws.com/S23.mp3"/>',
  '<audio src="https://hablaconpikachu.s3.amazonaws.com/S24.mp3"/>',
  '<audio src="https://hablaconpikachu.s3.amazonaws.com/S25.mp3"/>',
  '<audio src="https://hablaconpikachu.s3.amazonaws.com/S26.mp3"/>',
  '<audio src="https://hablaconpikachu.s3.amazonaws.com/S27.mp3"/>',
  '<audio src="https://hablaconpikachu.s3.amazonaws.com/S28.mp3"/>',
  '<audio src="https://hablaconpikachu.s3.amazonaws.com/S29.mp3"/>',
  '<audio src="https://hablaconpikachu.s3.amazonaws.com/S30.mp3"/>',
  '<audio src="https://hablaconpikachu.s3.amazonaws.com/S31.mp3"/>',
  '<audio src="https://hablaconpikachu.s3.amazonaws.com/S32.mp3"/>',
  '<audio src="https://hablaconpikachu.s3.amazonaws.com/S33.mp3"/>',
  
];

// 3.  Helper Functions ===================================================================

function supportsAPL(handlerInput) {
    const supportedInterfaces =
        handlerInput.requestEnvelope.context.System.device.supportedInterfaces;
    const aplInterface = supportedInterfaces['Alexa.Presentation.APL'];
    return aplInterface != null && aplInterface != undefined;
}

function supportsAPL(handlerInput) {
    const supportedInterfaces =
        handlerInput.requestEnvelope.context.System.device.supportedInterfaces;
    const aplInterface = supportedInterfaces['Alexa.Presentation.APL'];
    return aplInterface != null && aplInterface != undefined;
}

function capitalize(myString) {

     return myString.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); }) ;
}

function randomElement(myArray) { 
    return(myArray[Math.floor(Math.random() * myArray.length)]); 
} 
 
function stripSpeak(str) { 
    return(str.replace('<speak>', '').replace('</speak>', '')); 
} 
 
function getSlotValues(filledSlots) { 
    const slotValues = {}; 
 
    Object.keys(filledSlots).forEach((item) => { 
        const name  = filledSlots[item].name; 
 
        if (filledSlots[item] && 
            filledSlots[item].resolutions && 
            filledSlots[item].resolutions.resolutionsPerAuthority[0] && 
            filledSlots[item].resolutions.resolutionsPerAuthority[0].status && 
            filledSlots[item].resolutions.resolutionsPerAuthority[0].status.code) { 
            switch (filledSlots[item].resolutions.resolutionsPerAuthority[0].status.code) { 
                case 'ER_SUCCESS_MATCH': 
                    slotValues[name] = { 
                        heardAs: filledSlots[item].value, 
                        resolved: filledSlots[item].resolutions.resolutionsPerAuthority[0].values[0].value.name, 
                        ERstatus: 'ER_SUCCESS_MATCH' 
                    }; 
                    break; 
                case 'ER_SUCCESS_NO_MATCH': 
                    slotValues[name] = { 
                        heardAs: filledSlots[item].value, 
                        resolved: '', 
                        ERstatus: 'ER_SUCCESS_NO_MATCH' 
                    }; 
                    break; 
                default: 
                    break; 
            } 
        } else { 
            slotValues[name] = { 
                heardAs: filledSlots[item].value, 
                resolved: '', 
                ERstatus: '' 
            }; 
        } 
    }, this); 
 
    return slotValues; 
} 
 
function getExampleSlotValues(intentName, slotName) { 
 
    let examples = []; 
    let slotType = ''; 
    let slotValuesFull = []; 
 
    let intents = model.interactionModel.languageModel.intents; 
    for (let i = 0; i < intents.length; i++) { 
        if (intents[i].name == intentName) { 
            let slots = intents[i].slots; 
            for (let j = 0; j < slots.length; j++) { 
                if (slots[j].name === slotName) { 
                    slotType = slots[j].type; 
 
                } 
            } 
        } 
         
    } 
    let types = model.interactionModel.languageModel.types; 
    for (let i = 0; i < types.length; i++) { 
        if (types[i].name === slotType) { 
            slotValuesFull = types[i].values; 
        } 
    } 
 
 
    examples.push(slotValuesFull[0].name.value); 
    examples.push(slotValuesFull[1].name.value); 
    if (slotValuesFull.length > 2) { 
        examples.push(slotValuesFull[2].name.value); 
    } 
 
 
    return examples; 
} 
 
function sayArray(myData, penultimateWord = 'and') { 
    let result = ''; 
 
    myData.forEach(function(element, index, arr) { 
 
        if (index === 0) { 
            result = element; 
        } else if (index === myData.length - 1) { 
            result += ` ${penultimateWord} ${element}`; 
        } else { 
            result += `, ${element}`; 
        } 
    }); 
    return result; 
} 
function supportsDisplay(handlerInput) // returns true if the skill is running on a device with a display (Echo Show, Echo Spot, etc.) 
{                                      //  Enable your skill for display as shown here: https://alexa.design/enabledisplay 
    const hasDisplay = 
        handlerInput.requestEnvelope.context && 
        handlerInput.requestEnvelope.context.System && 
        handlerInput.requestEnvelope.context.System.device && 
        handlerInput.requestEnvelope.context.System.device.supportedInterfaces && 
        handlerInput.requestEnvelope.context.System.device.supportedInterfaces.Display; 
 
    return hasDisplay; 
} 
 
 
var welcomeCardImg = { 
    smallImageUrl: "https://res.cloudinary.com/teepublic/image/private/s--ztE8bOeY--/t_Resized%20Artwork/c_fit,g_north_west,h_1054,w_1054/co_ffffff,e_outline:53/co_ffffff,e_outline:inner_fill:53/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1545424209/production/designs/3587593_1.jpg", 
    largeImageUrl: "https://res.cloudinary.com/teepublic/image/private/s--ztE8bOeY--/t_Resized%20Artwork/c_fit,g_north_west,h_1054,w_1054/co_ffffff,e_outline:53/co_ffffff,e_outline:inner_fill:53/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1545424209/production/designs/3587593_1.jpg" 
 
 
}; 
 
const DisplayImg1 = { 
    title: 'Pikachu', 
    url: 'https://res.cloudinary.com/teepublic/image/private/s--ztE8bOeY--/t_Resized%20Artwork/c_fit,g_north_west,h_1054,w_1054/co_ffffff,e_outline:53/co_ffffff,e_outline:inner_fill:53/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1545424209/production/designs/3587593_1.jpg' 
}; 
const DisplayImg2 = { 
    title: 'Starry Sky', 
    url: 'https://s3.amazonaws.com/skill-images-789/display/background1024_600.png' 
 
}; 
 
function getCustomIntents() { 
    const modelIntents = model.interactionModel.languageModel.intents; 
 
    let customIntents = []; 
 
 
    for (let i = 0; i < modelIntents.length; i++) { 
 
        if(modelIntents[i].name.substring(0,7) != "AMAZON." && modelIntents[i].name !== "LaunchRequest" ) { 
            customIntents.push(modelIntents[i]); 
        } 
    } 
    return customIntents; 
} 
 
function getSampleUtterance(intent) { 
 
    return randomElement(intent.samples); 
 
} 
 
function getPreviousIntent(attrs) { 
 
    if (attrs.history && attrs.history.length > 1) { 
        return attrs.history[attrs.history.length - 2].IntentRequest; 
 
    } else { 
        return false; 
    } 
 
} 
 
function getPreviousSpeechOutput(attrs) { 
 
    if (attrs.lastSpeechOutput && attrs.history.length > 1) { 
        return attrs.lastSpeechOutput; 
 
    } else { 
        return false; 
    } 
 
} 
 
function timeDelta(t1, t2) { 
 
    const dt1 = new Date(t1); 
    const dt2 = new Date(t2); 
    const timeSpanMS = dt2.getTime() - dt1.getTime(); 
    const span = { 
        "timeSpanMIN": Math.floor(timeSpanMS / (1000 * 60 )), 
        "timeSpanHR": Math.floor(timeSpanMS / (1000 * 60 * 60)), 
        "timeSpanDAY": Math.floor(timeSpanMS / (1000 * 60 * 60 * 24)), 
        "timeSpanDesc" : "" 
    }; 
 
 
    if (span.timeSpanHR < 2) { 
        span.timeSpanDesc = span.timeSpanMIN + " minutes"; 
    } else if (span.timeSpanDAY < 2) { 
        span.timeSpanDesc = span.timeSpanHR + " hours"; 
    } else { 
        span.timeSpanDesc = span.timeSpanDAY + " days"; 
    } 
 
 
    return span; 
 
} 
 
 
const InitMemoryAttributesInterceptor = { 
    process(handlerInput) { 
        let sessionAttributes = {}; 
        if(handlerInput.requestEnvelope.session['new']) { 
 
            sessionAttributes = handlerInput.attributesManager.getSessionAttributes(); 
 
            let memoryAttributes = getMemoryAttributes(); 
 
            if(Object.keys(sessionAttributes).length === 0) { 
 
                Object.keys(memoryAttributes).forEach(function(key) {  // initialize all attributes from global list 
 
                    sessionAttributes[key] = memoryAttributes[key]; 
 
                }); 
 
            } 
            handlerInput.attributesManager.setSessionAttributes(sessionAttributes); 
 
 
        } 
    } 
}; 
 
const RequestHistoryInterceptor = { 
    process(handlerInput) { 
 
        const thisRequest = handlerInput.requestEnvelope.request; 
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes(); 
 
        let history = sessionAttributes['history'] || []; 
 
        let IntentRequest = {}; 
        if (thisRequest.type === 'IntentRequest' ) { 
 
            let slots = []; 
 
            IntentRequest = { 
                'IntentRequest' : thisRequest.intent.name 
            }; 
 
            if (thisRequest.intent.slots) { 
 
                for (let slot in thisRequest.intent.slots) { 
                    let slotObj = {}; 
                    slotObj[slot] = thisRequest.intent.slots[slot].value; 
                    slots.push(slotObj); 
                } 
 
                IntentRequest = { 
                    'IntentRequest' : thisRequest.intent.name, 
                    'slots' : slots 
                }; 
 
            } 
 
        } else { 
            IntentRequest = {'IntentRequest' : thisRequest.type}; 
        } 
        if(history.length > maxHistorySize - 1) { 
            history.shift(); 
        } 
        history.push(IntentRequest); 
 
        handlerInput.attributesManager.setSessionAttributes(sessionAttributes); 
 
    } 
 
}; 
 
 
 
 
const RequestPersistenceInterceptor = { 
    process(handlerInput) { 
 
        if(handlerInput.requestEnvelope.session['new']) { 
 
            return new Promise((resolve, reject) => { 
 
                handlerInput.attributesManager.getPersistentAttributes() 
 
                    .then((sessionAttributes) => { 
                        sessionAttributes = sessionAttributes || {}; 
 
 
                        sessionAttributes['launchCount'] += 1; 
 
                        handlerInput.attributesManager.setSessionAttributes(sessionAttributes); 
 
                        handlerInput.attributesManager.savePersistentAttributes() 
                            .then(() => { 
                                resolve(); 
                            }) 
                            .catch((err) => { 
                                reject(err); 
                            }); 
                    }); 
 
            }); 
 
        } // end session['new'] 
    } 
}; 
 
 
const ResponseRecordSpeechOutputInterceptor = { 
    process(handlerInput, responseOutput) { 
 
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes(); 
        let lastSpeechOutput = { 
            "outputSpeech":responseOutput.outputSpeech.ssml, 
            "reprompt":responseOutput.reprompt.outputSpeech.ssml 
        }; 
 
        sessionAttributes['lastSpeechOutput'] = lastSpeechOutput; 
 
        handlerInput.attributesManager.setSessionAttributes(sessionAttributes); 
 
    } 
}; 
 
const ResponsePersistenceInterceptor = { 
    process(handlerInput, responseOutput) { 
 
        const ses = (typeof responseOutput.shouldEndSession == "undefined" ? true : responseOutput.shouldEndSession); 
 
        if(ses || handlerInput.requestEnvelope.request.type == 'SessionEndedRequest') { // skill was stopped or timed out 
 
            let sessionAttributes = handlerInput.attributesManager.getSessionAttributes(); 
 
            sessionAttributes['lastUseTimestamp'] = new Date(handlerInput.requestEnvelope.request.timestamp).getTime(); 
 
            handlerInput.attributesManager.setPersistentAttributes(sessionAttributes); 
 
            return new Promise((resolve, reject) => { 
                handlerInput.attributesManager.savePersistentAttributes() 
                    .then(() => { 
                        resolve(); 
                    }) 
                    .catch((err) => { 
                        reject(err); 
                    }); 
 
            }); 
 
        } 
 
    } 
}; 

 
// 4. Exports handler function and setup ===================================================
const skillBuilder = Alexa.SkillBuilders.standard();
exports.handler = skillBuilder
    .addRequestHandlers(
        AMAZON_CancelIntent_Handler, 
        AMAZON_HelpIntent_Handler, 
        AMAZON_StopIntent_Handler, 
        AMAZON_NavigateHomeIntent_Handler, 
        HablartIntent_Handler, 
        TruenoIntent_Handler, 
        SongIntent_Handler, 
        CumpleIntent_Handler, 
        LaunchRequest_Handler, 
        SessionEndedHandler
    )
    .addErrorHandlers(ErrorHandler)
    .addRequestInterceptors(InitMemoryAttributesInterceptor)
    .addRequestInterceptors(RequestHistoryInterceptor)

   // .addResponseInterceptors(ResponseRecordSpeechOutputInterceptor)

 // .addRequestInterceptors(RequestPersistenceInterceptor)
 // .addResponseInterceptors(ResponsePersistenceInterceptor)

 // .withTableName("askMemorySkillTable")
 // .withAutoCreateTable(true)

    .lambda();


// End of Skill code -------------------------------------------------------------
// Static Language Model for reference

const model = {
  "interactionModel": {
    "languageModel": {
      "invocationName": "píkachu",
      "intents": [
        {
          "name": "AMAZON.CancelIntent",
          "samples": [
            "salte",
            "sal",
            "parar",
            "para",
            "cancelar",
            "cancela"
          ]
        },
        {
          "name": "AMAZON.HelpIntent",
          "samples": [
            "impac trueno",
            "impactrueno",
            "trueno"
          ]
        },
        {
          "name": "AMAZON.StopIntent",
          "samples": [
            "parar",
            "para",
            "cancelar",
            "cancela",
            "salte",
            "salir"
          ]
        },
        {
          "name": "AMAZON.NavigateHomeIntent",
          "samples": []
        },
        {
          "name": "HablartIntent",
          "slots": [],
          "samples": [
            "pidele algo a píkachu",
            "pidele algo a pikachu",
            "preguntale algo a píkachu",
            "preguntale algo a pikachu",
            "pikachu",
            "habla con pikachu"
          ]
        },
        {
          "name": "TruenoIntent",
          "slots": [],
          "samples": [
            "usa impactrueno",
            "usa trueno",
            "trueno"
          ]
        },
        {
          "name": "SongIntent",
          "slots": [],
          "samples": [
            "Canta",
            "Cantame algo"
          ]
        },
        {
          "name": "CumpleIntent",
          "slots": [],
          "samples": [
            "canta las mañanitas",
            "es mi cumple"
          ]
        },
        {
          "name": "LaunchRequest"
        }
      ],
      "types": []
    }
  }
};

//asd
