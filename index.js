function myFunction() {
    let x = document.getElementById("mySecondNav");
    if (x.className === "second-nav") {
        x.className += " responsive";
    } else {
        x.className = "second-nav";
    }
}
function calWidget() {
    let popup = document.getElementById('myPopup');
    popup.classList.toggle('show');
    let calFade = document.getElementById('calFade');
    calFade.classList.toggle('show');
    let calendar = document.getElementById('msgsndr-calendar');
    if (calendar.src !== 'https://api.leadconnectorhq.com/widget/booking/51s99XpkQ63NwU4eLIwQ') {
        calendar.src = 'https://api.leadconnectorhq.com/widget/booking/51s99XpkQ63NwU4eLIwQ'
    }
    let exitButton = document.getElementById('exit-button');
    exitButton.classList.toggle('show');
}
function exitWidget() {
    calWidget();

}
function schedWidget() {
    let schedPopup = document.getElementById('mySched');
    schedPopup.classList.toggle('show');
    let schedFade = document.getElementById('schedFade');
    schedFade.classList.toggle('show');
    let exitButton = document.getElementById('exit-button2');
    exitButton.classList.toggle('show');
}
function toSpanish() {
    document.getElementById('home1').innerHTML = "You've been Spanished!";
    let a = document.querySelectorAll('button1');
    let b = a.map((element) => element.innerHTML = "haga clic aquí para una clase gratuita")        
    return b;
}