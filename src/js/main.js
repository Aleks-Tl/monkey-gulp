import './_vendor';
import vars from './_vars';
import './_functions';
import './_components';

// WOW.js

new WOW().init();

// Fixed header

const header = document.querySelector('.header');

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > header.clientHeight || document.documentElement.scrollTop > header.clientHeight) {
      header.classList.add('fixedHeader');
  } else {
      header.classList.remove('fixedHeader');
  }
}

// Calculate

const rangeOne = document.querySelector('.range-one');
const rangeTwo = document.querySelector('.range-two');

const rangeVal = document.getElementById('amount');
const rangeValTenor = document.getElementById('tenor');

const rangeInput = document.querySelector('.range_container input');
const rangeInputTwo = document.querySelector('.range_container_two input');
if (rangeInput) {
  let rangeInputValue = +rangeInput.value;
  rangeVal.style.left = (rangeInputValue - 5) + '%';
}

if (rangeInputTwo) {
  let rangeInputValue = +rangeInput.value;
  rangeVal.style.left = (rangeInputValue - 5) + '%';
}

function handleInputChange(e) {
  let target = e.target;
  if (e.target.type !== '.range-one') {
    target = document.querySelector('.range-one');
  }
  const min = target.min;
  const max = target.max;
  const val = target.value;
  let positionVal = val;
  console.log(positionVal);
  if (positionVal < 25) {
    positionVal = 27;
  } else if (positionVal > 85) {
    positionVal = 84;
  }
  rangeVal.style.left = (positionVal - 3) + '%';

  target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%';
}

function handleInputChangeTwo(e) {
  let target = e.target;
  if (e.target.type !== '.range-two') {
    target = document.querySelector('.range-two');
  }
  const min = target.min;
  const max = target.max;
  const val = target.value;
  let positionVal = val;
  if (positionVal < 25) {
    positionVal = 27;
  } else if (positionVal > 85) {
    positionVal = 84;
  }
  rangeValTenor.style.left = (positionVal - 3) + '%';

  target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%';
}

rangeOne.addEventListener('input', handleInputChange);
rangeTwo.addEventListener('input', handleInputChangeTwo);


