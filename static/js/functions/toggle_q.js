// Toggle the query text area

export function toggle_q(btn, txt_area){
    btn.classList.toggle('q-active');

    if(txt_area.classList.contains('q-close')){
        txt_area.classList.toggle('q-open')
        txt_area.classList.toggle('q-close')
    } 
    else if (txt_area.classList.contains('q-open')){
        txt_area.classList.toggle('q-open')
        txt_area.classList.toggle('q-close')
    }
    else {
        txt_area.classList.toggle('q-close')
    }

    
}