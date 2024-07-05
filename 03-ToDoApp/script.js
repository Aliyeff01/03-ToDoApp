function add() {
    let text=document.querySelector("input").value
    if (text!="") {
        main.innerHTML+=`<li>${text} 
            <div class="icon">
                <svg onclick="check(this)" class="check" xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><path fill="#17de5d" d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>
                <svg onclick="deleted(this)" xmlns="http://www.w3.org/2000/svg" height="16" width="12" viewBox="0 0 384 512"><path fill="#d51010" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
            </div>
            </li>`  
    }
    document.querySelector('input').value="";
}
function check(select) {
    let element=select.parentElement.parentElement;
    if (element.style.textDecoration=="none" ) {
        element.style="text-decoration: line-through";
        select.style="opacity: 0.5" 
    }
    else{
        element.style="text-decoration: none";
        select.style="opacity: 1" 
    }
}
function deleted(select) {
    let element=select.parentElement.parentElement;
    element.remove()
}