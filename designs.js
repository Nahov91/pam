// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
var gridHeight = document.getElementById('inputHeight').value;
var gridWidth = document.getElementById('inputWidth').value;
var color = document.getElementById('colorPicker').value;

function makeGrid() {
  for (var i = 0; i < gridHeight; i++) {
    $('#pixel_canvas').append($('<tr></tr>'))
  }
    for (var i = 0; i < gridWidth; i++) {
      $('tr').append($('<td></td>'))
    }
}

$('submit').on('click', makeGrid());

$('td').on('click', function() {
  $(this).bgColor = color;
});
console.log(gridWidth);
console.log(gridHeight);
console.log(color);
