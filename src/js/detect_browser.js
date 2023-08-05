// Varibles
const sUA = navigator.userAgent;

// Detect user's browser for the functionalities
export function detect_browser() {
    let i = 0;
    let list = ['firefox', 'chrome', 'opera', 'edge', 'msie'];
    while(!(sUA.toLowerCase().indexOf(list[i]) > -1)){i++};
    return list[i];
};
  