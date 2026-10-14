const screen = document.querySelector('.screen');

let value = "";
const operators = "+-*/.^";

const operand = document.querySelector('.operands');

operand.addEventListener('click', (e) => {
    if(e.target.tagName === 'BUTTON'){
        value += e.target.textContent;
        screen.textContent = value;
    }
});

const shelfOne = document.querySelector('.shelf-one');
shelfOne.addEventListener('click', (e) => {
    if(e.target.tagName === 'BUTTON' && !operators.includes(e.target.textContent)){
        value += e.target.textContent;
        screen.textContent = value;
    }
    else{
        if(!operators.includes(value[value.length-1])){
            value += e.target.textContent;
            screen.textContent = value;
        }
    }
});

const shelfTwo = document.querySelector('.shelf-two');
shelfTwo.addEventListener('click', (e) => {
    if(e.target.tagName === 'BUTTON' && !operators.includes(e.target.textContent)){
        value += e.target.textContent;
        screen.textContent = value;
    }
    else{
        if(!operators.includes(value[value.length-1])){
            value += e.target.textContent;
            screen.textContent = value;
        }
    }
});

const clear = document.querySelector('.clear');
clear.addEventListener('click', () => {
    value = "";
    screen.textContent = value;
})

const del = document.querySelector('.delete');
del.addEventListener('click', () =>{
    value = value.slice(0,-1);
    screen.textContent = value;
})

const equal = document.querySelector('.equal');
equal.addEventListener('click', () =>{
    value = math.evaluate(value);
    screen.textContent = value;
})


