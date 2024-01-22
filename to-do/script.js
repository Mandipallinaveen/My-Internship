//////////// code for changing theme

let toggleBtns = [...document.querySelectorAll('.theme-toggle')];

toggleBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        document.body.classList.toggle('day')
    })
})


////////// code for tick 

function tickButtonFunctionality() {
    let tickBoxes = [...document.querySelectorAll('.tick-box')];

    tickBoxes.forEach((box) => {
        box.addEventListener('click', () => {
            box.parentElement.classList.add('task-done');
            box.querySelector('img').setAttribute('src', './images/icon-check.svg');
            resetCounter();
        })
    })
}

function delBtnFunctionality() {
    let delBtns = [...document.querySelectorAll('.cross-logo')];

    delBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            btn.parentElement.remove();
            resetCounter();
        })
    })
}

tickButtonFunctionality();
delBtnFunctionality();


/////////// code for making new items

function makeItem(input) {

    let listItem = document.createElement('li');
    listItem.classList.add('task')

    // first div for the tick
    // tick-box
    let tickBox = document.createElement('div');
    tickBox.classList.add('tick-box');

    // tick
    let tick = document.createElement('div');
    tick.classList.add('tick')

    // img 
    let img = document.querySelector('img');
    // img.classList.add('blank-logo');
    img.setAttribute('class', 'blank-logo');
    img.setAttribute('src', './images/blank-logo.png');
    img.setAttribute('alt', 'tick');

    tick.appendChild(img)
    tickBox.appendChild(tick);
    listItem.appendChild(tickBox);


    // second div for text
    let text = document.createElement('div');
    text.classList.add('text');
    text.innerText = input;

    listItem.appendChild(text);


    // the cross img at the last 
    let cross = document.createElement('img');
    cross.setAttribute('src', './images/icon-cross.svg');
    cross.setAttribute('alt', 'cross');
    cross.classList.add('cross-logo');

    listItem.appendChild(cross);

    document.querySelector('.central__tasks').prepend(listItem);

    //// code for adding new li to these arrays
    // tickBoxes = [...document.querySelectorAll('.tick-box')];
    // delBtns = [...document.querySelectorAll('.cross-logo')];
    tickButtonFunctionality();
    delBtnFunctionality();
    resetCounter();
}

let input = document.querySelector('#input');

input.addEventListener('keyup', (e) => {
    if (e.code === 'Enter' && input.value.length) {
        makeItem(input.value)
        input.value = '';
    }

})


//////////// code for clearing finished tasks

let clearFinishedBtn = document.querySelector('#clear');

clearFinishedBtn.addEventListener('click', () => {
    let tasks = [...document.querySelectorAll('.task')];
    tasks.forEach((task) => {
        if (task.classList.contains('task-done')) task.remove()
        resetCounter();
    })
})


///////////// code for showing different tasks at a time

let allBtns = [...document.querySelectorAll('.all')];

allBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        let tasks = [...document.querySelectorAll('.task')];
        tasks.forEach((task) => {
            task.style.display = 'flex';
        })
    })
})

let activeBtns = [...document.querySelectorAll('.active')];

activeBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        let tasks = [...document.querySelectorAll('.task')];
        tasks.forEach((task) => {
            if (task.classList.contains('task-done')) {
                task.style.display = 'none';
            } else if (!task.classList.contains('task-done')) {
                task.style.display = 'flex';
            }
        })
    })
})

let completeBtns = [...document.querySelectorAll('.completed')];

completeBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        let tasks = [...document.querySelectorAll('.task')];
        tasks.forEach((task) => {
            if (!task.classList.contains('task-done')) {
                task.style.display = 'none';
            } else if (task.classList.contains('task-done')) {
                task.style.display = 'flex';
            }
        })
    })
})



////////////// code for the task counter 



function resetCounter() {
    let counter = document.querySelector('#counter');

    let allTasks = [...document.querySelectorAll('.task')].length;
    let completedTasks = [...document.querySelectorAll('.task-done')].length;

    counter.innerText = allTasks - completedTasks;
}