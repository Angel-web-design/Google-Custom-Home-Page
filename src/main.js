
// User browser module
import { detect_browser } from './js/detect_browser.js';
const user_browser = detect_browser()


// Modify favicon
import { icon } from './js/change_icon.js';
icon(user_browser);


// Full screen function 
import { full_screen } from './js/full_screen.js';
const f_screen = document.querySelector('#f-screen');

f_screen.addEventListener('click', ()=>{ full_screen(f_screen, user_browser); });


// Search functionality
import { g_search } from './js/search.js';
import { key_goto } from './js/search.js';

const search = document.querySelector('.search');
const search_btn = document.querySelector('.search-btn');

search_btn.addEventListener('click', ()=>{ g_search(search); })
document.addEventListener('keydown', ()=>{ key_goto(search, g_search) })



// Speech to text for google query
import { Speech } from './js/speech.js';


const micro = document.querySelector('#micro-btn')
micro.addEventListener('click', ()=> { Speech(user_browser, search); })




