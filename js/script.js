
document.getElementById('btn1').addEventListener('click', function() {
  const output1 = document.getElementById('output1');
  const paragraph = output1.querySelector('p');
  paragraph.style.color = 'red';
});

document.getElementById('btn2').addEventListener('click', function() {
  const output2 = document.getElementById('output2');
  const span = document.createElement('span');
  span.textContent = 'Hello world';
  output2.appendChild(span);
});

document.getElementById('btn3').addEventListener('click', function() {
  const output3 = document.getElementById('output3');
  const paragraph = output3.querySelector('p');
  paragraph.classList.remove('small-text');
});

document.getElementById('btn4').addEventListener('click', function() {
  const output4 = document.getElementById('output4');
  const paragraphs = output4.querySelectorAll('p');
  paragraphs.forEach(function(p) {
    p.style.color = 'red';
  });
});

document.getElementById('btn5').addEventListener('click', function() {
  const input = document.getElementById('message');
  console.log(input.value);
});