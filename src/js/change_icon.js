// Change tab icon function

export function icon(browser){
    let favicon = document.querySelector('#favicon')
    let icons = {
      firefox: './src/static/icons/firefox.ico',
      chrome: './src/static/icons/google.ico',
      edge: './src/static/icons/edge.ico',
      opera: './src/static/icons/opera.ico',
      msie: './src/static/icons/msie.ico'
    }
  
    switch(browser){
      case 'firefox':
        favicon.href = icons.firefox;
        break;
      case 'chrome':
        favicon.href = icons.chrome;
        break;
      case 'opera':
        favicon.href = icons.edge;
        break;
      case 'opera': 
        favicon.href = icons.opera;
      case 'msie':
        favicon.href = icons.msie;
        break
    }
  }