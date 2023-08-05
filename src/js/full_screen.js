//Variables
const doc = document.documentElement;

// full screen 

export function full_screen(btn, browser){
    if(!(btn.classList.contains('fs-exit'))){
        (browser == 'firefox') ? doc.mozRequestFullScreen() : doc.requestFullscreen();
        btn.classList.add('fs-exit');
    } 
      
      else {
        btn.classList.remove('fs-exit');
        switch (browser){
          case 'firefox':
            document.mozCancelFullScreen();
            break;
          
          case 'chrome':
            document.webkitCancelFullScreen();
            break;
          
          default:
            document.cancelFullScreen();
        }
    }
}

