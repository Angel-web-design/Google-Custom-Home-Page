// Change tab icon function

export function icon(browser){
    let favicon = document.querySelector('#favicon')
    let icons = {
      firefox: '../../icons/firefox.ico',
      chrome: '../../icons/google.ico',
      edge: '../../icons/edge.ico',
      opera: '../../icons/opera.ico',
      msie: '../../icons/msie.ico'
    }
  
    switch(browser){
      case 'firefox':
        favicon.href = icons.firefox;
        break;
      case 'chrome':
        favicon.href = icons.chrome;
        break;
      case 'opera':
        favicon.href = icons.opera;
        break;
      case 'edge': 
        favicon.href = icons.edge;
        break
      case 'msie':
        favicon.href = icons.msie;
        break
    }
  }