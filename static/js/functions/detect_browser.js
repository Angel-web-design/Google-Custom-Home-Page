// Varibles
const sUA = navigator.userAgent;
const list = {
    firefox: 'firefox',
    opr: 'opera',
    edg: 'edge',
    msie: 'msie',
    safari: 'safari',
    chrome: 'chrome'
}

// Detect user's browser for the functionalities
export function detect_browser() {
    let i = 0;
    let map = ['firefox', 'opr', 'edg', 'msie', 'chrome', 'safari' , 'other'];
    while(!(sUA.toLowerCase().indexOf(map[i]) > -1)){i++};
    let name = map[i];
    return list[name]
};
