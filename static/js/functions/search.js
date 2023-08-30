//Variables
const url = 'http://www.google.com/search?q='
let lastQuery = null;



// Search functionality
export function g_search(search){

    let query = search.value

    if(query == ''){ return }

    let cleanQuery = query.replaceAll(' ','+',query);

    popup(url, cleanQuery, search)
}

export function key_goto(search, fn){

    let key = window.event.key;

    if(key === 'Enter' && search.value !== ''){ fn(search) };
    return;
}

function popup(url, cleanQuery, search){

    const form = document.querySelector('.popup');
    form.classList.add('active');

    uncheckAll()

    const p_1 = document.querySelector('#popup__1')
    const p_2 = document.querySelector('#popup__2')

    p_1.addEventListener('click', ()=>{ 
        if(lastQuery){ lastQuery.close() }
        lastQuery = window.open(url + cleanQuery) 
        uncheckAll();
        search.value = ''
        form.classList.remove('active')
    })

    p_2.addEventListener('click', ()=>{ 
        window.location.href = url + cleanQuery 
        uncheckAll();
        search.value = ''
        form.classList.remove('active')
    })
}


function uncheckAll(){
    document.querySelectorAll('.popup input[type=checkbox]').forEach( checkElement=>{ checkElement.checked = false } )
}
