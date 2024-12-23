const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseFloat(document.querySelector('#weight').value);
  const result = document.querySelector('#results');

  if (height == '' || height < 0 || isNaN(height)) {
    result.innerHTML = `Please enter a valid height!`;
  } else if (weight == '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Please enter a valid weight!`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    if (bmi < 18.6) {
      result.innerHTML = `<span>${bmi}<br>Under Weight</span>`;
    } else if (18.6 <= bmi <= 24.9) {
      result.innerHTML = `<span>${bmi}<br>Normal</span>`;
    } else {
      result.innerHTML = `<span>${bmi}<br>Over Weight</span>`;
    }
  }
});