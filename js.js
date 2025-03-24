let load = document.querySelector('.loading')
window.addEventListener('DOMContentLoaded', function() {
    anime({
        targets: '.loading',
        keyframes: [
            {translateX: 160},
            {translateY: 89},
            {translateX: 273},
            {translateY: -90},
            {translateX: 160},
            {translateY: 0},
            {translateX: 350},
            {translateX: 430, translateY: 90},
            {translateX: 510},
            {translateY: -90},
            {translateX: 420, translateY: 0},
            {translateX: 607},
        ],
        duration: 10000,
        easing: 'linear',
        complete: () => {
            window.location.href = "golov2.html";
        }
    })
});


function checkPassword() {
    let input = document.querySelector('.input');
    if (input.value == "4shprog") {
        input.style.border = "10px solid rgb(0, 255, 38)"
        window.location.href = "Babaluda.html";
    } else {
        window.close.href = "golov2.html";
    }
};

