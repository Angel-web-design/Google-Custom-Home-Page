//Variables
const url = 'http://www.google.com/search?q='


// Search functionality
export function g_search(search){
    let query = search.value
    if(query == ''){ return }
    let cleanQuery = query.replaceAll(' ','+',query);
    window.location.href = url + cleanQuery;
}

export function key_goto(search, fn){
    let key = window.event.key;
    if(key === 'Enter' && search.value !== ''){ fn(search) };
    return;
}