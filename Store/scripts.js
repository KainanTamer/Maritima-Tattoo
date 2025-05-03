const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const items = document.querySelectorAll('.item');
const dots = document.querySelectorAll('.dot');
const numberIndicator = document.querySelector('.numbers');
const list = document.querySelector('.list');

let active = 0;
const total = items.length;
let timer;

function update(direction) {
    document.querySelector('.item.active').classList.remove('active');
    document.querySelector('.dot.active').classList.remove('active');
    
    active = (active + direction + total) % total;
    
    items[active].classList.add('active');
    dots[active].classList.add('active');
    
    if(numberIndicator) {
        numberIndicator.textContent = `${active + 1}/${total}`;
    }
    
    resetTimer();
}

function resetTimer() {
    clearInterval(timer);
    timer = setInterval(() => update(1), 5000);
}

prevButton.addEventListener('click', () => {
    update(-1);
});

nextButton.addEventListener('click', () => {
    update(1);
});

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        const direction = index > active ? 1 : -1;
        active = index - 1;
        update(direction);
    });
});

resetTimer();

list.addEventListener('mouseenter', () => clearInterval(timer));
list.addEventListener('mouseleave', resetTimer);