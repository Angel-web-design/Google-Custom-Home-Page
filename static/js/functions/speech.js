// Speech functionality

export function Speech(browser, search){

    switch(browser){
      case 'chrome':
        recognize(search);
        break;

      case 'edge':
        recognize(search);
        break;
  
      default: 
        alert('Not supported');
    }
    
    return
}

function recognize(search){

  let recognition = new webkitSpeechRecognition();

  recognition.lang = document.querySelector('#html').lang;

  recognition.continous = true;

  recognition.onresult = event => {

    for (const result of event.results){
      search.value = result[0].transcript
    }
  }
  recognition.start()
}