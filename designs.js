// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

var color = document.getElementById('colorPicker').value;
var subButton = document.getElementById('canvasSubmit');
var canvas = document.getElementById('pixel_canvas');

function makeGrid() {
  $('#pixel_canvas').children().remove();
  var gridHeight = $('#inputHeight').val();
  var gridWidth = $('#inputWidth').val();

  for (var i = 0; i < gridHeight; i++) {
    $('#pixel_canvas').append('<tr></tr>');
  }

  for (var j = 0; j < gridWidth; j++) {
    $('tr').each(function () {
      $(this).append('<td></td>');
    });
  }

  console.log('width= ' + gridWidth);
  console.log('Height= ' + gridHeight);
}

$('#canvasSubmit').click(function (event) {
  event.preventDefault();
  makeGrid();
});

$('td').on('click', function () {
  $(this).bgColor = color;
});

console.log(color);
