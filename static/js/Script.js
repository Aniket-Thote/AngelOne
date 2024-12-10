// <Variable Declaration>
const header = document.querySelector('header');
const menuBtn = document.getElementById('menu-btn');
const freezScreen = document.querySelector('.freez-screen');
const menus = header.querySelectorAll('.menu > a');
// </Variable Declaration>

// <Events>

window.addEventListener('scroll', function() {
    if (window.pageYOffset > 0) {
        header.classList.add('glass-efect');
    } else {
        header.classList.remove('glass-efect');
    }
});

menuBtn.addEventListener('click', () => {
    header.classList.add('sm-hdr-activate');
    freezScreen.classList.add('freez');
});

freezScreen.addEventListener('click', () => {
    header.classList.remove('sm-hdr-activate');
    freezScreen.classList.remove('freez');
});

menus.forEach(menu => {
    menu.addEventListener('click', () => {
        header.classList.remove('sm-hdr-activate');
        freezScreen.classList.remove('freez');
    });
});

// </Events>

let minutes = 15; // Start with 15 minutes
let seconds = 0;  // Start with 0 seconds

    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');

    function updateTimer() {
        if (seconds === 0) {
            if (minutes === 0) {
                clearInterval(timerInterval);
                document.querySelector('.countdown h2').textContent = "The offer has expired!";
                return;
            }
            minutes--;
            seconds = 59;
        } else {
            seconds--;
        }
        
        minutesElement.textContent = minutes.toString().padStart(2, '0');
        secondsElement.textContent = seconds.toString().padStart(2, '0');
    }

    const timerInterval = setInterval(updateTimer, 1000);