let header = document.getElementsByTagName('h2');
console.log(header.length)
let Header = [...header]
Header.forEach((singleHeader) => (singleHeader.style.color = 'black'))

  document.addEventListener('DOMContentLoaded', function() {
    const increaseBtn = document.querySelector('.inc');
  
    increaseBtn.addEventListener('click', function() {
      document.body.style.backgroundColor = 'green';
    });
  });  

  document.addEventListener('DOMContentLoaded', function() {
    const increaseBtn = document.querySelector('.inc');
    const heading = document.getElementById('myHeading');
  
    increaseBtn.addEventListener('click', function() {
      let currentNumber = parseInt(heading.textContent);
      currentNumber++;
      heading.textContent = currentNumber;
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    const decreaseBtn = document.querySelector('.dec');
    const heading = document.getElementById('myHeading');
  
    decreaseBtn.addEventListener('click', function() {
      let currentNumber = parseInt(heading.textContent);
      currentNumber--;
      heading.textContent = currentNumber;
    });
  });
  
// Get the elements
const decreaseButton = document.querySelector('.dec');
const resetButton = document.querySelector('.res');
const increaseButton = document.querySelector('.inc');
const heading = document.getElementById('myHeading');

// Set initial value
let counter = 0;
heading.textContent = counter;

// Add event listeners
decreaseButton.addEventListener('click', () => {
  counter--;
  heading.textContent = counter;
  document.body.style.backgroundColor = 'red';
});

resetButton.addEventListener('click', () => {
  counter = 0;
  heading.textContent = counter;
  document.body.style.backgroundColor = 'yellow';
});

increaseButton.addEventListener('click', () => {
  counter++;
  heading.textContent = counter;
});

