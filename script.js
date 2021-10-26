/*
function loadEvent() {
    console.log('the page has loaded');

    document.getElementById("menu-btn").addEventListener("click", function(event){
        console.log(event.target);
        //document.getElementById("menu-btn").classList.toggle("clicked");
        event.target.classList.toggle("clicked");
    });
}
*/

function fastLog(text){
    console.log(text);
    return "muhaha";
}

function loadEvent() {
    console.log('the page has loaded');
    document.getElementById("menu-btn").addEventListener("click", buttonClicked);
}

function buttonClicked(event){
    //console.log(event);
    console.log(event.target);
    //console.log(event.target.classList);
    event.target.classList.toggle("clicked");
    const fastLogResult = fastLog("Ezt a szöveget szeretném kiloggoltatni");
    console.log(fastLogResult);
    const randomText = "Nagyon random";
    fastLog(randomText);
    document.getElementById("about").classList.add("clicked-too");
}


window.addEventListener("load", loadEvent);