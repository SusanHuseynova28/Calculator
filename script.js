const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const result = document.getElementById('result');

document.getElementById('plus')
.addEventListener('click', () => {
  result.value = Number(input1.value || 0) + Number(input2.value || 0);
});


document.getElementById('minus')
.addEventListener('click', () => {
  result.value = Number(input1.value || 0) - Number(input2.value || 0);
});


document.getElementById('multiply')
.addEventListener('click', () => {
  result.value = Number(input1.value || 0) * Number(input2.value || 0);
});


document.getElementById('devide')
.addEventListener('click', () => {
  const value2 = Number(input2.value);
  if (value2 === 0) {
    result.value = 'Cannot devide by zero';
  } else {
    result.value = Number(input1.value || 0) / value2;
  } 
});
