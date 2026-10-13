const screen = document.querySelector('.screen');

let value = "button";

const operand = document.querySelector('.operands');

operand.addEventListener('click', (e) => {if(e.target.tagName === 'BUTTON'){screen.textContent += e.target.textContent}})