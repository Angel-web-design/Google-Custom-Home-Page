
// User browser module
import { detect_browser } from './js/functions/detect_browser.js';
const user_browser = detect_browser()
console.log(user_browser)


// Modify favicon
import { icon } from './js/functions/change_icon.js';
icon(user_browser);


// Full screen function 
import { full_screen } from './js/functions/full_screen.js';
const f_screen = document.querySelector('#f-screen');

f_screen.addEventListener('click', ()=>{ full_screen(f_screen, user_browser); });


// Search functionality
import { g_search } from './js/functions/search.js';
import { key_goto } from './js/functions/search.js';

const search = document.querySelector('.search');
search.value = ''
const search_btn = document.querySelector('.search-btn');

search_btn.addEventListener('click', ()=>{ g_search(search); })
document.addEventListener('keydown', ()=>{ key_goto(search, g_search) })



// Speech to text for google query
import { Speech } from './js/functions/speech.js';

const micro = document.querySelector('#micro-btn')
micro.addEventListener('click', ()=> { Speech(user_browser, search, g_search); })


// Toggle the query text area
import { toggle_q } from './js/functions/toggle_q.js';
const q_btn = document.querySelector('.query-btn');
const txt_area = document.querySelector('.querys');

q_btn.addEventListener('click', ()=>{ toggle_q(q_btn, txt_area) })

