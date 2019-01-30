$(document).ready(function(){

  $('.container img').each(function() {
      $(this).click(function() {
        $(this).hide();
      });
  })

  $('button').click(function() {
    $('img').show();
  });
});