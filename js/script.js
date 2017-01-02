function sum(a, b) {
  return a + b;
}

document.getElementById('btn-calc').onclick = function functionName() {
  var valueA = parseInt(document.getElementById('value-a').value);
  var valueB = parseInt(document.getElementById('value-b').value);

  return sum(valueA, valueB);
}
