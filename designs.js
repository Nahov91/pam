// Select color input
// Select size input

//var subButton = document.getElementById('canvasSubmit');
//var canvas = document.getElementById('pixel_canvas');

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
  console.log($('input[type = "color"]').val());
}

$('#canvasSubmit').click(function (event) {
  event.preventDefault();
  makeGrid();
});

$('#pixel_canvas').on('click', 'td', function () {
  var color = $('input[type = "color"]').val();
  $(this).attr('bgcolor', color);
});
