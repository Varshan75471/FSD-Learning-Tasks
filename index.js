function appendToDisplay(value) {
    document.getElementById('display').value += value;
  }
  
  function calculate() {
    try {
      const result = eval(document.getElementById('display').value);
      document.getElementById('display').value = result;
    } catch (error) {
      alert('Invalid expression');
    }
  }
  
  function clearDisplay() {
    document.getElementById('display').value = '';
  }
  document.addEventListener('keydown', function(event) {
    const key = event.key;
    if (!isNaN(key) || ['+', '-', '*', '/', '=', 'Enter', 'Backspace', '.'].includes(key)) {
      if (key === 'Enter') {
        calculate();
      } else if (key === 'Backspace') {
        clearDisplay();
      } else {
        appendToDisplay(key);
      }
    } else {
      alert('Only numbers and operators are allowed');
    }
  });
  