const mass = [

    {
        question: 'Какой национальный цветок Японии?',
        answer: 'Сакура'
    },

    {
        question: 'Сколько полос на флаге США?',
        answer: '13'
    },

    {
        question: 'Как называется самая известная смотровая площадка Москвы?',
        answer: 'Воробьевы горы'
    },

    {
        question: 'Страна с самой высокой продолжительностью жизни.',
        answer: 'Китай'
    },

    {
        question: 'Какой элемент имеет химический символ «Fe»?',
        answer: 'Железо'
    },

    {
        question: 'В каком году была основана Организация Объединенных Наций (ООН)? ',
        answer: '1945'
    },

    {
        question: 'Как называется учение о происхождении и развитии Вселенной?',
        answer: 'Космогония'
    },

    {
        question: 'Какая таблетка отличается от всех остальных? ',
        answer: 'Медальон'
    },

    {
        question: ' Если вы упали в безвоздушную дыру, проходящую через всю Землю, сколько времени потребуется, чтобы упасть на другую сторону? (До ближайшей минуты.)',
        answer: '42'
    },

    {
        question: 'Какой процент массы солнечной системы находится на Солнце с точностью до 1 процента?',
        answer: '99'
    },

    {
        question: 'Кто иммеет Даниила?',
        answer: 'Рома'
    }

];

const button = document.querySelector('.button');
const inp = document.querySelector('.answer');
const qest = document.querySelector('.qest');
const modal = document.querySelector('.modal');
const winModal = document.querySelector('.modal-Window');
const texM = document.querySelector('.modal__text');
const checks = document.querySelector('.checks');

let check = 0;

let answers = Math.floor(Math.random() * mass.length);

const qestF = () => {
   return qest.innerHTML = mass[answers].question;
}

qestF();

button.addEventListener('click', e => {
    e.preventDefault();

    const inpValue = inp.value.toLowerCase().trim();

    if (!inpValue) {
        return
    } else if (inpValue === mass[answers].answer.toLowerCase()) {
        texM.innerHTML = 'Угадал!';
        texM.style.color = 'green';

        modal.classList.add('active');
        winModal.classList.add('active');

        checks.innerHTML = ++check;

        button.disabled = true;

    } else {
        texM.innerHTML = 'Не угадал!';
        texM.style.color = 'red';

        modal.classList.add('active');
        winModal.classList.add('active');
    }

});

const reverses = document.querySelector('.modal__link');

reverses.addEventListener('click', showRewerse);

function showRewerse() {
    answers = Math.floor(Math.random() * mass.length);

    qestF();

    inp.value = '';

    modal.classList.remove('active');
    winModal.classList.remove('active');
    button.disabled = false;
}