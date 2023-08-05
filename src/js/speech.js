// Speech functionality

export function Speech(browser, search){

    switch(browser){
      case 'chrome':
        let recognition = new webkitSpeechRecognition();
        recognition.lang = document.querySelector('#html').lang;
        recognition.continous = true;
        recognition.onresult = event => {
          for (const result of event.results){
            search.value = result[0].transcript
          }
        }
        recognition.start()
        break;
  
      default: 
        alert('Not supported');
    }
    
    return
  }