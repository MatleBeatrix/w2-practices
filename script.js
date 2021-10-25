function loadEvent() {
    console.log('the page has loaded');

    document.getElementById("menu-btn").addEventListener("click", function(event){
        console.log(event.target);
        //document.getElementById("menu-btn").classList.toggle("clicked");
        event.target.classList.toggle("clicked");
    });
}

window.addEventListener("load", loadEvent);