let audrey = document.getElementById('#audrey')

//console.log(audrey)

/*
    Add an event listener to the `document` object to listen
    for the "scroll" event.
*/
window.addEventListener('scroll', function () {
    /*
        Adjust the width of audrey to be 1/3 the value of
        `window.scrollY`. No lower than 50px, though.
    */
    document.getElementById('audrey').style.height = window.scrollY + '50px';

    /*
        Adjust the height of audrey to be 1/4 the value of
        `window.scrollY`. No lower than 100px, though.
    */
   document.getElementById('audrey').style.width = window.scrollY + "100px";

   this.console.log("scroll")
})