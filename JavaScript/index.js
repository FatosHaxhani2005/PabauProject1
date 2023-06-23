// index.js
function shuffleValues() {
  var checkboxes = document.getElementsByName('checkbox');
  var checkboxArray = Array.from(checkboxes);
  checkboxArray.sort(function() { return 0.5 - Math.random() });
  checkboxArray.forEach(function(checkbox) {
    checkbox.parentNode.parentNode.insertBefore(checkbox.parentNode, checkbox.parentNode.parentNode.firstChild);
  });
}

function changeValues() {
  var checkboxes = document.getElementsByName('checkbox');
  checkboxes.forEach(function(checkbox) {
    checkbox.nextSibling.textContent = 'New Value';
    checkbox.value = 'New Value';
  });
}

function showSelectedValues() {
  var checkboxes = document.getElementsByName('checkbox');
  var selectedValues = [];
  checkboxes.forEach(function(checkbox) {
    if (checkbox.checked) {
      selectedValues.push(checkbox.value);
    }
  });
  alert(selectedValues.join(', '));
}

