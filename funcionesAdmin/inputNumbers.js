$('.input-number-increment').click(function() {
    var $input = $(this).parents('.input-number-group').find('.input-number');
    var val = parseInt($input.val(), 10);
    $input.val(val + 1);
  });
  
  $('.input-number-decrement').click(function() {
    var $input = $(this).parents('.input-number-group').find('.input-number');
    var val = parseInt($input.val(), 10);
    if(val <= 0)
          $input.val(0);
        else
          $input.val(val - 1);
  })
  
  