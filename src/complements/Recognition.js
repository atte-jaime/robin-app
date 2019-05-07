import React, { PureComponent } from 'react';
import SpeechToTextV1 from 'ibm-watson/speech-to-text/v1';


export default class Recognition extends PureComponent{
  render(){
    const speechToText = new SpeechToTextV1({
      iam_apikey: 'bt4XBwSUa9SbbMIQ0nkDRd0Yx-LihQYH7AMZlYCfe25_',
      url: 'https://stream.watsonplatform.net/speech-to-text/api'
    });

    return(
      <h1>
        Hello
      </h1>
    )
  }
}
