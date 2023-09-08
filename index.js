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
let change = -1;
function toSpanish() {
    if (sessionStorage.getItem('change') == 1) {
        sessionStorage.setItem('change', -1);
    } else {
        sessionStorage.setItem('change', 1);
    }
    indexToSpanish();
    location.reload();
}
function toSpanish1() {
    if (sessionStorage.getItem('change') == 1) {
        sessionStorage.setItem('change', -1);
    } else {
        sessionStorage.setItem('change', 1);
    }
    location.reload();
}
function toSpanish2() {
    if (sessionStorage.getItem('change') == 1) {
        sessionStorage.setItem('change', -1);
    } else {
        sessionStorage.setItem('change', 1);
    }   
    testimonialsToSpanish();
    location.reload();
}
function toSpanish3() {
    if (sessionStorage.getItem('change') == 1) {
        sessionStorage.setItem('change', -1);
    } else {
        sessionStorage.setItem('change', 1);
    }    
    perksToSpanish();
    location.reload();
}
function indexToSpanish() {
    let change = sessionStorage.getItem('change')
    if (change != 1) {
        return;
    };
    allToSpanish();
    let A = document.getElementById('textA');
    A.children[0].textContent = 'Conviértete en un bailarín de salsa hoy!';
    A.children[1].textContent = '¡Estamos buscando 20 personas que realmente quieran aprender a bailar Salsa por fin!';
    A.children[2].textContent = 'Somos su estudio de danza local que ha transformado a cientos de personas como usted y estamos ansiosos por servir a aquellos que buscan hacer del 2022 su mejor año hasta el momento.';
    A.children[3].textContent = 'Esto es lo que obtendrías con nuestro Reto de Salsa de Seis Semanas:';
    let perks = document.getElementById('the-perks');
    perks.textContent = 'Las Ventajas';
    let B = document.getElementById('textB');
    B.children[0].textContent = '✅ 2 lecciones de salsa de ALTA ENERGÍA por semana';
    B.children[1].textContent = '✅ Acceso a un portal exclusivo de Salsa: consejos, trucos y reseñas de lecciones';
    B.children[2].textContent = '✅ Noche de Gala de Graduación donde podrás practicar tus nuevos movimientos';
    let C = document.getElementById('textC');
    C.children[0].textContent = '✅ Acceso 24/7 a nuestra exclusiva comunidad VIP Salsa';
    C.children[1].textContent = '✅ Secretos de baile que te garantizan convertirte en un HIT en la pista de baile';
    C.children[2].textContent = 'Y mucho más...';
    let D = document.getElementById('textD');
    D.textContent = 'Necesitamos darte una advertencia justa porque esto no es para cualquiera que no esté listo para finalmente aprender Salsa... Pero... Si estás listo para aprender a entrar con confianza a la pista de baile, te queremos.'
    let E = document.getElementById('textE');
    E.textContent = 'Si está preparado para sentir esa sensación de confianza inquebrantable que sólo puede ganarse, lo queremos. Si estás listo para que tus amigos te pregunten "¡Vaya, dónde aprendiste a bailar!" te queremos.'
    let F = document.getElementById('textF');
    F.textContent = '🚨Si eso te suena familiar, haz clic a continuación ahora y reserva tu CLASE GRATUITA a continuación🚨'
    let G = document.getElementById('textG');
    G.textContent = '¿Sabías que? En momentos de estrés, nuestra hormona del estrés (cortisol) aumenta y nuestro sistema inmunológico sufre. La danza es una excelente forma de ejercicio y para eso también estamos en esto.'
    let H = document.getElementById('textH');
    H.textContent = 'Ahora bien, si todavía estás leyendo esto, tienes dos opciones:'
    let I = document.getElementById('textI');
    I.textContent = 'Opción 1: finge que nunca has visto este anuncio y continúa con tu día mientras te convences de por qué la próxima semana, el próximo mes o incluso el próximo año es un "mejor momento" para finalmente aprender esta increíble habilidad.'
    let J = document.getElementById('textJ');
    J.textContent = 'Opción 2: Reconocer que la vida es un baile como dicen y bueno, ¿por qué deberías pasar la mayor parte de tu tiempo sólo mirando en lugar de ser parte de ello?'
    let sessions = document.getElementById('what-are-sessions-like');
    sessions.textContent = '¿Cómo son las sesiones?';
}
function scheduleToSpanish() {
    let change = sessionStorage.getItem('change')
    if (change !== '1') {
        return;
    };
    allToSpanish();
    let home = document.getElementById('home');
    home.textContent = 'Horario de Clase';
}
function testimonialsToSpanish() {
    let change = sessionStorage.getItem('change')
    if (change !== '1') {
        return;
    };
    allToSpanish();
    let home = document.getElementById('home');
    home.textContent = 'Testimonios';
    let A = document.getElementById('textA');
    A.children[0].textContent = 'Conocer a Miguel:';
    A.children[1].textContent = '¡Pasó de Cero a Salsero en Tiempo Récord!';
    let B = document.getElementById('textB');
    B.children[0].textContent = 'Conocer a Josie:';
    B.children[1].textContent = 'A ella le encanta su comunidad de baile aquí y se está convirtiendo en una suave Salsera.';
    let C = document.getElementById('textC');
    C.children[0].textContent = 'Conocer a Angel:';
    C.children[1].textContent = 'Una de nuestras muchas historias de éxito, recibe elogios por su liderazgo frecuente.';
    let D = document.getElementById('textD');
    D.textContent = '¡Y muchos más!';
}
function perksToSpanish() {
    let change = sessionStorage.getItem('change')
    if (change !== '1') {
        return;
    };
    allToSpanish();
    let home = document.getElementById('home');
    home.textContent = 'Beneficios Para el Cliente';
    let A = document.getElementById('textA');
    A.innerText = 'Grupo de Facebook Gratuito con Pasos/Trucos/Consejos';
    let B = document.getElementById('textB');
    B.innerText = 'Portal en Línea Gratuito';
    let C = document.getElementById('textC');
    C.innerText = 'Ven y Sé Parte de Nuestro...';
    let D = document.getElementById('textD');
    D.innerText = 'Programa de Fitness Gratuito!';
    let E = document.getElementById('textE');
    E.innerText = 'Excursiones de Baile';
}
function allToSpanish() {
    let a = document.querySelectorAll('.homeNav');
    a.forEach(el => {
        el.textContent = 'Inicio'
    });
    let b = document.querySelectorAll('.schedNav');
    b.forEach(el => {
        el.textContent = 'Programar'
    });
    let c = document.querySelectorAll('.testNav');
    c.forEach(el => {
        el.textContent = 'Testimonios'
    });
    let d = document.querySelectorAll('.perkNav');
    d.forEach(el => {
        el.textContent = 'Beneficios'
    });
    let e = document.querySelectorAll('.aboutNav');
    e.forEach(el => {
        el.textContent = 'Sobre Nosotros'
    });
    let aboutUs = document.getElementById('about-us');
    aboutUs.textContent = 'Sobre Nosotros';
    let K = document.getElementById('textK');
    K.textContent = 'Ubicación:'
    let L = document.getElementById('textL');
    L.textContent = 'Número de teléfono:';
    let button = document.querySelectorAll('.button1');
    button.forEach(el => {
        el.textContent = 'Haga Clic Aquí Para Una Clase Gratuita'
    });
    let button2 = document.querySelector('.button3');
    button2.textContent = 'Programa Tu Primera Clase';
    let button3 = document.getElementById('langButton');
    button3.textContent = 'In English';
}